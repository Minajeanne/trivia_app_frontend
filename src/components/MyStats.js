import React from 'react';
import { connect } from 'react-redux';
import GameContainer from './GameContainer.js';
import { Link } from 'react-router-dom';

class MyStats extends React.Component {
  state = {
    userPr: [],
    userRank: []
  }

  render() {
    console.log(this.props)

    const { myStats } = this.props

    return (
      <div />
    );
  }
}

const mapStateToProps = state => {
  console.log("This is state", state)
  return {
    myStats: state.myStats.stats

  }
}

export default connect(mapStateToProps)(MyStats);
