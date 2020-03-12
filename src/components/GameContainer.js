import React from 'react';
import { connect } from 'react-redux';
import { Header, Label, Container } from 'semantic-ui-react';
import { updateStats } from '../actions/myStats.js';
import Questions from './Questions.js';
import EndGame from './EndGame.js';

function randomQuestionNumbers(array) {
  let i = array.length - 1;
    for (i; i > 0; i--) {
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
    userStats: '',
    inProgress: true,
    answer: ''
  }

  nextQuestion = () => {
    this.setState(prevState => ({ questionIndex: prevState.questionIndex + 1 }))
  }

  endGame = (correctAnswer) => {
    this.props.updateStats(parseInt(this.props.currentUser.id), this.state.questionIndex);
      this.setState({ inProgress: false, answer: correctAnswer })
  }

  playAgain = () => {
    this.setState({ inProgress: true, questionIndex: 0 });
      this.nextQuestionOrEndGame();
  }

  nextQuestionOrEndGame = () => {
    const { choice } = this.state.userAnswer
    const { questions } = this.props
    const newQuestions = randomQuestionNumbers(questions)
    const { userStats } = this.state.questionIndex

    if (this.state.inProgress === true) {
      return <Questions
              question={newQuestions[this.state.questionIndex]}
              nextQuestion={this.nextQuestion}
              endGame={this.endGame}
              />;
    } else {
      return <EndGame
              correctAnswer={this.state.answer}
              playAgain={this.playAgain}
              />;
    }
  }

  render() {
    return (
      <>
      <Container style={{ margin: "10px", padding: "50px" }}>
        <Header
          as="h2"
          textAlign="center"
          style={{ fontFamily: "Shadows Into Light, cursive", color: "green"}}
          >
            Total Correct
              <div
                style={{ fontFamily: "Shadows Into Light, cursive"}}
                >
                <Label
                  circular color="green"
                  size="huge"
                  >
                  { this.props.total_correct ? this.props.total_correct : this.state.questionIndex }
                </Label>
              </div>
        </Header>
      </Container>
        <div>
          {this.nextQuestionOrEndGame()}
        </div>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    questions: state.questions.questions,
    userAnswer: state.questions.correct_answer,
    userStats: state.questionIndex,
    // newRank: state.newRank
  }
}

export default connect(mapStateToProps, { updateStats })(GameContainer);
