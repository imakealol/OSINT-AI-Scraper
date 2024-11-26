from langchain_ollama.llms import OllamaLLM
from langchain.memory import ConversationSummaryMemory
from rag.Rag import Rag
# from langchain.llms.base import BaseLanguageModel

class User_chatBot:
    def __init__(self, model:str = "mistral:latest", ollama_options:dict = None):
        
        self.ollama_model = OllamaLLM(
            model=model,
            options=ollama_options if ollama_options else {'temperature': 1} # vérifier le paramétrage de la température 0 pour déterministe langchain et 1 pour ollama_python
            )
        self.output = ""
        ConversationSummaryMemory.model_rebuild()
        self.history = ConversationSummaryMemory(llm=self.ollama_model)
        self.running = False
        self.rag = Rag()
        
    def ans(self, input: str):
        prompt: str
        context: str
        self.running = True
        self.output = ""
    
        try:
            mem = self.history.load_memory_variables({}).get('history', "")
        except Exception:
            mem = ""

        try:
            context = self.rag.search(input)
        except Exception:
            context = ""

        prompt = (
            "Vous êtes un assistant intelligent et concis. "
            "Répondez de manière naturelle et directe à la question de l'utilisateur.\n\n"
            "Contexte :\n"
            f"{context}\n\n"
            "Historique de la conversation (à ne pas mentionner directement) :\n"
            f"{mem}\n\n"
            "Question :\n"
            f"{input}\n\n"
            "Réponse :"
        )
        
        response = self.ollama_model.generate(
            prompts=[prompt],
            stream=True
        )
        
        for chunk in response:
            if isinstance(chunk, tuple) and chunk[0] == 'generations':
                generation_list = chunk[1]
                if generation_list and isinstance(generation_list[0], list):
                    generation_chunk = generation_list[0][0] 
                    if hasattr(generation_chunk, 'text'):
                        self.output += generation_chunk.text
                        yield generation_chunk.text
            
        


        
        self.history.save_context({"input": input}, {"output": self.output})
        self.running = False
        return 0
    
if __name__ == "__main__":
    model = User_chatBot(model="mistral:latest")
    model.ans("Hello")