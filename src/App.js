import React from 'react';
import './App.css';
import Login from './components/Login.js';
import Home from './components/Home.js';
import { connect } from 'react-redux';
import { getCurrentUser } from "./actions/currentUser.js";
import { Route, Switch, withRouter } from 'react-router-dom';

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }
  // componentDidMount() {
  //   fetch("http://localhost:3000/api/v1/users/1")
  //   .then(r => r.json())
  //   .then(console.log)
  // }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Home />
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

// add back in: export default withRouter(connect(mapStateToProps, { getCurrentUser })(App));
export default connect(mapStateToProps, { getCurrentUser })(App);
