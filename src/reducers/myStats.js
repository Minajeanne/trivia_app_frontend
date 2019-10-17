
export default (state = {stats: [], userPr: 0}, action) => {
  console.log('This is myStats reducer', action)
  switch (action.type) {
    case "GET_MY_STATS":
      return {stats: action.fetchedStats}
    case "UPDATE_STATS":
      debugger
      let uPr
      return {...state, stats: action.stats, userPr: uPr}
    default:
      return state;
  }
}
