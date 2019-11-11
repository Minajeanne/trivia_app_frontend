import React from 'react';
import { connect } from 'react-redux';
import { logout } from "../actions/currentUser.js";
import { withRouter } from 'react-router-dom';
import { Form } from 'semantic-ui-react';


const Logout = ({ logout, history }) => {

  return (
    <Form onSubmit={(event) => {
        event.preventDefault()
        logout()
        history.push('/')
      }
    }>
      <Form.Button content="Log Out" value="Log Out"/>
    </Form>
  )
}

export default withRouter(connect(null, { logout } )(Logout));

// const Logout = ({ logout, history }) => {
//   return (
//     <form onSubmit={(event) => {
//         event.preventDefault()
//         logout()
//         history.push('/')
//       }
//     }>
//       <input type="submit" value="Log Out"/>
//     </form>
//   )
// }
