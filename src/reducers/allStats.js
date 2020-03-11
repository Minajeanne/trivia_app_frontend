export default (state = {allStats: []}, action) => {
  switch (action.type) {
    case "GET_ALL_STATS":
      return {allStats: action.fetchedAllStats}
    default:
      return state;
  }
}
