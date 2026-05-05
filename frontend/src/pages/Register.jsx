import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";

export default function Register() {
  const nav = useNavigate();

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const submit = async (e) => {
    e.preventDefault();

    await api.post("/register", data);
    nav("/login");
  };

  return (
    <div>
      <h1>Register</h1>

      <form onSubmit={submit}>
        <input
          placeholder="Name"
          onChange={(e) =>
            setData({ ...data, name: e.target.value })
          }
        />

        <input
          placeholder="Email"
          onChange={(e) =>
            setData({ ...data, email: e.target.value })
          }
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) =>
            setData({ ...data, password: e.target.value })
          }
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}