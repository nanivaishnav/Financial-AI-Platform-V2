import { useState } from "react";
import Layout from "../components/Layout";

function Chat() {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = async () => {
    if (!question) return;

    const userMessage = {
      type: "user",
      text: question,
    };

    setMessages((prev) => [...prev, userMessage]);

    try {
      const response = await fetch("http://127.0.0.1:8000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question: question,
        }),
      });

      const data = await response.json();

      const botMessage = {
        type: "bot",
        text: data.answer,
      };

      setMessages((prev) => [...prev, botMessage]);
      setQuestion("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="chat-page">
        <h1>AI Financial Assistant</h1>

        <div className="chat-box">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={
                msg.type === "user"
                  ? "user-message"
                  : "bot-message"
              }
            >
              {msg.text}
            </div>
          ))}
        </div>

        <div className="chat-input-area">
          <input
            type="text"
            placeholder="Ask financial questions..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />

          <button onClick={sendMessage}>
            Send
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default Chat;