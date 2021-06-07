
import React from 'react';
import {useState} from 'react';
import Questions from './Questions.jsx';
import QuestionsAndAnswers from './QuestionsAndAnswers.jsx';
// import Questions from './questionsandanswers/Questions.jsx';

const QuestionsView = ({questionInfo}) => {




  return (

    <div>
        <div className="QA-view">
          <p>Questions & Answers</p>
          <Questions questionInfo={questionInfo}/>
        <form className="QA-form">
        <input className="QA-search-box" type="text" name="QA-search-box" placeholder="Have a question?" />
        </form>
        </div>
      </div>
    )

}


export default QuestionsView;