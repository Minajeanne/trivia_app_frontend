import React from 'react';
import { connect } from 'react-redux';
import Questions from './Questions.js'

class GameContainer extends React.Component {

  render() {
      return (

                <div>
                  <p>'YOU HIT THIS POINT'</p>
                </div>
              )
            }

}

export default GameContainer;
// export default connect(mapStateToProps, { fetchStreak })(GameContainer);
