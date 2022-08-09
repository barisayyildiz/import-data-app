import React from "react";
import Modal from "react-modal";

import "../styles/Modal.scss";

export default ({ children, isOpen, onRequestClose }) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    contentLabel="Modal"
    className={{
      base: "modal-base",
      afterOpen: "modal-base_after-open",
      beforeClose: "modal-base_before-close",
    }}
    overlayClassName={{
      base: "overlay-base",
      afterOpen: "overlay-base_after-open",
      beforeClose: "overlay-base_before-close",
    }}
    shouldCloseOnOverlayClick={true}
    closeTimeoutMS={2000}
  >
    {children}
  </Modal>
);
