import React from 'react';
import { connect } from 'react-redux';
import { Message, Button } from 'semantic-ui-react';

const EndGame = ({correctAnswer}) => {

  return (
    <div>
      <Message color="red">INCORRECT! The answer is {correctAnswer}. Click <strong>New Game</strong> to play again.</Message>
    </div>
  )
}

export default EndGame;
