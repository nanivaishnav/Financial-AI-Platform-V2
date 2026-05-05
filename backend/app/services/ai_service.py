import os
from openai import OpenAI

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

def generate_financial_summary(text: str):
    prompt = f"""
    You are a financial analyst.

    Analyze the following financial report and provide:

    1. Summary
    2. Key insights
    3. Risks
    4. Growth opportunities

    Report:
    {text[:3000]}
    """

    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[{"role": "user", "content": prompt}]
    )

    return response.choices[0].message.content