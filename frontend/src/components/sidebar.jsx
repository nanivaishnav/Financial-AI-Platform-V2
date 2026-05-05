import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-64 bg-white dark:bg-gray-800 shadow-md">
      <h2 className="text-xl font-bold p-4">Finance AI</h2>

      <nav className="flex flex-col gap-2 p-4">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/upload">Upload</Link>
        <Link to="/reports">Reports</Link>
      </nav>
    </div>
  );
}