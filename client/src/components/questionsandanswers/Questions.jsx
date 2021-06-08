/* eslint-disable no-console */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Answer from './Answer';
import Connect from '../Connect';

const Questions = React.memo(({ questionInfo }) => {
  const questionID = questionInfo.questions.results.map((question) => question.answers);
  const [answerObj, setAnswerObj] = useState(questionID);
  const [answers, setAnswers] = useState([]);

  const getAllAnswers = () => {
    const answersArr = Object.values(answerObj);
    console.log('INSIDE GETALLANSWERS', answerObj);
    setAnswers(answers);
  };
  useEffect(async () => {
    getAllAnswers();
    const { results } = questionInfo.questions;

    const answersConnection = await results.map((qid) => Connect.getAnswers(qid.question_id));
  }, [...answerObj]);

  return (
    <div>
      {console.log('LOG IN QUESTIONS', questionInfo.questions)}
      {questionInfo.questions.results.map((questions, index) => (
        <div className="QA-question-block" key={index}>
          <p className="question">
            User:
            {questions.asker_name}
            {' '}
            Date:
            {questions.question_date}
          </p>
          <p className="question">
            Q:
            {questions.question_body}
          </p>
        </div>
      ))}
      <div>
        {answers.map((answer) => <p>{console.log(answer)}</p>)}
      </div>
    </div>

  );
});

export default Questions;
