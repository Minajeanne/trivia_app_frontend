import React from 'react';
import { connect } from 'react-redux';
import GameContainer from './GameContainer.js';
import { getMyStats } from '../actions/myStats.js';
import { Link } from 'react-router-dom';

class MyStats extends React.Component {
  state = {
    userPr: null,
    userRank: null
  }

  // componentDidMount() {
  //   console.log('BAM')
  //
  //     fetch(`http://localhost:3001/api/v1/users/${currentUser}/stats`, {
  //       method: 'GET',
  //       headers: {
  //         "Content-Type": "application/json"
  //      },
  //      })
  //       .then(r => r.json())
  //       .then(stats => {
  //         console.log(stats)
  //           this.setState({
  //             userPr: stats.userPr,
  //             userRank: stats.userRank
  //           })
  //       }
  //     )
  //     .catch(console.log)
  // }

  render() {

    const { userPr, userRank } = this.state

    return (
      <div>
      {}
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
//
// const mapStateToProps = state => {
//   console.log("This is state", state)
//   return {
//     // userPr: state.myStats.userPr,
//     // userRank: state.myStats.userRank
//   }
// }

// export default connect(mapStateToProps)(MyStats);
export default MyStats;
