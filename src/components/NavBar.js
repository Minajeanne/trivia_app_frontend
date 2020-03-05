import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchQuestions } from '../actions/questions.js';
import Logout from './Logout.js';

const NavBar = ({ currentUser, loggedIn, fetchQuestions }) => {

  return (
    <div className="NavBar" as="h2" textAlign="center" style={{ fontFamily: 'OCR A Std, monospace', color: "black", fontSize: '25px'}}>
      { loggedIn ? <> <p id="loggedin"><br></br>
      <strong>  Welcome,  {currentUser.attributes.username}!</strong></p><br></br>
        <Logout /><br></br></> : null }
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
          <br></br>
          <br></br>
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
          <br></br>
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
