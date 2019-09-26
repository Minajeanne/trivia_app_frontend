import React from 'react';
import './App.css';
import Login from './components/Login.js';
import Home from './components/Home.js';
import NavBar from './components/NavBar.js';
import { connect } from 'react-redux';
import { getCurrentUser } from './actions/currentUser.js';
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
    const { loggedIn, games } = this.props
    return (
      <div className="App">
       { loggedIn ? <NavBar location={this.props.location}/> : <Home/> }
        <Switch>
          <Route exact path='/login' component={Login}/>

        </Switch>
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
// export default connect(mapStateToProps, { getCurrentUser })(App);
