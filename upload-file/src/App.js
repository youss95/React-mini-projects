import React, { useState } from "react";
import FileList from "./FIleList/FileList";
import FileUpload from "./FileUpload/FileUpload";

const App = () => {
  const [files, setFiles] = useState([]);

  const removeFile = (filename) => {
    setFiles(files.filter((file) => file.filename !== filename));
  };
  return (
    <div className="App">
      <div className="title">UPload file</div>
      <FileUpload files={files} setFiles={setFiles} removeFile={removeFile} />
      <FileList files={files} removeFile={removeFile} />
    </div>
  );
};

export default App;
