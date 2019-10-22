import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';

const Questions = (props) => {
  let answerChoices = []
  let correctAnswer = ''

  const handleClick = (e, { value }) => {
    value === correctAnswer ? props.nextQuestion() : props.endGame(correctAnswer)
  }

    if (props.question) {
      let rand
      correctAnswer = props.question.correct_answer

      console.log(correctAnswer)

      answerChoices = [...props.question.incorrect_answers]
        if (props.question.incorrect_answers.length === 1) {
          rand = Math.floor(Math.random() * 2);
          answerChoices.splice(rand, 0, correctAnswer)
        } else {
           rand = Math.floor(Math.random() * 4);
           answerChoices.splice(rand, 0, correctAnswer)
       }
     }

      return (
        props.question ?
          <div>
            <h3>Category:  { props.question.category }</h3>
              <h2><strong>{ props.question.question }</strong></h2>

                {answerChoices.map(choice => (
                  <Button value={choice} onClick={handleClick}>{ choice }</Button>))}
          </div>
        : null
      )
}

export default Questions;
