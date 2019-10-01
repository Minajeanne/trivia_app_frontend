// import React from 'react';
// import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
//
// const Stats = props => {
//
//     state = {
//         username: null,
//         userPr: null,
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
// // const mapStateToProps = state => {
// //   return {
// //     stats: state.myStats
// //   }
// // }
// //
// // export default connect(mapStateToProps)(MyStats);
