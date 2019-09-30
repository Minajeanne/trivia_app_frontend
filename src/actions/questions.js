export const fetchQuestions = () => {
  // console.log("Pulling next question...")
  // debugger
  return dispatch => {
    // dispatch({ type: 'FETCH_QUESTIONS' })
    return fetch("https://opentdb.com/api.php?amount=30", {
      // credentials: "include",
      // method: "GET",
      // headers: {
      //   "Content-Type": "application/json"
      // },
    })
      .then(r => r.json())
      .then(fetchedQuestions => {
        console.log('Your next question is:', fetchedQuestions)
          dispatch({ type: 'FETCH_QUESTIONS', fetchedQuestions})
          // history.push(`/questions`)
        }
      )
      .catch(console.log)
  }
}
