import React from 'react';
import { connect } from 'react-redux';
import { Grid, Header, Message, Button } from 'semantic-ui-react';
import { updateStats } from '../actions/myStats.js';
import Questions from './Questions.js';
// import MyStats from './MyStats.js';

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
    userAnswer: '',
    myStats: ''
  }

  nextQuestion = () => {
    this.setState(prevState => ({ questionIndex: prevState.questionIndex + 1 }))
  }

  endGame = () => {
    // console.log('Game Over')
    // console.log(this.state.questionIndex)
    updateStats(this.props.currentUser.id, this.state.questionIndex)
  }

  render() {
    console.log(this.props)
      const { choice } = this.state.userAnswer
      const { questions } = this.props
      const newQuestions = randomQuestionNumbers(questions)
      const { userStats } = this.state.questionIndex

console.log(this.state.questionIndex)
        return (
        <><Header as="h2" textAlign="center" style={{ fontFamily: 'OCR A Std, monospace', color: "grey", fontSize: '35px'}}>
            Total Correct
              <div style={{ fontFamily: 'OCR A Std, monospace', fontSize: '20px' }}>
                { this.props.total_correct ? this.props.total_correct : this.state.questionIndex }
              </div>
          </Header>
          <Questions question={newQuestions[this.state.questionIndex]} nextQuestion={this.nextQuestion} endGame={this.endGame}/>
        </>
      )
    }
}

const mapStateToProps = state => {
  console.log("This is state", state)
  return {
    currentUser: state.currentUser,
    questions: state.questions.questions,
    userAnswer: state.questions.correct_answer,
    myStats: state.userStats
  }
}

export default connect(mapStateToProps, { updateStats })(GameContainer);
