import { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import api from "../api/axios";

export default function Upload() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!file) return alert("Please select a file");

    const formData = new FormData();
    formData.append("file", file);

    try {
      setLoading(true);

      const res = await api.post("/api/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setResult(res.data);
    } catch (err) {
      console.error(err);
      alert("Upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="max-w-xl">
        <h1 className="text-xl font-bold mb-4">
          Upload Financial Report
        </h1>

        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          className="mb-3"
        />

        <button
          onClick={handleUpload}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          {loading ? "Processing..." : "Upload"}
        </button>

        {result && (
          <div className="mt-6 bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
            <h2 className="text-lg font-bold mb-2">AI Summary</h2>
            <p className="whitespace-pre-line">
              {result.analysis.summary}
            </p>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}