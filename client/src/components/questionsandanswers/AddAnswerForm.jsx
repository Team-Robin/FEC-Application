/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-undef */
/* eslint-disable import/named */
/* eslint-disable no-shadow */
/* eslint-disable import/no-cycle */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';
import Connect from '../Connect';
import { productInfo } from '../App';
import AddAnswer from './AddAnswer';

const AddAnswerForm = ({
  answerBody, question, productInfo, closeModal,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [body, setBody] = useState('');
  const [charCountName, setCharCountName] = useState(60);
  const [charCountEmail, setCharCountEmail] = useState(60);
  const [charCountBody, setCharCountBody] = useState(1000);

  const handleName = (e) => {
    setName(e.target.value);
    setCharCountName(60 - e.target.value.length);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setCharCountEmail(60 - e.target.value.length);
  };

  const handleBody = (e) => {
    setBody(e.target.value);
    setCharCountBody(1000 - e.target.value.length);
  };

  const handleQuestionSubmit = () => {
    Connect.postAddAnswer({
      body, name, email, photos: [],
    }, question.question_id)
      .then((response) => {
        console.log(response);
      });
    closeModal();
  };

  return (
    <div id="add-answer-main">
      <h3>Submit Your Answer</h3>
      <h1>{question.question_body}</h1>
      <div className="A-name-email">
        <div className="add-answer-container-name">
          <div>
            <label>Name: </label>
            <input
              className="add-answer-name"
              type="text"
              placeholder="Username here"
              value={name}
              maxLength="60"
              onChange={handleName}
            />
          </div>
          <div>
            <div className="answer-charCount">
              Characters left
              {' '}
              <span className="A-name-count">{charCountName}</span>
            </div>
          </div>
        </div>
        <div className="add-answer-container-email">
          <label> Email: </label>
          <input
            className="add-answer-email"
            type="text"
            placeholder="Email Here"
            value={email}
            maxLength="60"
            onChange={handleEmail}
          />
          <div>
            <div className="answer-charCount">
              Characters left
              {' '}
              <span className="A-email-count">{charCountEmail}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="add-answer-container-body">
        <h6>Answer: </h6>
        <textarea
          className="add-answer-body"
          type="text"
          placeholder="Why did you like the product or not?"
          value={body}
          maxLength="1000"
          onChange={handleBody}
        />
        <div className="answer-charCount">
          Characters left
          {' '}
          <span className="A-body-count">{charCountBody}</span>
        </div>
      </div>
      <span>For your privacy, do not use your full name or email address</span>
      <div className="add-answer-btn">
        <button onClick={handleQuestionSubmit} type="button">Submit</button>
      </div>
    </div>
  );
};

export default AddAnswerForm;
