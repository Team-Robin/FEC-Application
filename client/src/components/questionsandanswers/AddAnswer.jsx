import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';
import AddAnswerForm from './AddAnswerForm';

const AddAnswer = ({ answerBody }) => {
  // useEffect();
  const [modal, setModal] = useState(false);
  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };
  // const modelComponent = ()

  return (
    <div>
      <button className="modal-btn" onClick={openModal} type="button">
        Add Answer
      </button>
      {modal ? (
        <Modal closeModal={closeModal}>
          <AddAnswerForm answerBody={answerBody} />
        </Modal>
      ) : ''}
    </div>
  );
};

export default AddAnswer;
