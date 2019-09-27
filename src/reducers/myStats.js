const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_MY_GAMES":
      return action.games;
    case "ADD_GAME":
      return state.concat(action.game);
    case "UPDATE_GAME":
      return state.map(game => game.id === action.game.id ? action.game : game);
    case "DELETE_GAME":
      return state.filter(game => game.id === action.gameId ? false : true);
    case "CLEAR_GAMES":
      return initialState;
    default:
      return state;
  }
}
