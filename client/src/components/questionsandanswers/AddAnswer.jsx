/* eslint-disable import/no-cycle */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';
import AddAnswerForm from './AddAnswerForm';

const AddAnswer = ({ answerBody, question }) => {
  // useEffect();
  const [modal, setModal] = useState(false);
  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };

  return (
    <div>
      <button className="modal-btn-answer py-3 w-50 mx-auto my-2" onClick={openModal} type="button">
        Add Answer
      </button>
      {modal ? (
        <Modal closeModal={closeModal}>
          <AddAnswerForm question={question} answerBody={answerBody} closeModal={closeModal} />
        </Modal>
      ) : ''}
    </div>
  );
};

export default AddAnswer;
