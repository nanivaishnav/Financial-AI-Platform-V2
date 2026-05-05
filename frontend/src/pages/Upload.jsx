import { useState } from "react";
import API from "../api";

export default function Upload() {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("file", file);

      await API.post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });

      alert("File uploaded successfully");

    } catch (err) {
      alert(err.response?.data?.detail || "Upload failed");
    }
  };

  return (
    <div className="content">
      <h2>Upload Financial Report</h2>

      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}