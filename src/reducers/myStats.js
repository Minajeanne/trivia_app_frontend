export default (state = {stats: []}, action) => {
  switch (action.type) {
    case "GET_MY_STATS":
      return {stats: action.fetchedStats}
    case "UPDATE_STATS":
      return {...state, stats: action.stats}
    default:
      return state;
  }
}
