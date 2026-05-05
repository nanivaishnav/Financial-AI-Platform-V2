import { useEffect, useState } from "react";
import API from "../api";

export default function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // 🔐 Protect route
    if (!localStorage.getItem("token")) {
      window.location.href = "/";
    }

    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      const res = await API.get("/dashboard");
      setData(res.data);
    } catch (err) {
      alert("Failed to fetch dashboard");
    }
  };

  return (
    <div className="layout">
      
      {/* Sidebar */}
      <div className="sidebar">
        <a href="/dashboard">Dashboard</a>
        <a href="/upload">Upload</a>
        <a href="/" onClick={() => localStorage.clear()}>Logout</a>
      </div>

      {/* Content */}
      <div className="content">
        <h2>Dashboard</h2>

        {data ? (
          <pre>{JSON.stringify(data, null, 2)}</pre>
        ) : (
          <p>Loading...</p>
        )}
      </div>

    </div>
  );
}