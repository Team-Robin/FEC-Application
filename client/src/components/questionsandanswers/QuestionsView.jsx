
import React from 'react';
// import Questions from './questionsandanswers/Questions.jsx';

class QuestionsAndAnswers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (

      <div>
        <div className="QA-view">
          <p>Questions & Answers</p>
        <form className="QA-form">
        <input className="QA-search-box" type="text" name="QA-search-box" placeholder="Have a question?" />

        </form>
        </div>
      </div>
    )
  }



}

export default QuestionsAndAnswers;