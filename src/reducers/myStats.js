// import { GET_MY_STATS } from '../actions/myStats.js';

export default (state = {stats: []}, action) => {
  console.log('This is myStats reducer', action)
  switch (action.type) {
    case "GET_MY_STATS":
      return {stats: action.fetchedStats}
    default:
      return state;
  }
}
