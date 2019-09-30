import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchQuestions } from '../actions/questions.js';
import Logout from './Logout.js';

const NavBar = ({ currentUser, loggedIn, fetchQuestions }) => {

  return (
    <div className="NavBar">
      <NavLink exact activeClassName="active" to="/stats">My Stats</NavLink><br></br>
      <NavLink exact activeClassName="active" to="/games/new" onClick={fetchQuestions}>New Game</NavLink>
      { loggedIn ? <> <p id="loggedin">Welcome,  {currentUser.attributes.username}!</p><Logout /></> : null}
    </div>
  )
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser,
    loggedIn: !!currentUser
  }
}

export default connect(mapStateToProps, { fetchQuestions })(NavBar);
