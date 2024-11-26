from langchain_core.globals import set_verbose, set_debug
from langchain_community.vectorstores import Chroma
from langchain_community.embeddings import FastEmbedEmbeddings
from langchain_core.documents import Document
from langchain.text_splitter import RecursiveCharacterTextSplitter
import asyncio
import os
import shutil

class Rag:
    def __init__(self, index_path='chroma_db'):
        set_debug(True)
        set_verbose(True)
        
        self.index_path = index_path
        self.embeddings = FastEmbedEmbeddings()
        self.text_splitter = RecursiveCharacterTextSplitter(
            chunk_size=1024,
            chunk_overlap=100
        )
        
        # Création d'une nouvelle session
        self._initialize_session()

    def _initialize_session(self):
        """Initialise ou charge une session existante"""
        try:
            self.vector_store = Chroma(
                persist_directory=self.index_path,
                embedding_function=self.embeddings
            )
        except Exception as e:
            print(f"Création d'une nouvelle base de connaissances: {str(e)}")
            self.vector_store = None

    def add(self, docs: dict):
        """Ajoute des documents à la base de connaissances"""
        documents = []
        for doc_id, (title, link, content) in docs.items():
            # Découpage du contenu en chunks si nécessaire
            chunks = self.text_splitter.split_text(content)
            
            for i, chunk in enumerate(chunks):
                # Ajoute un suffixe au titre si le document est découpé
                chunk_title = f"{title} (partie {i+1})" if len(chunks) > 1 else title
                
                doc = Document(
                    page_content=chunk,
                    metadata={
                        "page_title": chunk_title,
                        "page_url": link,
                        "doc_id": f"{doc_id}_{i}" if len(chunks) > 1 else doc_id,
                        "chunk_id": i,
                        "total_chunks": len(chunks)
                    }
                )
                documents.append(doc)
        
        # Création ou mise à jour du vector store
        if self.vector_store is None:
            self.vector_store = Chroma.from_documents(
                documents=documents,
                embedding_function=self.embeddings,
                persist_directory=self.index_path
            )
        else:
            self.vector_store.add_documents(documents)
        
        # Persistance des données
        self.vector_store.persist()
    
    async def aadd(self, docs: dict):
        """Version asynchrone de add()"""
        await asyncio.to_thread(self.add, docs)

    def search(self, query: str, k: int = 3) -> str:
        """Recherche les documents pertinents"""
        if not self.vector_store:
            return "Aucun document n'a été chargé dans la base de connaissances."
        
        # Recherche des documents pertinents
        results = self.vector_store.similarity_search_with_score(
            query,
            k=k
        )
        
        # Construction du contexte
        context = []
        seen_docs = set()  # Pour éviter les doublons
        
        for doc, score in sorted(results, key=lambda x: x[1]):
            # Extraction des métadonnées
            title = doc.metadata.get('page_title', 'Sans titre')
            url = doc.metadata.get('page_url', 'URL non disponible')
            doc_id = doc.metadata.get('doc_id', '').split('_')[0]  # ID de base sans numéro de chunk
            
            # Évite les doublons du même document
            if doc_id not in seen_docs:
                seen_docs.add(doc_id)
                
                # Calcul du score de pertinence en pourcentage (inverse car plus le score est bas, plus c'est pertinent)
                relevance = max(0, min(100, (1 - score) * 100))
                
                # Formatage du contexte
                context_entry = (
                    f"[Source: {title}] (Pertinence: {relevance:.1f}%)\n"
                    f"URL: {url}\n"
                    f"{doc.page_content}\n"
                )
                context.append(context_entry)
        
        return "\n\n".join(context) if context else "Aucune information pertinente trouvée."

    def clear(self):
        """Nettoie la base de connaissances (à appeler avec /quit)"""
        if self.vector_store:
            try:
                self.vector_store.delete_collection()
                if os.path.exists(self.index_path):
                    shutil.rmtree(self.index_path)
                self.vector_store = None
            except Exception as e:
                print(f"Erreur lors du nettoyage: {str(e)}")

    def __len__(self):
        """Retourne le nombre de documents dans la base"""
        return self.vector_store._collection.count() if self.vector_store else 0


if __name__ == "__main__":
    rag = Rag()

    # Exemple de données
    docs = {
        "1": ["La DeLorean et ses caractéristiques", "http://example.com/1", """La DeLorean présente aux personnages du film deux difficultés essentielles, qui seront un enjeu de taille tour à tour dans l'épisode I puis dans l'épisode III. En effet, le voyage dans le temps s'effectue seulement si deux conditions sine qua non sont remplies : le « convecteur temporel » doit être rechargé en énergie ; la voiture doit atteindre la vitesse de 88 miles par heure (141,619 28 km/h). Pour être précis, c'est le convecteur temporel (« Flux Capacitor » en VO) qui a besoin d'être déplacé dans l'espace à cette vitesse."""],
        "2": ["Tour Eiffel", "http://example.com/2", "La tour eiffel mesure 12m de haut et 156 km de large"]
    }

    async def main():
        # Test d'ajout de documents
        await rag.aadd(docs)
        print(f"Nombre de documents dans la base: {len(rag)}")
        
        # Test de recherche
        queries = [
            "qu'elle vitesse la DeLorean doit atteindre ?",
            "parle moi du convecteur temporel",
            "que peux-tu me dire sur la tour eiffel ?"
        ]
        
        for query in queries:
            print(f"\nQuestion : {query}")
            response = rag.search(query)
            print("\nRéponse :")
            print(response)

    asyncio.run(main())