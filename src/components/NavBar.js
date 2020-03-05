import React from 'react';
import { connect } from 'react-redux';
import { NavLink, Button, Menu } from 'react-router-dom';
import { fetchQuestions } from '../actions/questions.js';
import Logout from './Logout.js';

const NavBar = ({ currentUser, loggedIn, fetchQuestions }) => {

  return (
    <div
      className="NavBar"
      as="h2"
      textAlign="center"
      style={{ fontFamily: "Shadows Into Light, cursive", color: "black", fontSize: '30px'}}
      >
      { loggedIn ? <p id="loggedin">Welcome,  {currentUser.attributes.username}!</p> : null }

          <NavLink
            as="h2"
            textAlign="center"
            style={{ fontFamily: "Shadows Into Light, cursive", color: "black"}}
            exact
            activeClassName="selected"
            activeStyle={{ fontWeight: "bold", color: "green" }}
            to="/stats">
              My Stats
          </NavLink>

          <NavLink
            as="h2"
            textAlign="center"
            style={{ fontFamily: "Shadows Into Light, cursive", color: "black"}}
            exact
            activeClassName="selected"
            activeStyle={{ fontWeight: "bold", color: "green" }}
            to="/games/new"
            onClick={fetchQuestions}>
              New Game
          </NavLink>

          <Logout />
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
