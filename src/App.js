import React from 'react';
import './App.css';
import NavBar from './components/NavBar.js';
import Home from './components/Home.js';
import Login from './components/Login.js';
import Signup from './components/Signup.js';
import MyGames from './components/MyGames.js';
import Questions from './components/Questions.js';
import GameContainer from './components/GameContainer.js';
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
       { loggedIn ? <NavBar /> : <Home /> }
        <Switch>
          <Route exact path='/signup' render={({history})=><Signup history={history}/>}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/stats' component={MyStats}/>
          <Route exact path='/games/new' component={GameContainer}/>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser,
    stats: state.myStats
  })
}

export default withRouter(connect(mapStateToProps, { getCurrentUser })(App));
// export default connect(mapStateToProps, { getCurrentUser })(App);
