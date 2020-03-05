// functional component
import React from 'react';
import { Message, Button, Icon } from 'semantic-ui-react';

const EndGame = (props) => {

 const handleClick = () => {
      props.playAgain()
  }

  return (
    <div>
      <Message
        color="red"
        style={{ fontFamily: "Shadows Into Light, cursive", fontSize: "25px"}}
        >
        <Icon name="frown outline" size="huge" />
          The correct answer is <strong>{props.correctAnswer}</strong>
      </Message>

      <Button
        basic color="green"
        style={{ fontFamily: "Shadows Into Light, cursive", fontSize: "25px" }}
        onClick={handleClick}>
        Play Again?
      </Button>
    </div>
  )
}

export default EndGame;
