import React from 'react';
import { Link } from 'react-router-dom'

const Home = () => (
  <div>
    <h2 style={{ fontFamily: 'OCR A Std, monospace', color: "black", fontSize: '35px'}}>TRIVIA APP</h2>
      <h4 style={{ fontFamily: 'OCR A Std, monospace', color: "black", fontSize: '15px'}}>Let's play!</h4>
        <span>
          <Link to="/login">Log In</Link> or <Link to="/signup">Sign Up</Link>
        </span>
  </div>
);

export default Home;
