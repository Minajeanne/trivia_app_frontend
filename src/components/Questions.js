import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Questions = (props) => {
  let answerChoices = []

  if (props.question) {
   answerChoices = [...props.question.incorrect_answers, props.question.correct_answer]
  }
  console.log(answerChoices)
      return (
        props.question ?
          <div>
            <h3>Category: { props.question.category }</h3>
            <h2><strong>{ props.question.question }</strong></h2>
              {answerChoices.map(choice => (<h2><strong><p>{ choice }</p></strong></h2>))}
          </div>
            : null
      )
}

export default Questions;

// {newQuestions.map((q, i) => {
//   return (
//     <div key={i}>
//         <p><strong>{ q.category }</strong></p><br></br>
//         <p>{ q.question }</p><br></br>
//           <Message hidden={ q.correct_answer === "Correct! On to the next!" ? false : true } color={"red"}>
//             { q.correct_answer }
//           </Message><br></br>
//         <p>{}</p>
//     </div>
//   )}
// )
// }
// 
