import React from "react";

const FileItem = ({ file, deleteFile }) => {
  return (
    <>
      <li className="file-item" keu={file.name}>
        <p>{file.name}</p>
        <div className="actions">
          <div className="loading"></div>
          {file.isUploading && <div>...loading</div>}
        </div>
      </li>
    </>
  );
};

export default FileItem;
