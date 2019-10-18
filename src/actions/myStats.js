// synchronous actions

// export const updateStatsSuccess = stats => {
//   return {
//     type: "UPDATE_STATS",
//     stats
//   }
// }

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

// NEED THIS??
export const updateStats = (currentUser, score) => {
  return dispatch => {
    return fetch(`http://localhost:3001/api/v1/stats/${currentUser}`, {
      credentials: "include",
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({score})
    })
      .then(r => r.json())
      .then(r => {
        console.log(r)
        dispatch({type: 'UPDATE_STATS', stats: r})
      }
    )
  }
}
