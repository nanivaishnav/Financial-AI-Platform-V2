import os
from openai import OpenAI

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

def extract_financial_kpis(text: str):
    prompt = f"""
    Extract key financial data from this report.

    Return ONLY JSON in this format:

    {{
      "revenue": number,
      "profit": number,
      "expenses": number,
      "growth_rate": number,
      "summary": "short summary"
    }}

    Report:
    {text[:3000]}
    """

    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[{"role": "user", "content": prompt}]
    )

    return response.choices[0].message.content