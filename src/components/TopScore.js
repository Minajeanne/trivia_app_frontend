import React from 'react';

const TopScore = (props) => {

  return (
    <div
        as="h2"
        style={{ fontFamily: "Shadows Into Light, cursive", color: "green", fontSize: "30px" }}
        >
        Your Top Score
          {
            props.userPr ?
            <div className="main-number" style={{color: "black", fontSize: "30px"}}>
                {props.userPr}
            </div>
          :
            <div style={{color: "black", fontSize: "30px"}}>
                You've yet to answer any questions correctly!
            </div>
          }
      </div>
    )
  }

export default TopScore;
