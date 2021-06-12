import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';
import AddQuestionForm from './AddQuestionForm';

const AddQuestion = ({ questionInfo }) => {
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
        Add Question
      </button>
      {modal ? (
        <Modal closeModal={closeModal}>
          <AddQuestionForm questionInfo={questionInfo} />
        </Modal>
      ) : ''}
    </div>
  );
};

AddQuestion.propTypes = {
  questionInfo: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default AddQuestion;
