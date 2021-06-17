/* eslint-disable no-unused-vars */
/* eslint-disable import/no-cycle */
/* eslint-disable react/prop-types */

import React, { useState, useEffect, useContext } from 'react';
import AnswersList from './AnswersList';
import Connect from '../Connect';
import ThemeContext from '../context/Theme';

const Question = ({ question }) => {
  const dateFormat = (inputTime) => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
      'August', 'September', 'October', 'November', 'December',
    ];

    const today = new Date(inputTime);
    const date = `${months[today.getMonth()]} ${today.getDate()}, ${today.getFullYear()}`;
    return date;
  };

  const [helpfulness, setHelpfulness] = useState(false);
  const [addHelpful, setAddHelpful] = useState(question.question_helpfulness);
  const [reported, setReported] = useState(false);
  const { themeMode } = useContext(ThemeContext);

  const addOneHelp = () => {
    if (helpfulness === false) {
      Connect.getHelpfulnessQuestions(question.question_id)
        .then((response) => {
          if (response.status === 200) {
            setAddHelpful(addHelpful + 1);
            setHelpfulness(true);
          }
        });
    }
  };

  const markReported = () => {
    Connect.putReportQuestion(question.question_id)
      .then((response) => {
        setReported(true);
      });
  };

  return (
    <div id="questions-answers" className={`${themeMode === 'Light' ? 'bg-light-blue' : 'bg-secondary text-dark'}`} >
      <div id="question-body" >
        <div className="user">
          {question.asker_name}
          :
        </div>
        <div className="date">
          Date:
          {dateFormat(question.question_date)}
        </div>
      </div>
      <p className="question">
        Q:
        {' '}
        {question.question_body}
      </p>
      <div className="Q-helpful-text">
        Was this question helpful?
        {'  '}
        <div className="Q-helpful-buttons">
          {addHelpful}
          {' | '}
          <button onClick={() => { addOneHelp(); }} className="question-helpfulness-btn" type="button">Yes</button>
          {' | '}
          <button onClick={() => { markReported(); }} className="question-report-btn" type="button">Report</button>
        </div>
      </div>
      <AnswersList
        answers={Object.entries(question.answers)}
        question={question}
      />
    </div>
  );
};

export default Question;
