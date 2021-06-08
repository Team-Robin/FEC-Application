/* eslint-disable no-unused-vars */
import React from 'react';
import Questions from './Questions'

const Answer = React.memo(({ answersObj }) => {
  const answersArr = answersObj.map(answer => Object.entries(answer));
  const answers = answersArr.map(answer => answer)
  console.log('ANSWERSARR', answersArr);

  console.log('ANSWERS', answers);
  // console.log('ANSWERS', answers[0])

  return (
    <div>
      {answers.map(answer => {
        <p>A:{console.log(answer[0])}</p>
      })}

    </div>
  );
});

export default Answer;
