from sentence_transformers import SentenceTransformer
import os
import io
from tqdm import tqdm
from langchain_chroma import Chroma
from langchain_core.documents import Document

class Rag:
    def __init__(self, model_name='all-MiniLM-L6-v2', index_path='faiss_index'):
        self.model = SentenceTransformer(model_name)
        self.chroma = Chroma(
            collection_name="my_document_collection",
            embedding_function=self.model,
            persist_directory=index_path,
            create_collection_if_not_exists=True
        )

    def add(self, docs:dict{str, [str, str, str]}):
        """ Add a batch of documents to Chroma index. """
        id = 0
        documents = []
        ids = []
        for dc in docs:
            with io.open(os.path(dc), 'r', encoding='utf8') as file:
                content = file.read()
                doc_n = Document(page_content=content, metadata={"source": dc})
                documents.append(doc_n)
                id=+1
                ids.append(id)
            
        self.chroma.add_documents(documents=documents, ids=ids)

    def search(self, query, k=5):
        """ Search the Chroma index for the most similar documents. """
        results = self.chroma.search(query, top_k=k)
        return results

if __name__ == "__main__":
    docs_directory = "src/docs"
    rag = Rag()
    rag.add(docs)
    query = "Quelle est la vitesse pour remonter le temps ?"
    results = rag.search(query)
    for result in results:
        # print(f"Document ID: {result['document'].id}, Score: {result['score']}")
        print(result)
