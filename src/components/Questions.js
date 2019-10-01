import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Grid, Header, Message, Button} from 'semantic-ui-react';

const Questions = (props) => {
  let answerChoices = []
  let correctAnswer = ''
  // let userAnswer = ''

  const handleClick = (e, { value }) => {
    value === correctAnswer ? props.nextQuestion() : console.log('wrong!')
  }

  if (props.question) {
   answerChoices = [...props.question.incorrect_answers, props.question.correct_answer]

   correctAnswer = props.question.correct_answer

  }

// debugger
      return (
        props.question ?
          <div>
            <h3>Category: { props.question.category }</h3>
              <h2><strong>{ props.question.question }</strong></h2>
                {answerChoices.map(choice => (
                  <Button value={choice} onClick={handleClick}>{ choice }</Button>
                ))}
              </div>
            : null
      )
}

export default Questions;











// if props.question.correct_answer === userAnswer

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
