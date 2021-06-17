/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-cycle */
import React, { useState } from 'react';
import Answer from './Answer';
import AddAnswer from './AddAnswer';

const AnswersList = ({ answers, question }) => {
  const [answerView, setAnswerView] = useState(true);

  const handleMoreAnswers = () => {
    setAnswerView(!answerView);
  };

  const answerList = answerView && answers ? answers.slice(0, 2) : answers;
  const moreAnswers = answerView ? 'more answers ˅' : 'Collapse answers ^';

  return (
    <div id="main-answers-block">
      <div id="answers-block">
        {answers
          ? Object.keys(answerList).map((keys) => (<Answer question={question} key={answerList[keys][1].id} answerBody={answerList[keys][1]} />))
          : null}
      </div>
      { answers.length > 2 ?(
      <button className="more-answers" onClick={handleMoreAnswers} type="button">
        {moreAnswers}
      </button>
      ) : null
      }
      <div>
        <AddAnswer question={question} answerBody={answers} />
      </div>
    </div>

  );
};

export default AnswersList;
