// synchronous actions
// export const setMyStats = stats => {
//   return {
//     type: "SET_MY_STATS",
//     stats
//   }
// }

export const addStats = stats => {
  return {
    type: "ADD_STATS",
    stats
  }
}

export const updateStatsSuccess = stats => {
  return {
    type: "UPDATE_STATS",
    stats
  }
}

// async actions
export const getMyStats = () => {
  return dispatch => {
    return fetch("http://localhost:3001/api/v1/stats", {
    })
      .then(r => r.json())
      .then(fetchedStats => {
        console.log('Here are your stats:', fetchedStats)
        dispatch({ type: 'GET_MY_STATS', fetchedStats})
      }
    )
    .catch(console.log)
  }
}

// export const createStats = (statsData, history) => {
//   return dispatch => {
//     const sendableStatsData = {
//       user_pr: statsData.userPr,
//       user_rank: statsData.userRank,
//       total_correct: statsData.totalCorrect,
//       user_id: statsData.userId
//     }
//     return fetch("http://localhost:3001/api/v1/stats", {
//       credentials: "include",
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(sendableStatsData)
//     })
//       .then(r => r.json())
//       .then(resp => {
//         if (resp.error) {
//           alert(resp.error)
//         } else {
//           dispatch(addStats(resp.data))
//           // dispatch(resetTripForm())
//           // history.push(`/stats/${resp.data.id}`)
//         }
//       })
//       .catch(console.log)
//   }
// }

// NEED THIS??
export const updateStats = (currentUser, score) => {
    return fetch(`http://localhost:3001/api/v1/stats/${currentUser}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({score})
    })
      .then(r => r.json())
      .then(r => {

      })
}
