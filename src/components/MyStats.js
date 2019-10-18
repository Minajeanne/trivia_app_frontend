import React from 'react';
import { connect } from 'react-redux';
import GameContainer from './GameContainer.js';
import { getMyStats, updateStats } from '../actions/myStats.js';
import { Link } from 'react-router-dom';

class MyStats extends React.Component {
  // state = {
  //   userPr: null,
  //   userRank: null
  // }

  componentDidMount() {
    this.props.getMyStats(this.props.currentUser)
  }

  render() {

    const userPr = this.props.stats.total_correct

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
  debugger
  return {
    currentUser: state.currentUser,
    stats: state.myStats.stats
    // fetchedStats: state.fetchedStats,
    // userRank: state.myStats.userRank
  }
}

export default connect(mapStateToProps, { getMyStats })(MyStats);
