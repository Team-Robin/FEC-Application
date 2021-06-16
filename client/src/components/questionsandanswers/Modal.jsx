/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Modal = ({ closeModal, children }) => (
  <div id="modal-main">
    {children}
    <button className="close-modal" type="button" onClick={closeModal}>close</button>
  </div>
);

export default Modal;
