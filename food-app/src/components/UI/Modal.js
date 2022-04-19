import "./Modal.css";
import ReactDOM from "react-dom";
const Backdrop = ({ showCartHandler }) => {
  return <div className="backdrop" onClick={showCartHandler}></div>;
};
// content
const ModalOverlay = (props) => {
  return (
    <div className="modal">
      <div className="content">{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays"); //portal calls

//main
//portal (what to portal,where to portal)
const Modal = (props) => {
  console.log(props);
  return (
    <div>
      {ReactDOM.createPortal(
        <Backdrop showCartHandler={props.showCartHandler} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </div>
  );
};

export default Modal;
