import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Menu, Button, Divider, Segment, Grid } from 'semantic-ui-react';
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

        <Segment>
        <Grid columns={2} relaxed="very" stackable>
          <Grid.Column>
            <NavLink
              as="h2"
              textAlign="center"
              style={{ fontFamily: "Shadows Into Light, cursive", color: "black", fontSize: "30px"}}
              exact
              activeClassName="selected"
              activeStyle={{ fontWeight: "bold", color: "green" }}
              to="/stats">
                My Stats
            </NavLink>
          </Grid.Column>

          <Grid.Column>
            <NavLink
              as="h2"
              textAlign="center"
              style={{ fontFamily: "Shadows Into Light, cursive", color: "black", fontSize: "30px"}}
              exact
              activeClassName="selected"
              activeStyle={{ fontWeight: "bold", color: "green" }}
              to="/games/new"
              onClick={fetchQuestions}>
                New Game
            </NavLink>
          </Grid.Column>
        </Grid>

          <Divider vertical>Or</Divider>
        </Segment>
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
