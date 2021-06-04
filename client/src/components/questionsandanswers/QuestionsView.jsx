
import React from 'react';
// import Question from './questionsandanswers/Questions.jsx';

class QuestionsAndAnswers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (

      <div>
        <div class="QA-view">
          <p>Questions & Answers</p>
        <form class="QA-form">
        <input class="QA-search-box" type="text" name="QA-search-box" placeholder="Have a question?" />

        </form>
        </div>.
      </div>
    )
  }



}

export default QuestionsAndAnswers;