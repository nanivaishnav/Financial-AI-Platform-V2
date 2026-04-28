import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/upload">Upload</Link>
      <Link to="/compare">Compare</Link>
      <Link to="/chat">Chat</Link>
      <Link to="/analytics">Analytics</Link>
    </div>
  );
}