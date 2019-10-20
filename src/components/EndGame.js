import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Message, Button } from 'semantic-ui-react';

const EndGame = ({ newGame, correctAnswer }) => {
  return (
    <div>
      <Message color="red">INCORRECT! The answer is {correctAnswer}. Click <strong>New Game</strong> to play again.</Message>
    </div>
  )
}

export default EndGame;
