import React from 'react';
import { connect } from 'react-redux';
import { getMyStats } from '../actions/myStats.js';
import { Header, Icon } from 'semantic-ui-react';

class MyStatsContainer extends React.Component {

  componentDidMount() {
    this.props.getMyStats(this.props.currentUser)
  }

  render() {

    const userPr = this.props.stats.total_correct

    return (
      <div>
      <br></br>
        <Header
          as="h2"
          textAlign="center"
          style={{ fontFamily: "Shadows Into Light, cursive", color: "gold", fontSize: "35px" }}>
            Your Top Score
          <Icon name="trophy" />
        </Header>

            <div style={{ fontFamily: "Shadows Into Light, cursive", fontSize: "30px" }}>
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

export default connect(mapStateToProps, { getMyStats })(MyStatsContainer);
