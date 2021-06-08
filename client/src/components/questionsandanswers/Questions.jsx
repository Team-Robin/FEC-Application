/* eslint-disable no-console */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Answer from './Answer';
import Connect from '../Connect';

const Questions = React.memo(({ questionInfo }) => {
  console.log('QUESTION INFO', questionInfo)
  const answersObj = questionInfo.questions.results.map((question) => question.answers);
  console.log(answersObj)
  const newLayer = Object.values(answersObj)
  console.log('newLayer', newLayer);
  // const newLayer2 = newLayer.map(item => Object.entries(item));
  // console.log('newLayer2', newLayer2);
  // const newLayer3 = newLayer2.forEach(answer => console.log(answer))
  // console.log('newLayer3', newLayer3)

  const [answerObj, setAnswerObj] = useState(answersObj);
  const [answers, setAnswers] = useState([]);
  const [answersInfo, setAnswersInfo] = useState({});

  const getAllAnswers = () => {
    const answersArr = Object.values(answerObj);
    setAnswers(answersArr);
  };

  // const promisedConnections = async (results) => (
  // //   Promise.all(results.map((qid) => Connect.getAllAnswers(qid.question_id)))
  // // );

  // // console.log(answerObj[0][992135].body)
  // useEffect(async () => {
  //   getAllAnswers();
  //   const { results } = questionInfo.questions;

  //   const answersConnection = await results.map((qid) => Connect.getAnswers(qid.question_id));
  //   console.log('useEffect start');
  //   // const answerConnection = promisedConnections()
  //   //   .then((test) => {
  //   //     console.log('test success!', test);
  //   //   })
  //   //   .catch((error) => {
  //   //     console.log(error);
  //     // });
  //     setAnswersInfo({answers: answers.data})
  // }, [...answerObj]);
  // const answerArr = answers.map((answer) => Object.values(answer));
  // const eachAnswer = answerArr.map();
  console.log(answersInfo)

  return (
    <div>
      {console.log('LOG IN QUESTIONS', answers)}
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
        <Answer answersObj={answersObj}/>
        <p>{answerObj[0][992135].body}</p>
      </div>
    </div>

  );
});

export default Questions;
