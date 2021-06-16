/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Modal = ({ closeModal, children }) => (
  <div id="modal-main">
    {children}
    <div className="close-modal-container">
      <button className="close-modal" type="button" onClick={closeModal}>Close</button>
    </div>
  </div>
);

export default Modal;
