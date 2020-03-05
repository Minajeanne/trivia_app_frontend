import React from 'react';
import { connect } from 'react-redux';
import { getMyStats } from '../actions/myStats.js';
import { Header, Icon, Container } from 'semantic-ui-react';

class MyStatsContainer extends React.Component {

  componentDidMount() {
    this.props.getMyStats(this.props.currentUser)
  }

  render() {

    const userPr = this.props.stats.total_correct

    return (
      <div>
      <Container fluid>
        <Header
          as="h2"
          textAlign="left"
          style={{ fontFamily: "Shadows Into Light, cursive", color: "gold", fontSize: "35px" }}
          >
          <Icon name="trophy" />
            <Header.Content>
              Your Top Score
                <Header.Subheader>{
                  userPr ?
                    <div className="main-number">{userPr}</div>
                  :
                    <div className="subtext">You've yet to answer any questions correctly!</div>
                }
                </Header.Subheader>
            </Header.Content>
          </Header>
        </Container>
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
