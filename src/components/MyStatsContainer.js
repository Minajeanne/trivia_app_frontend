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
        <Grid>
          <Grid.Row>
            <Grid.Column width={6}>
              <Header
                as="h2"
                textAlign="left"
                style={{ fontFamily: "Shadows Into Light, cursive", color: "green", fontSize: "30px" }}
                block
                >
                <Icon name="smile" />
                  <Header.Content>
                    <div
                        as="h2"
                        style={{ fontFamily: "Shadows Into Light, cursive", color: "green", fontSize: "30px" }}
                        >
                        Your Top Score
                          {
                            userPr ?
                            <div className="main-number" style={{color: "black", fontSize: "30px"}}>
                                {userPr}
                            </div>
                          :
                            <div style={{color: "black", fontSize: "30px"}}>
                                You've yet to answer any questions correctly!
                            </div>
                          }
                      </div>
                  </Header.Content>
                </Header>
            </Grid.Column>
            <Grid.Column width={5}>
              <Header
                as="h2"
                textAlign="left"
                style={{ fontFamily: "Shadows Into Light, cursive", color: "purple", fontSize: "30px" }}
                block
                >
                  <Icon name="chess queen" />
                    <Header.Content>
                      <Rank userRank={userRank}/>
                    </Header.Content>
              </Header>
            </Grid.Column>
            <Grid.Column width={5}>
              <Header
                as="h2"
                textAlign="left"
                style={{ fontFamily: "Shadows Into Light, cursive", color: "gold", fontSize: "30px" }}
                block
                >
                  <Icon name="trophy" />
                    <Header.Content>
                      <Leaderboard />
                    </Header.Content>
              </Header>
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
    leaderboard: state.allStats.allStats
    // ranking: state.allStats.allStats
  }
}

export default connect(mapStateToProps, { getMyStats, getAllUsersStats })(MyStatsContainer);
