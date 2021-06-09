
import React, { useState } from 'react';
import AnswersList from './AnswersList';

const Question = ({question}) => {

  const [questionId, setQuestionId] = useState(question.question_id);

  return (
    <>
      <p className="question">
        User:
        {question.asker_name}
        {' '}
        Date:
        {question.question_date}
      </p>
      <p className="question">
        Q:
        {question.question_body}
      </p>
      <AnswersList answers={question.answers} />
    </>
  )
};

export default Question;