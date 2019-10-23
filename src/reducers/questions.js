
export default (state = {questions: []}, action) => {
    console.log(action)
    switch(action.type) {
        case 'FETCH_QUESTIONS':
          console.log('json', action.fetchedQuestions.results)
            return {questions: action.fetchedQuestions.results};
        default:
            return state;
    }
}
