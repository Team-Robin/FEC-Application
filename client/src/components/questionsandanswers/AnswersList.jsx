
import React from 'react';
import Answer from './Answer.jsx';

const AnswersList = ({ answers }) => {

  return (
    <>
      {answers ?
        Object.keys(answers).map((key) => {
          console.log(answers[key]);
          return (<Answer answerBody={answers[key]} />)
        })
      :
        null
      }
      <input type="text" placeholder="answer here"></input>
    </>
  )
};

export default AnswersList;