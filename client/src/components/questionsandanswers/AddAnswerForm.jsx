/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';
import Connect from '../Connect';

const AddAnswerForm = ({ answerBody, question }) => {
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
    Connect.postAddAnswer({
      body, name, email, photos: [],
    }, question.question_id)
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
          type="text"
          placeholder="Username here"
          value={name}
          onChange={handleName}
        />
      </div>
      <label> Email: </label>
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
          placeholder="Question Here"
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

export default AddAnswerForm;
