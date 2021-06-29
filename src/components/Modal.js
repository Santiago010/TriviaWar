import React from "react";
import ReactDOM from "react-dom";
import "./style/Modal.css";

const Modal = ({ children, onClose }) => {
  return ReactDOM.createPortal(
    <div className="Modal">
      <div className="Modal__container">
        {children}
        <button className="Modal__close" onClick={onClose}>
          close
        </button>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
