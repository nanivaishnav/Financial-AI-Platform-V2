export default function Navbar() {
  return (
    <div className="bg-white dark:bg-gray-800 shadow p-4 flex justify-between">
      <h1>Dashboard</h1>

      <button
        onClick={() =>
          document.documentElement.classList.toggle("dark")
        }
      >
        Toggle Theme
      </button>
    </div>
  );
}