import React from 'react';
import { connect } from 'react-redux';
import GameContainer from './GameContainer.js';
import { getMyStats, updateStats } from '../actions/myStats.js';
import { Header, Message, Button } from 'semantic-ui-react';

class MyStats extends React.Component {

  componentDidMount() {
    this.props.getMyStats(this.props.currentUser)
  }

  render() {

    const userPr = this.props.stats.total_correct

    return (
      <div>

        <Header as="h2" textAlign="center" style={{ fontFamily: 'OCR A Std, monospace', color: "grey", fontSize: '35px'}}>
          Your Top Score:
        </Header>
          <div style={{ fontFamily: 'OCR A Std, monospace', fontSize: '30px' }}>
          {userPr ?
              <div className="main-number">{userPr}</div>
              :
              <div className="subtext">You've yet to answer any questions correctly!</div>
          }
          </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    stats: state.myStats.stats
    // fetchedStats: state.fetchedStats,
    // userRank: state.myStats.userRank
  }
}

export default connect(mapStateToProps, { getMyStats })(MyStats);
