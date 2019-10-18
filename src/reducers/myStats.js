
export default (state = {stats: []}, action) => {
  console.log('This is myStats reducer', action)
  switch (action.type) {
    case "GET_MY_STATS":
      return {stats: action.fetchedStats}
    case "UPDATE_STATS":
      // let pr = state.userPr
      // // updates user PR if current game score is higher than previous scores
      //   if (action.stats.total_correct > pr) {
      //     pr = action.stats.total_correct
      //     // return {...state, stats: action.stats, userPr: newPr}
      //       }
            debugger
        return {...state, stats: action.stats}
    default:
      return state;
  }
}
