import React from "react";
import "./FIleUpload.scss";
import axios from "axios";
const FileUpload = ({ files, setFiles, removeFile }) => {
  const uploadHandler = (event) => {
    console.log(event.target.files);
    const file = event.target.files[0];
    if (!file) return;
    file.isUploading = true;

    const formData = new FormData();
    formData.append("newFile", file, file.name);
    axios
      .post("http://localhost:8080/upload", formData)
      .then((res) => {
        file.isUploading = false;
        console.log(file);
        setFiles([...files, file]);
      })
      .catch((err) => {
        removeFile(file.name);
      });
  };
  return (
    <>
      <div className="file-card">
        <div className="file-inputs">
          <input type="file" onChange={uploadHandler} />
          <button>Upload</button>
        </div>

        <p className="main">Supported files</p>
        <p className="info">PDF, JPG, PNG</p>
      </div>
    </>
  );
};

export default FileUpload;
