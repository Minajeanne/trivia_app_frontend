import React from 'react';
import { connect } from 'react-redux';
import { getAllUsersStats } from '../actions/myStats.js';
import { Header, Icon, Grid } from 'semantic-ui-react';
import Rank from './Rank.js';

class Leaderboard extends React.Component {

  componentDidMount() {
    this.props.getAllUsersStats(this.props.allStats)
  }

  render() {

    const leaderboard = this.props.allStats.allStats

    return (
      <div
          as="h2"
          textAlign="left"
          style={{ fontFamily: "Shadows Into Light, cursive", color: "gold", fontSize: "30px" }}
          block
          >
            Leaderboard
              <td className="main-number" style={{color: "black", fontSize: "30px"}}>
                <tr>
                { leaderboard.map((rank, user) => (
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



// import React from 'react';
// import Rank from './Rank.js';
//
// const Leaderboard = (props) => {
//
//   let leaderboard = props.leaderboard || [];
//
//   leaderboard = leaderboard.sort((prev, next) => {
//     if (prev.userPr === next.userPr) {
//       return prev.name <= next.name ? 1 : -1;
//     }
//     return prev.userPr < next.userPr ? 1 : -1;
//   }).map((user, index) => ({
//     ...user,
//     rank: index + 1,
//     currentUser: user.id === props.currentUser.id,
//   })).filter((user, index) => {
//     if (index < 3 || user.id === props.currentUser.id) return user;
//     return null;
//   });
//
//
//   return (
//     <>
//     Leaderboard
//       {
//         props.currentUser && leaderboard.map((user, idx) => {
//           const position = {
//             x: -100,
//             y: -530 + (70 * idx)
//           };
//           return <Rank key={user.id} user={user} position={position}/>
//         })
//       }
//     </>
//   );
// }
//
// export default Leaderboard;
