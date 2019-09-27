// import { FETCH_QUESTIONS } from '../actions/questions.js';

export default (state = [], action) => {
    console.log(action)
    switch(action.type) {
        case 'FETCH_QUESTIONS':
            return action.payload;
        default:
            return state;
    }
}
