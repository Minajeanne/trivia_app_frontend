import React from 'react';
import './App.css';
import Login from './components/Login.js';
import { connect } from 'react-redux';
import { getCurrentUser } from "./actions/currentUser.js";
import { Route, Switch, withRouter } from 'react-router-dom';

class App extends React.Component {

  componentDidMount() {
    fetch("http://localhost:3000/api/v1/users/1")
    .then(r => r.json())
    .then(console.log)
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Login />
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser,
    // games: state.myGames
  })
}

export default withRouter(connect(mapStateToProps, { getCurrentUser })(App));
