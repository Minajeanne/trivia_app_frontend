import React from 'react';
import { connect } from 'react-redux';
import GameContainer from './GameContainer.js';
import { getMyStats } from '../actions/myStats.js';
import { Link } from 'react-router-dom';

class MyStats extends React.Component {
  state = {
    userPr: null,
    userRank: null
  }

  componentDidMount() {
    this.props.getMyStats(this.props.currentUser)
  }

  render() {

    const { userPr, userRank } = this.state

console.log('this is PROPS', this.props)

    return (
      <div>

        <h1>Your Top Score:</h1>
          {userPr ?
              <div className="main-number">{userPr}</div>
              :
              <div className="subtext">You've yet to answer any questions!</div>
          }
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log("This is state", state)
  return {
    currentUser: state.currentUser,
    fetchedStats: state.fetchedStats
    // userPr: state.myStats.userPr,
    // userRank: state.myStats.userRank
  }
}

export default connect(mapStateToProps, { getMyStats })(MyStats);
// export default MyStats;
