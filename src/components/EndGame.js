import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Message, Button } from 'semantic-ui-react';

const EndGame = (props) => {

 const handleClick = () => {
      props.playAgain()
  }

  return (
    <div>
      <Message color="red">INCORRECT! The answer is {props.correctAnswer}.</Message>
      <Button onClick={handleClick}>Play Again?</Button>
    </div>
  )
}

export default EndGame;
