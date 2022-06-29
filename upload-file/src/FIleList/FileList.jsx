import React from "react";
import axios from "axios";
import FileItem from "../FileItem/FileItem";
const FileList = ({ files, removeFile }) => {
  const deleteFileHandler = (_name) => {
    axios
      .delete(`http://localhost:8080/upload?name=${_name}`)
      .then((res) => removeFile(_name))
      .catch((err) => console.log(err));
  };
  return (
    <ul className="file-list">
      {files?.map((f) => (
        <FileItem key={f.name} file={f} deleteFile={deleteFileHandler} />
      ))}
    </ul>
  );
};

export default FileList;
