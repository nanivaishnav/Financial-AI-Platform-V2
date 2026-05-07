import os

from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_openai import OpenAIEmbeddings
from langchain.vectorstores import FAISS
from openai import OpenAI

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

embeddings = OpenAIEmbeddings(
    api_key=os.getenv("OPENAI_API_KEY")
)

VECTOR_DB_PATH = "vector_store"


def create_vector_store(text: str):

    splitter = RecursiveCharacterTextSplitter(
        chunk_size=1000,
        chunk_overlap=200
    )

    chunks = splitter.split_text(text)

    vectorstore = FAISS.from_texts(
        chunks,
        embedding=embeddings
    )

    vectorstore.save_local(VECTOR_DB_PATH)


def ask_question(question: str):

    vectorstore = FAISS.load_local(
        VECTOR_DB_PATH,
        embeddings,
        allow_dangerous_deserialization=True
    )

    docs = vectorstore.similarity_search(question, k=3)

    context = "\n".join([doc.page_content for doc in docs])

    prompt = f"""
    You are a senior financial analyst.

    Answer the question using ONLY the provided context.

    Context:
    {context}

    Question:
    {question}
    """

    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {
                "role": "user",
                "content": prompt
            }
        ]
    )

    return response.choices[0].message.content