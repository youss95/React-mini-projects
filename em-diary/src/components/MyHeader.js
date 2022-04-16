const MyHeader = ({ headText, leftChild, rightChild }) => {
  return (
    <header>
      <div className="head_btn_left">{headText}</div>
      <div className="head_text">{leftChild}</div>
      <div className="head_btn_right">{rightChild}</div>
    </header>
  );
};

export default MyHeader;
