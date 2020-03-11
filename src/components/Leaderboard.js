import React from 'react';
import { connect } from 'react-redux';
import { getAllUsersStats } from '../actions/myStats.js';
import Rank from './Rank.js';

class Leaderboard extends React.Component {

  componentDidMount() {
    this.props.getAllUsersStats(this.props.allStats)
  }

  render() {

    const leaderboard = this.props.allStats.allStats
    const topFive = leaderboard.slice(0,5)

    return (
      <div
        as="h2"
        textAlign="left"
        style={{ fontFamily: "Shadows Into Light, cursive", color: "gold", fontSize: "30px" }}
        block
        >
          Leaderboard
            <td style={{color: "black", fontSize: "28px"}}>
              <tr>
                { topFive.map((rank, user) => (
                    <p>{rank.user_rank} - {rank.user.username}</p>
                ))}
              </tr>
            </td>
    </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    allStats: state.allStats
  }
}

export default connect(mapStateToProps, { getAllUsersStats })(Leaderboard);
