export const fetchQuestions = () => {
  return dispatch => {
    return fetch("https://opentdb.com/api.php?amount=50&type=multiple", {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    })
      .then(r => r.json())
      .then(response => {
        if (response.error) {
          alert(response.error)
        } else {
          dispatch(fetchQuestions(response.data))
          history.push(`/questions`)
        }
      })
      .catch(console.log)
  }
}
