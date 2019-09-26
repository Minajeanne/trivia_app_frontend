// import { resetTripForm } from './tripForm'

// synchronous actions
export const setMyGames = games => {
  return {
    type: "SET_MY_GAMES",
    games
  }
}

export const clearGames = () => {
  return {
    type: "CLEAR_GAMES"
  }
}

export const addGame = game => {
  return {
    type: "ADD_GAME",
    game
  }
}

export const deleteGameSuccess = gameId => {
  return {
    type: "DELETE_GAME",
    gameId
  }
}

export const updateGameSuccess = game => {
  return {
    type: "UPDATE_GAME",
    game
  }
}

// async actions
export const getMyGames = () => {
  return dispatch => {
    return fetch("http://localhost:3001/api/v1/games", {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    })
      .then(r => r.json())
      .then(response => {
        if (response.error) {
          alert(response.error)
        } else {
          dispatch(setMyGames(response.data))
        }
      })
      .catch(console.log)
  }
}

export const createGame = (gameData, history) => {
  return dispatch => {
    const sendableGameData = {
      user_id: gameData.userId
    }
    return fetch("http://localhost:3001/api/v1/games", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(sendableGameData)
    })
      .then(r => r.json())
      .then(resp => {
        if (resp.error) {
          alert(resp.error)
        } else {
          dispatch(addGame(resp.data))
          // dispatch(resetTripForm())
          history.push(`/games/${resp.data.id}`)
        }
      })
      .catch(console.log)

  }
}

// NEED THIS??
export const updateGame = (gameData, history) => {
  return dispatch => {
    const sendableGameData = {
      user_id: gameData.userId
    }
    return fetch(`http://localhost:3001/api/v1/games/${gameData.gameId}`, {
      credentials: "include",
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(sendableGameData)
    })
      .then(r => r.json())
      .then(resp => {
        if (resp.error) {
          alert(resp.error)
        } else {
          dispatch(updateGameSuccess(resp.data))
          history.push(`/games/${resp.data.id}`)
        }
      })
      .catch(console.log)

  }
}

export const deleteGame = (gameId, history) => {
  return dispatch => {
    return fetch(`http://localhost:3001/api/v1/games/${gameId}`, {
      credentials: "include",
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(r => r.json())
      .then(resp => {
        if (resp.error) {
          alert(resp.error)
        } else {
          dispatch(deleteGameSuccess(gameId))
          history.push(`/games`)
        }
      })
      .catch(console.log)
  }
}
