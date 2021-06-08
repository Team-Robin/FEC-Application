import App from '../App.jsx';
import React from 'react';
import {useState, useEffect} from 'react';
import Answer from './Answer.jsx';
import Connect from '../Connect.js';


const Questions = React.memo(({questionInfo}) => {
  const questionID = questionInfo.questions.results.map(questions => {
    return questions.question_id;
  });
  const [answerObj, setAnswerObj] = useState(questionID);
  const [answers, setAnswers] = useState([]);

  useEffect(async ()=> {

    console.log('NO MANS LAND',questionID);
    getAllAnswers();
    const answers = await questionID.map(qid =>
      Connect.getAnswers(qid));



  }, [...answerObj]);

  const getAllAnswers = () => {
    const answers = Object.values(answerObj).map(answer => answer);
    setAnswers(answers);
  };


  return (
    <div>
      {console.log('LOG IN QUESTIONS', questionInfo.questions)}
      {questionInfo.questions.results.map((questions, index) =>
      <div className="QA-question-block" key={index} >
        <p className="question">User: {questions.asker_name} Date: {questions.question_date}</p>
        <p className="question">Q: {questions.question_body}</p>
      </div>
      )}
    </div>

  )
})



export default Questions;