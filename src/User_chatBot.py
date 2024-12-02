from langchain_ollama.llms import OllamaLLM
from langchain.memory import ConversationSummaryMemory
from langchain_core.prompts import ChatPromptTemplate, MessagesPlaceholder
from rag.Rag import Rag
from functionCall.Tools import WebTools

class User_chatBot:
    def __init__(self, model:str = "mistral:latest", ollama_options:dict = None):
        self._disable_langchain_debug()
        
        # Initialisation du modèle
        self.ollama_model = OllamaLLM(
            model=model,
            options=ollama_options if ollama_options else {'temperature': 1}# vérifier le paramétrage de la température 0 pour déterministe langchain et 1 pour ollama_python
        )
        
        # Initialisation des composants
        self.web_tools = WebTools()
        self.tools = self.web_tools.get_tools()
        self.llm_with_tools = self.ollama_model.bind_tools(self.tools)

        self.rag = Rag()
        self.output = ""
        
        # Initialisation de la mémoire
        self.history = ConversationSummaryMemory(llm=self.llm_with_tools)
        self.running = False
        
        # Configuration du prompt de base
        self.prompt_template = """Vous êtes un assistant IA utile et concis. Utilisez les informations suivantes pour répondre à la question.

Contexte disponible:
{context}

Historique de la conversation (à ne pas mentionner directement):
{history}

Question: {input}

Réponse:"""

    def _disable_langchain_debug(self):
        """Désactive les logs de debug de langchain"""
        import logging
        for name in logging.Logger.manager.loggerDict.keys():
            if 'langchain' in name.lower():
                logging.getLogger(name).setLevel(logging.ERROR)

    async def ans(self, user_input: str):
        """Génère une réponse à l'input utilisateur"""
        self.running = True
        self.output = ""
        
        try:
            # Obtenir contexte et historique
            context = self.rag.search(user_input)
            history = self.history.load_memory_variables({}).get('history', '')
            
            # Construire le prompt
            prompt = self.prompt_template.format(
                context=context,
                history=history,
                input=user_input
            )
            
            # Générer la réponse
            response = self.llm_with_tools.generate(
                prompts=[prompt],
                stream=True
            )
            
            # Traiter la réponse par morceaux
            for chunk in response:
                if isinstance(chunk, tuple) and chunk[0] == 'generations':
                    generation_list = chunk[1]
                    if generation_list and isinstance(generation_list[0], list):
                        generation_chunk = generation_list[0][0] 
                        if hasattr(generation_chunk, 'text'):
                            chunk_text = generation_chunk.text
                            self.output += chunk_text
                            yield chunk_text
            
            # Sauvegarder le contexte si une réponse a été générée
            if self.output:
                self.history.save_context(
                    {"input": user_input},
                    {"output": self.output}
                )
            
        except Exception as e:
            error_msg = f"Désolé, j'ai rencontré une erreur : {str(e)}"
            self.output = error_msg
            yield error_msg
        
        finally:
            self.running = False

if __name__ == "__main__":
    import asyncio
    
    async def test():
        bot = User_chatBot()
        async for chunk in bot.ans("Bonjour!"):
            print(chunk, end='', flush=True)
        print("\nTest terminé.")
    
    asyncio.run(test())