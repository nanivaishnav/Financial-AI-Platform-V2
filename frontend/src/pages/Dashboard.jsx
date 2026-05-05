import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const nav = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    nav("/login");
  };

  return (
    <div>
      <h1>Financial AI Dashboard</h1>

      <button onClick={() => nav("/upload")}>Upload</button>
      <button onClick={() => nav("/reports")}>Reports</button>
      <button onClick={logout}>Logout</button>
    </div>
  );
}