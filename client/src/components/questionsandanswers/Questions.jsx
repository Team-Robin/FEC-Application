/* eslint-disable import/no-cycle */
/* eslint-disable no-console */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Connect from '../Connect';
import Question from './Question';

const Questions = ({ questionInfo }) => (
  <div id="QA-questions">
    {questionInfo.questions.results.map((question, index) => (
      <Question question={question} key={`Question-${index}`} />
    ))}
  </div>

);

export default Questions;
