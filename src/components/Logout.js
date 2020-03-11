import React from 'react';
import { connect } from 'react-redux';
import { logout } from "../actions/currentUser.js";
import { withRouter } from 'react-router-dom';
import { Button } from 'semantic-ui-react';


const Logout = ({ logout, history }) => {

  return (
    <Button
      circular icon="sign-out"
      style={{ fontFamily: "Shadows Into Light, cursive", color: "red"}}
      content="Log Out"
        onClick={(e) => {e.preventDefault()
          logout()
          history.push('/')
        }
      }>
    </Button>
  )
}

export default withRouter(connect(null, { logout } )(Logout));
