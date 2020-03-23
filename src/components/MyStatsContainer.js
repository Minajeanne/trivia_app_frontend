import React from 'react';
import { connect } from 'react-redux';
import { getMyStats } from '../actions/myStats.js';
import { getAllUsersStats } from '../actions/myStats.js';
// import { updateAllUsersStats } from '../actions/myStats.js';
import { Header, Icon, Grid } from 'semantic-ui-react';
import TopScore from './TopScore.js';
import Leaderboard from './Leaderboard.js';
import Rank from './Rank.js';

class MyStatsContainer extends React.Component {
  // state = {
  //   leaderboard: this.props.updateAllUsersStats()
  // };

  componentDidMount() {
    this.props.getMyStats(this.props.currentUser);
      // this.props.updateAllUsersStats(this.state.ranking);
  }

  render() {
    const userPr = this.props.stats.total_correct
    const userRank = this.props.stats.user_rank

    return (
      <div>
        <Grid centered columns={2} padded="vertically" relaxed="very" stackabled="true">
          <Grid.Row>
            <Grid.Column mobile={16} tablet={8} computer={4} textAlign="centered">
              <div as="h2" style={{ fontFamily: "Shadows Into Light, cursive", color: "blue", fontSize: "40px", fontWeight: "bold" }}>
                High Score
                  {
                    userPr ?
                    <div className="main-number" style={{color: "black", fontSize: "30px", paddingTop: "20px"}}>
                        {userPr}
                    </div>
                  :
                    <div style={{color: "black", fontSize: "30px"}}>
                        You've yet to answer any questions correctly!
                    </div>
                  }
              </div>
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={4} textAlign="centered">
              <Rank userRank={userRank}/>
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={4} textAlign="centered">
              <Leaderboard />
            </Grid.Column>
          </Grid.Row>
        </Grid>
    </div>
    )
  }
}

const mapStateToProps = state => {
  console.log('state in MyStatsContainer', state)
  return {
    currentUser: state.currentUser,
    stats: state.myStats.stats,
    leaderboard: state.allStats
  }
}

export default connect(mapStateToProps, { getMyStats, getAllUsersStats })(MyStatsContainer);
