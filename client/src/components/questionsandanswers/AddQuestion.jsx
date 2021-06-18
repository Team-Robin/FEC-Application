import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';
import AddQuestionForm from './AddQuestionForm';

const AddQuestion = ({ questionInfo }) => {
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
    <>
      <button className="modal-btn py-2 w-50 mx-auto my-2" onClick={openModal} type="button">
        Ask Question
      </button>
      {modal ? (
        <Modal closeModal={closeModal}>
          <AddQuestionForm closeModal={closeModal} questionInfo={questionInfo} />
        </Modal>
      ) : ''}
    </>
  );
};

AddQuestion.propTypes = {
  questionInfo: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default AddQuestion;
