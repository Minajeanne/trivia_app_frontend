export const fetchQuestions = () => {
  return dispatch => {
    return fetch("https://opentdb.com/api.php?amount=30", {
    })
      .then(r => r.json())
      .then(fetchedQuestions => {
          dispatch({ type: 'FETCH_QUESTIONS', fetchedQuestions})
        }
      )
    .catch(console.log)
  }
}
