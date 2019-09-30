import React from 'react';
import { connect } from 'react-redux';
import { Grid, Header, Message} from 'semantic-ui-react';
// import MyStats from './MyStats.js';

class GameContainer extends React.Component {

  render() {
    console.log(this.props)

      const {questions} = this.props

      const randomQuestionNumber = Math.floor(Math.random()* questions.length)

      // const questionCategory = questions.map(q => (q.category))
      // const questionText = questions.map(q => (q.question))

      if (questions){
        return questions.map(q => (
                <div>
                  <br></br>
                    <p>{q.category[randomQuestionNumber]}</p>
                    <p>{q.question}</p>
                      <p hidden={ q.correct_answer === "Correct! On to the next!" ? false : true } color={"green"}>
                        {q.correct_answer}
                      </p>
                    <br></br>
                   <p>{}</p>
                </div>
                )
              )
            }
      else {
        return (
        <div>
         <p>"No questions to display."</p>
         </div>
      )}
    }
  }


const mapStateToProps = state => {
  console.log("This is state", state)
  return {
    questions: state.questions.questions
  }
}

export default connect(mapStateToProps)(GameContainer);
