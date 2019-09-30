import React from 'react';
import { connect } from 'react-redux';
// import MyStats from './MyStats.js';

class GameContainer extends React.Component {

  render() {
    console.log(this.props)
      // const randomQuestionNumber = Math.floor(Math.random() * 29)
// debugger
const {questions} = this.props
    if (questions){

        return (

                  <div>
                    <ul>
                    {questions.map(q=>(
                      <li>  <p>{q.category}</p></li>
                        ))}
                      </ul>

                  </div>
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
