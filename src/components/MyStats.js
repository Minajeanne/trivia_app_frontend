import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const MyStats = props => {
  const userStats = props.games.length > 0 ?
    props.games.map(t => (<p key={t.id}><Link to={`/games/${t.id}`}>{t.attributes.name}</Link></p>)) :
    null

  return gameCards
}

// we provide mapStateToProps to Redux in order to tell Redux:
// "Excuse me Redux, would you please provide use access to your state
// so that we may pick and choose the pieces of state we would like availble
// to this particular component as props."

const mapStateToProps = state => {
  return {
    games: state.myGames
  }
}

export default connect(mapStateToProps)(MyGames);
