import App from '../App.jsx';
import React from 'react';
import {useState} from 'react';
// import Answer from './Answer.jsx';


const Questions = React.memo(({questionInfo}) => {
  return (
    <div>
      {console.log('LOG IN QUESTIONS', questionInfo.questions)}

        {questionInfo.questions.map((questions, index) =>
        <div className="QA-question-block" key={index} >
          <p className="question">{questions.asker_name} {questions.question_date}</p>
          <p className="question">Q: {questions.question_body}</p>
        </div>
        )}
      </div>

  )
})



export default Questions;