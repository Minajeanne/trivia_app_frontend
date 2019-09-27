// import React from 'react';
// import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
//
// const Stats = props => {
//
//     state = {
//         username: null,
//         userPr: null,
//         totalCorrect: null,
//         userRank: null
//     }
//
//     componentDidMount() {
//        return dispatch => {
//         return fetch("http://localhost:3001/api/v1/stats", {
//           credentials: "include",
//           method: 'GET',
//           headers: {
//             "Content-Type": "application/json"
//           },
//       })
//           .then(r => r.json())
//           .then(response => {
//             if (response.error) {
//               alert(response.error)
//             } else {
//               dispatch(setMyStats(response.data))
//             }
//           })
//           .catch(console.log)
//       }
//     }
//       // .then(handleErrors)
//       //     .then(resp => resp.json())
//       //     .then(resp => {
//       //         console.log(resp)
//       //         this.setState({
//       //           username: resp.currentUser.username,
//       //           userPr: resp.userPr,
//       //           totalCorrect: resp.totalCorrect,
//       //           userRank: resp.userRank
//       //         })
//       //     })
//       //     .catch(err => {
//       //         console.log(err)
//       //     });
//     // }
//
//     // export const getMyStats = () => {
//     //   return dispatch => {
//     //     return fetch("http://localhost:3001/api/v1/stats", {
//     //       credentials: "include",
//     //       method: "GET",
//     //       headers: {
//     //         "Content-Type": "application/json"
//     //       },
//     //     })
//     //       .then(r => r.json())
//     //       .then(response => {
//     //         if (response.error) {
//     //           alert(response.error)
//     //         } else {
//     //           dispatch(setMyStats(response.data))
//     //         }
//     //       })
//     //       .catch(console.log)
//     //   }
//     // }
//     //
//     // render() {
//
//
//     }
// // }
//
// export default Stats;
//
// // const MyStats = props => {
// //   const userStats = props.stats.length > 0 ?
// //     props.stats.map(s => (<p key={s.id}><Link to={`/stats/${s.id}`}>{s.attributes.user_pr}</Link></p>)) :
// //     null
// //
// //   return userStats
// // }
// //
// // // we provide mapStateToProps to Redux in order to tell Redux:
// // // "Excuse me Redux, would you please provide use access to your state
// // // so that we may pick and choose the pieces of state we would like availble
// // // to this particular component as props."
// //
// // const mapStateToProps = state => {
// //   return {
// //     stats: state.myStats
// //   }
// // }
// //
// // export default connect(mapStateToProps)(MyStats);
