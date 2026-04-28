import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <div className="layout">
        <Sidebar />

        <div className="content">
          <h1>Dashboard</h1>
          <p>Enterprise Financial Analytics Home</p>
        </div>
      </div>
    </>
  );
}