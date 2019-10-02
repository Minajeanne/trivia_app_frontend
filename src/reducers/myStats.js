
export default (state = {stats: []}, action) => {
  console.log(action)
  switch (action.type) {
    // case "SET_MY_STATS":
    //   return action.stats;
    case "ADD_STATS":
      return {stats: action.fetchedStats.results};
    case "UPDATE_STATS":
      return action.statsData;
    default:
      return state;
  }
}
