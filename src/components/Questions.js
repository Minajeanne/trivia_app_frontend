// functional component
import React from 'react';
import { Button, Segment, Header, Icon, Divider } from 'semantic-ui-react';

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
// console.log(correctAnswer.replace(/&/gi, ""))

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
            <Header as="h2" textAlign="center" style={{ fontFamily: "Shadows Into Light, cursive", color: "black" }}>
              <Icon name="question circle" size="small" />
                <Header.Content>Category:  { props.question.category }</Header.Content>
            </Header>

            <Header as="h1" textAlign="center" style={{ fontFamily: "Shadows Into Light, cursive", color: "black" }}>
              <Header.Content>{ props.question.question }</Header.Content>
            </Header>

            <Divider section />

              {answerChoices.map(choice => (
                <Button basic color="green"
                  style={{ fontFamily: "Shadows Into Light, cursive", fontSize: "25px" }}
                  value={choice}
                  onClick={handleClick}>
                  { choice }
                </Button>
              )
            )
          }
        </div>
      : null
    )
}

export default Questions;
