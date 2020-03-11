export default (state = {questions: []}, action) => {
  switch(action.type) {
    case 'FETCH_QUESTIONS':
      return {questions: action.fetchedQuestions.results};
    default:
      return state;
  }
}
