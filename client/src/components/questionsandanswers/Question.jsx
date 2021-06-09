/* eslint-disable no-unused-vars */
/* eslint-disable import/no-cycle */
/* eslint-disable react/prop-types */

import React, { useState } from 'react';
import AnswersList from './AnswersList';

const Question = ({ question }) => {
  const dateFormat = (inputTime) => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
      'August', 'September', 'October', 'November', 'December',
    ];

    const today = new Date(inputTime);
    const date = `${months[today.getMonth()]} ${today.getDate()}, ${today.getFullYear()}`;
    return date;
  };

  const [questionId, setQuestionId] = useState(question.question_id);

  return (
    <div id="questions-answers">
      <p className="question">
        User:
        {question.asker_name}
        {' '}
        Date:
        {dateFormat(question.question_date)}
      </p>
      <p className="question">
        Q:
        {question.question_body}
      </p>
      <AnswersList answers={question.answers} />
    </div>
  );
};

export default Question;
