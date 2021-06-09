/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { useState } from 'react';

import Questions from './Questions';
import QuestionsAndAnswers from './QuestionsAndAnswers';
// import Questions from './questionsandanswers/Questions.jsx';

const QuestionsView = ({ questionInfo }) => (

  <div id="QA-view">
    <div id="QA-header">
      <h1>Questions & Answers</h1>
      <Questions questionInfo={questionInfo} />
      <form className="QA-form">
        <input className="QA-search-box" type="text" name="QA-search-box" placeholder="Have a question?" />
      </form>
    </div>
  </div>
);

export default QuestionsView;
