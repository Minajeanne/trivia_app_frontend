import React from 'react';
import Rank from './Rank.js';

const Leaderboard = (props) => {

  let leaderboard = props.leaderboard || [];

  leaderboard = leaderboard.sort((prev, next) => {
    if (prev.userPr === next.userPr) {
      return prev.name <= next.name ? 1 : -1;
    }
    return prev.userPr < next.userPr ? 1 : -1;
  }).map((user, index) => ({
    ...user,
    rank: index + 1,
    currentUser: user.id === props.currentUser.id,
  })).filter((user, index) => {
    if (index < 3 || user.id === props.currentUser.id) return user;
    return null;
  });


  return (
    <>
    Leaderboard
      {
        props.currentUser && leaderboard.map((user, idx) => {
          const position = {
            x: -100,
            y: -530 + (70 * idx)
          };
          return <Rank key={user.id} user={user} position={position}/>
        })
      }
    </>
  );
}

export default Leaderboard;
