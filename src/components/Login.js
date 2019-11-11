import React from 'react';
import { connect } from 'react-redux';
import { updateLoginForm } from '../actions/loginForm.js';
import { login } from '../actions/currentUser.js';
import { Form } from 'semantic-ui-react';
// import PropTypes from 'prop-types'

const Login = ({ loginFormData, updateLoginForm, login, history }) => {

  const handleInputChange = event => {
    const {name, value} = event.target
      const updatedFormInfo = {
        ...loginFormData,
        [name]: value
      }
      updateLoginForm(updatedFormInfo)
  }

  const handleSubmit = event => {
    event.preventDefault();
    login(loginFormData, history)
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group widths="equal">
        <Form.Input
        fluid
         placeholder="username"
         value={loginFormData.username}
         name="username"
         onChange={handleInputChange}
        />
      <Form.Input
        fluid
        placeholder="password"
        value={loginFormData.password}
        name="password"
        type="password"
        onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Button content="Log In" value="Log In"/>
    </Form>
  )
}

const mapStateToProps = state => {
  return {
    loginFormData: state.loginForm
  }
}


export default connect(mapStateToProps, { updateLoginForm, login })(Login);
