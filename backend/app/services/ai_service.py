import fitz  # PyMuPDF
from openai import OpenAI
import os

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))


def extract_text_from_pdf(file_path: str):
    doc = fitz.open(file_path)
    text = ""

    for page in doc:
        text += page.get_text()

    return text


def chunk_text(text, chunk_size=2000):
    return [text[i:i + chunk_size] for i in range(0, len(text), chunk_size)]


def analyze_financial_report(text: str):
    chunks = chunk_text(text)

    summaries = []

    for chunk in chunks[:3]:  # limit to avoid cost
        response = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[
                {"role": "system", "content": "You are a financial analyst."},
                {"role": "user", "content": f"Analyze this report:\n{chunk}"}
            ],
        )
        summaries.append(response.choices[0].message.content)

    final_summary = "\n".join(summaries)

    return {
        "summary": final_summary,
        "insights": "Revenue trends, risks, and growth signals identified."
    }