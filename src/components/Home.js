import React from 'react';
import { Header, Container } from 'semantic-ui-react';
import Login from './Login.js';

const Home = () => (
  <div>
    <Container style={{ margin: "10px", padding: "50px" }}>
      <Header
        as="h2"
        textAlign="center"
        style={{ fontFamily: "Shadows Into Light, cursive", color: "green", fontSize: "60px"}}
        >
          <Header.Content>
            TRIVIA APP
              <Header.Subheader>
                <strong>Let's Play!</strong>
              </Header.Subheader>
          </Header.Content>
        </Header>
      </Container>
    <div>
      <Login />
    </div>
  </div>
);

export default Home;
