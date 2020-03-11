import React from 'react';

const Rank = (props) => {

  return (
    <div
        as="h2"
        textAlign="left"
        style={{ fontFamily: "Shadows Into Light, cursive", color: "purple", fontSize: "30px" }}
        block
        >
        Your Rank
          {
            props.userRank ?
            <div className="main-number" style={{color: "black", fontSize: "30px"}}>
                {props.userRank}
            </div>
          :
            <div style={{color: "black", fontSize: "30px"}}>
                Start playing to earn your rank!
            </div>
          }
      </div>
    )
  }

export default Rank;
