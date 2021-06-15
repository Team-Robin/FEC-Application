/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';
import Connect from '../Connect';

const AddQuestionForm = ({ questionInfo }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [body, setBody] = useState('');

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleBody = (e) => {
    setBody(e.target.value);
  };

  const handleQuestionSubmit = () => {
    const productId = questionInfo.product_id;
    Connect.postAddQuestion({
      body, name, email, product_id: productId,
    })
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <div>
      <label>Name: </label>
      <div className="add-question-container-name">
        <input
          className="add-question-name"
          placeholder="Example: jackson11!"
          type="text"
          value={name}
          onChange={handleName}
        />
      </div>
      <span>For your privacy, do not use your full name or email address</span>
      <label>Email: </label>
      <div className="add-question-container-email">
        <input
          className="add-question-email"
          type="text"
          placeholder="Email Here"
          value={email}
          onChange={handleEmail}
        />
      </div>
      <label>Question: </label>
      <div className="add-question-container-body">
        <textarea
          className="add-question-body"
          type="text"
          placeholder="Why did you like the product or not?"
          value={body}
          onChange={handleBody}
        />
      </div>
      <div className="add-question-btn">
        <button onClick={handleQuestionSubmit} type="button">Submit</button>
      </div>
    </div>
  );
};

AddQuestionForm.propTypes = {
  questionInfo: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default AddQuestionForm;
