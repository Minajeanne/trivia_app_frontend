import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Button, Divider, Segment, Grid, Icon, Transition } from 'semantic-ui-react';
import { fetchQuestions } from '../actions/questions.js';
import Logout from './Logout.js';
import MyStatsContainer from './MyStatsContainer.js';


const NavBar = ({ currentUser, loggedIn, fetchQuestions }) => {

  return (
    <>
      <div align="right">
        <Logout />
      </div>

      <nav
        className="NavBar"
        as="h2"
        textAlign="center"
        style={{ fontFamily: "Shadows Into Light, cursive", color: "black", fontSize: '35px'}}
        >
          { loggedIn ? <p id="loggedin">Welcome,  {currentUser.attributes.username}!</p> : null }

        <div align="left">
          <MyStatsContainer />
        </div>

        <NavLink
          as="h2"
          textAlign="center"
          style={{ fontFamily: "Shadows Into Light, cursive", color: "red", fontSize: "30px"}}
          exact
          activeClassName="selected"
          activeStyle={{ fontWeight: "bold", color: "black" }}
          to="/games/new"
          onClick={fetchQuestions}>

              <Icon name="angle double right" />
                Start a New Game
              <Icon name="angle double left" />

        </NavLink>
      </nav>
    </>
  )
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser,
    loggedIn: !!currentUser
  }
}

export default connect(mapStateToProps, { fetchQuestions })(NavBar);
