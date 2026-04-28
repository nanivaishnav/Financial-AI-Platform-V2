import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Upload from "./pages/Upload";
import Compare from "./pages/Compare";
import Chat from "./pages/Chat";
import Analytics from "./pages/Analytics";

function App() {
  const token = localStorage.getItem("token");

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />

      <Route
        path="/dashboard"
        element={token ? <Dashboard /> : <Navigate to="/login" />}
      />

      <Route
        path="/upload"
        element={token ? <Upload /> : <Navigate to="/login" />}
      />

      <Route
        path="/compare"
        element={token ? <Compare /> : <Navigate to="/login" />}
      />

      <Route
        path="/chat"
        element={token ? <Chat /> : <Navigate to="/login" />}
      />

      <Route
        path="/analytics"
        element={token ? <Analytics /> : <Navigate to="/login" />}
      />
    </Routes>
  );
}

export default App;