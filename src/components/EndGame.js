import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Message, Button } from 'semantic-ui-react';

const EndGame = ({ newGame, correctAnswer }) => {
  return (
    <div>
      <Message color="red">Incorrect, it was {correctAnswer}!</Message>
      <Button onClick={newGame}>Try Again!</Button>
    </div>
  )
}

export default EndGame;
