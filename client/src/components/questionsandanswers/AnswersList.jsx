/* eslint-disable react/prop-types */
/* eslint-disable import/no-cycle */
import React from 'react';
import Answer from './Answer';

const AnswersList = ({ answers }) => (
  <>
    {answers
      ? Object.keys(answers).map((key) => (<Answer answerBody={answers[key]} />))
      : null}
  </>
);

export default AnswersList;
