// import { GET_MY_STATS } from '../actions/myStats.js';

export default (state = {stats: []}, action) => {
  console.log(action)
  switch (action.type) {
    case "GET_MY_STATS":
      return {stats: action.fetchedStats}
    // case "ADD_STATS":
    //   return {stats: action.fetchedStats.results};
    // case "UPDATE_STATS":
    //   return action.statsData;
    default:
      return state;
  }
}
