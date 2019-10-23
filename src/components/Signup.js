import React from 'react';
import { connect } from 'react-redux';
import { updateSignupForm } from '../actions/signupForm.js';
import { signup } from '../actions/currentUser.js';
import { Button, Form } from 'semantic-ui-react';


const Signup = ({ signupFormData, updateSignupForm, signup, history }) => {

  const handleUserInfoInputChange = event => {
    const { name, value } = event.target
      const updatedFormInfo = {
        ...signupFormData,
        [name]: value
      }
      updateSignupForm(updatedFormInfo)
  }

  const handleSubmit = event => {
    event.preventDefault();
    signup(signupFormData, history)
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group widths="equal">
        <Form.Input
        fluid
         placeholder="username"
         value={signupFormData.username}
         name="username"
         onChange={handleUserInfoInputChange}
        />
      <Form.Input
        fluid
        placeholder="password"
        value={signupFormData.password}
        name="password"
        onChange={handleUserInfoInputChange}
        />
      </Form.Group>
      <Form.Button content="Sign Up" value="Sign Up"/>
    </Form>
  )
}

const mapStateToProps = state => {
  return {
    signupFormData: state.signupForm
  }
}

export default connect(mapStateToProps, { updateSignupForm, signup })(Signup);
