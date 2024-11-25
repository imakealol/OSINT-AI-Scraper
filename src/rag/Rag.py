from langchain_ollama import OllamaEmbeddings
# from langchain_ollama.llms import OllamaLLM
from langchain_chroma import Chroma
from langchain_core.documents import Document
from langchain_core.vectorstores import InMemoryVectorStore
import asyncio

class Rag:
    def __init__(self, index_path='faiss_index'):
        self.model = OllamaEmbeddings(model="llama3")
        self.vector_store = Chroma(
            collection_name="my_document_collection",
            embedding_function=self.model,
            persist_directory=index_path,
            create_collection_if_not_exists=True
        )
        # self.vector_store = InMemoryVectorStore(embedding=self.model)

    def add(self, docs: dict):
        documents = []
        for doc_id, (title, link, content) in docs.items():
            doc = Document(
                page_content=content,
                metadata={"page_title": title, "page_url": link},
                id=doc_id
            )
            documents.append(doc)
        
        self.vector_store.add_documents(documents=documents)
    
    # async def add(self, docs: dict):
    #     documents = []
    #     for doc_id, (title, link, content) in docs.items():
    #         doc = Document(
    #             page_content=content,
    #             metadata={"page_title": title, "page_url": link},
    #             id=doc_id
    #         )
    #         documents.append(doc)
        
    #     # await asyncio.to_thread(self.chroma.add_documents, documents=documents)
    #     await asyncio.to_thread(self.vector_store.add_documents,documents=documents)

    def search(self, query, k=1):
        results = self.vector_store.similarity_search(query, top_k=k)
        return results

if __name__ == "__main__":
    rag = Rag()
    docs = {
        "1": ["Titre 1", "http://example.com/1", """La DeLorean présente aux personnages du film deux difficultés essentielles, qui seront un enjeu de taille tour à tour dans l'épisode I puis dans l'épisode III. En effet, le voyage dans le temps s'effectue seulement si deux conditions sine qua non sont remplies :

le « convecteur temporel » doit être rechargé en énergie ;
la voiture doit atteindre la vitesse de 88 miles par heure (141,619 28 km/h).
Pour être précis, c'est le convecteur temporel (« Flux Capacitor » en VO) qui a besoin d'être déplacé dans l'espace à cette vitesse. Peu importe si la voiture roule ou non (elle peut voyager dans le temps tout en volant dans le second film) ou si son moteur fonctionne (le voyage dans le temps a lieu dans le troisième film alors que la machine, en panne d'essence, est alors propulsée par un train).

Ces deux éléments sont indépendants l'un de l'autre. Le moteur de la DeLorean est alimenté par de l'essence ordinaire, mais le « convecteur temporel » nécessite une puissance électrique de 2,21 gigawatts (2,21 gigowatts, avec un « o » à la place du premier « a » dans la version originale à la suite d'une erreur de prononciation de Christopher Lloyd conservée au montage et conservée dans la version française) pour fonctionner. Il est alimenté tout d'abord par du plutonium puis, après les modifications apportées par Doc dans le futur, grâce à de simples détritus (le réacteur nucléaire ayant été remplacé par un appareil appelé le générateur de fusion, alias « Mr. Fusion Home Energy Reactor » en VO).

Cependant, une petite entorse à cette règle existe à la fin du deuxième épisode, quand Doc est envoyé en 1885 : la foudre tombe sur la voiture immobile, ce qui ne devrait pas faire fonctionner le convecteur. On peut expliquer cela par le fait que le choc produit par la foudre ait fait tourner la voiture sur elle-même, lui faisant atteindre une vitesse - de rotation - de 88 mph, dans le film les flammes en forme de 99 montrent bien que la voiture a tourné sur elle-même.

Par ailleurs, la DeLorean ne peut enclencher son processus de voyage à travers le temps que si ses deux portières sont fermées, comme on le voit lors de son ultime voyage de 1885 à 1985, à la fin du dernier volet de la trilogie"""],
        "2": ["Titre 2", "http://example.com/2", "La tour eiffel mesure 12m de haut et 156 km de large"]
    }

    rag.add(docs)
    query = "convecteur temporel"
    results = rag.search(query)
    for result in results:
        print(f"Document ID: {result['document'].metadata['id']}, Score: {result['score']}")
