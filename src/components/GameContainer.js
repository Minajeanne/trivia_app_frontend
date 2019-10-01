import React from 'react';
import { connect } from 'react-redux';
import { Grid, Header, Message, Button} from 'semantic-ui-react';
import Questions from './Questions.js';

function randomQuestionNumbers(array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

class GameContainer extends React.Component {
  state = {
    questionIndex: 0,
    userAnswer: ''
  }

  nextQuestion = () => {
    this.setState(prevState => ({ questionIndex: prevState.questionIndex + 1 }))
  }

  render() {
    console.log(this.props)
      const { choice } = this.state.userAnswer
      const {questions} = this.props
      const newQuestions = randomQuestionNumbers(questions)

        return (
        <><Header as="h2" textAlign="center" style={{ fontFamily: 'OCR A Std, monospace', color: "grey", fontSize: '35px'}}>
            Total Correct
              <div style={{ fontFamily: 'OCR A Std, monospace', fontSize: '20px' }}>
                { this.props.total_correct ? this.props.total_correct : this.state.questionIndex }
              </div>
          </Header>
          <Questions question={newQuestions[this.state.questionIndex]} nextQuestion={this.nextQuestion}/>
        </>
      )
    }
}

const mapStateToProps = state => {
  console.log("This is state", state)
  return {
    questions: state.questions.questions,
    userAnswer: state.questions.correct_answer
  }
}

export default connect(mapStateToProps)(GameContainer);
