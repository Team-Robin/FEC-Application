/* eslint-disable import/no-cycle */
/* eslint-disable no-console */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Connect from '../Connect';
import Question from './Question';

const Questions = ({ questionInfo }) => {
  console.log('QUESTION INFO', questionInfo);

  return (
    <div>
      {questionInfo.questions.results.map((question, index) => (
        <Question question={question} key={`Question-${index}`}/>
      ))}
    </div>

  );
};

export default Questions;

/*
  answers = {
    13123: {},
    13773: {},
  }

  // IN A HYPOTHETICAL ANSWER(S) COMPONENT ------------------------------------------------

  const Answers = ({answerObj}) {
    answersArr = Object.values(answers)

    return (
      {
        answersArr.map((answer)=> <Answer answer={anwer} />)
      }
    )
  }

  // IN A HYPOTHETICAL ANSWER COMPONENT ---------------------------------------------------

  const Answer = ({answer}) => (
    <p>{answer.body}</p>
    <p>{answer.answerer_name}</p>
    etc....
  )

*/
