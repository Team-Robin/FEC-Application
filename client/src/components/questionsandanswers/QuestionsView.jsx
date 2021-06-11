/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from 'react';
import Search from './Search';
import Questions from './Questions';
import QuestionsAndAnswers from './QuestionsAndAnswers';
// import Questions from './questionsandanswers/Questions.jsx';
const QuestionsView = ({ questionInfo }) => {
  // const info = questionInfo.questions;
  const [info, setInfo] = useState(questionInfo.questions);
  const [questionView, setQuestionView] = useState(false);
  const [search, setSearch] = useState('');

  const questionList = () => {
    if (!info) {
      return [];
    }
    if (search.length >= 3) {
      const searchedList = info.results.filter((question) => question.question_body.toLowerCase().includes(search.toLowerCase()));
      return searchedList;
    }

    if (questionView) {
      return info.results.slice(0, 4);
    }

    return info.results;
  };

  const questionInfoObj = questionList();
  const handleMoreQuestions = () => {
    setQuestionView(!questionView);
  };
  const searchQuestions = (input) => {
    setSearch(input);
  };
  console.log("QUESTION INFO OBJ", questionInfoObj);

  return (
    <div id="QA-view">
      <div id="inner-QAview">
        <h1 id="QA-header">Questions & Answers</h1>
        <Questions questionInfo={questionInfo} />
        <form className="QA-form">
          <h5>Ask a Question</h5>
          <input className="QA-search-box" type="text" name="QA-search-box" placeholder="Have a question?" />
        </form>
      </div>
    </div>
  );
};

export default QuestionsView;
