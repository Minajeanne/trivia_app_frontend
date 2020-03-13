// async actions
export const getMyStats = (currentUser) => {
  console.log('You hit your stats action', currentUser)

  return dispatch => {
    return fetch(`http://localhost:3001/api/v1/stats/${currentUser.id}`, {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json"
     },
    })
      .then(r => r.json())
      .then(fetchedStats => {
        console.log('Here are your stats:', fetchedStats)
        dispatch({ type: 'GET_MY_STATS', fetchedStats})
      })
    .catch(console.log)
  }
}

export const getAllUsersStats = () => {
  console.log('You hit your Allstats action')

  return dispatch => {
    return fetch(`http://localhost:3001/api/v1/stats`, {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json"
     },
    })
      .then(r => r.json())
      .then(fetchedAllStats => {
        console.log('Here are your Allstats!!:', fetchedAllStats)
        dispatch({ type: 'GET_ALL_STATS', fetchedAllStats})
      })
    .catch(console.log)
  }
}

export const updateStats = (currentUser, score, leaderboard) => {
  return dispatch => {
    return fetch(`http://localhost:3001/api/v1/stats/${currentUser}`, {
      credentials: "include",
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({score, leaderboard})
    })
      .then(r => r.json())
      .then(r => {
        console.log(r)
        dispatch({type: 'UPDATE_STATS', stats: r})
      }
    )
  }
}
// export const updateAllUsersStats = (leaderboard) => {
//   return dispatch => {
//     return fetch(`http://localhost:3001/api/v1/stats`, {
//       credentials: "include",
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({leaderboard})
//     })
//       .then(r => r.json())
//       .then(r => {
//         console.log('!!!!!!!!', r)
//         dispatch({type: 'UPDATE_ALL_USERS_STATS', allStats: r})
//       }
//     )
//   };
// }
