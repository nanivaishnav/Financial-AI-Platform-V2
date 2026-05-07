import { useState } from "react";
import API from "../api";

export default function Chat() {

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleAsk = async () => {

    try {

      const res = await API.post("/chat", {
        question
      });

      setAnswer(res.data.answer);

    } catch {
      alert("Chat failed");
    }
  };

  return (
    <div className="content">

      <h2>Chat With Financial Report</h2>

      <textarea
        rows="4"
        placeholder="Ask financial questions..."
        onChange={(e) => setQuestion(e.target.value)}
      />

      <br /><br />

      <button onClick={handleAsk}>
        Ask AI
      </button>

      {answer && (
        <div style={{ marginTop: "30px" }}>
          <h3>AI Answer</h3>

          <pre>{answer}</pre>
        </div>
      )}

    </div>
  );
}