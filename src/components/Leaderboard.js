import React from 'react';
import { connect } from 'react-redux';
import { getAllUsersStats } from '../actions/myStats.js';

class Leaderboard extends React.Component {

  componentDidMount() {
    this.props.getAllUsersStats(this.props.allStats)
  }

  render() {

    const leaderboard = this.props.allStats.allStats
    // let topFive = leaderboard.slice(0,3)
    // debugger

    return (
        // <table
        //   as="h2"
        //   textAlign="left"
        //   style={{ fontFamily: "Shadows Into Light, cursive", color: "gold", fontSize: "30px" }}
        //   >
        //   <thead>
        //     <tr>
        //       <th>Leaderboard</th>
        //     </tr>
        //   </thead>
        //   <tbody>
        //     <tr style={{color: "black", fontSize: "28px"}}>
              // <td>
              <>

              </>
              // {topFive.map((rank, user) => (
              //       <p key={rank.user_id}>{rank.user_rank} - {rank.user.username}</p>
              //     ))}
              // </td>
      //       </tr>
      //     </tbody>
      // </table>
    )
  }
}

const mapStateToProps = state => {
  return {
    allStats: state.allStats
  }
}

export default connect(mapStateToProps, { getAllUsersStats })(Leaderboard);
