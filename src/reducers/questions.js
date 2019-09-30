// import { FETCH_QUESTIONS } from '../actions/questions.js';

export default (state = {questions: []}, action) => {
    console.log(action)
    switch(action.type) {
        case 'FETCH_QUESTIONS':
            return {questions: action.fetchedQuestions.results};
        default:
            return state;
    }
}
