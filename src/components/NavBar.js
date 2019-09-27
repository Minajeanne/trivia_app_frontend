import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Logout from './Logout'

const NavBar = ({ currentUser, loggedIn }) => {
  return (
    <div className="NavBar">
      <NavLink exact activeClassName="active" to="/stats">My Stats</NavLink><br></br>
      <NavLink exact activeClassName="active" to="/games/new">New Game</NavLink>
      { loggedIn ? <><p id="loggedin">Welcome,  {currentUser.attributes.username}!</p><Logout /></> : null}
    </div>
  )
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser,
    loggedIn: !!currentUser
  }
}

export default connect(mapStateToProps)(NavBar);
