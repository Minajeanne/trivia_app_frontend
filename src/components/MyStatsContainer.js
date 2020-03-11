import React from 'react';
import { connect } from 'react-redux';
import { getMyStats } from '../actions/myStats.js';
import { Header, Icon, Grid } from 'semantic-ui-react';
import Leaderboard from './Leaderboard.js';
import Rank from './Rank.js';

class MyStatsContainer extends React.Component {

  componentDidMount() {
    this.props.getMyStats(this.props.currentUser)
  }

  render() {

    const userPr = this.props.stats.total_correct
    const userRank = this.props.stats.user_rank

    return (
      <div>
        <Grid celled>
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
                    Your Top Score
                      <div>
                        {userPr ?
                          <div
                            className="main-number"
                            style={{color: "black", fontSize: "30px"}}
                            >
                              {userPr}
                          </div>
                        :
                          <div
                            className="subtext"
                            >
                              You've yet to answer any questions correctly!
                          </div>
                        }
                      </div>
                  </Header.Content>
                </Header>
            </Grid.Column>
            <Grid.Column width={6}>
              <Header
                as="h2"
                textAlign="left"
                style={{ fontFamily: "Shadows Into Light, cursive", color: "purple", fontSize: "30px" }}
                block
                >
                  <Icon name="chess queen" />
                    <Header.Content>
                      Your Rank
                        <div
                          className="main-number"
                          style={{color: "black", fontSize: "30px"}}
                          >
                          {userRank ?
                            <div>
                                {userRank}
                            </div>
                          :
                            <div
                              className="subtext"
                              >
                                Start playing to earn your rank!
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
  return {
    currentUser: state.currentUser,
    stats: state.myStats.stats
    // fetchedStats: state.fetchedStats,
    // userRank: state.myStats.userRank
  }
}

export default connect(mapStateToProps, { getMyStats })(MyStatsContainer);
