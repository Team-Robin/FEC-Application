import App from '../App.jsx';
import React from 'react';
import {useState} from 'react';
// import Answer from './Answer.jsx';


const Questions = ({questionInfo}) => {
  return (
    <div>
      {console.log('LOG IN QUESTIONS', questionInfo.questions)}
      <div className="QA-question-block">
        {questionInfo.questions.map(questions =>
          <p className="question" key={questions.question_id}>Q: {questions.question_body}</p>
        )}
      </div>
    </div>
  )
}



export default Questions;