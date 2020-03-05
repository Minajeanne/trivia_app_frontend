import React from 'react';
import { Link } from 'react-router-dom'
import { Header } from 'semantic-ui-react';
import Login from './Login.js';
import Signup from './Signup.js';

const Home = () => (
  <div>
    <Header
      as="h2"
      textAlign="center"
      style={{ fontFamily: "Shadows Into Light, cursive", color: "green", fontSize: "60px"}}
      >
      <Header.Content>
        TRIVIA APP
          <Header.Subheader>Let's Play!</Header.Subheader>
      </Header.Content>
    </Header>

    <div>
      <Login />
    </div>
  </div>
);

export default Home;
  // <Link to="/login">Log In</Link> or <Link to="/signup">Sign Up</Link>
