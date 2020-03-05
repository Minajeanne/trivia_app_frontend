import React from 'react';
import { connect } from 'react-redux';
import { updateSignupForm } from '../actions/signupForm.js';
import { signup } from '../actions/currentUser.js';
import { Form, Grid, Segment, Icon, Button } from 'semantic-ui-react';


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
    <Segment placeholder>
      <Grid columns={2} relaxed="very" stackable>
        <Grid.Column>
          <Form onSubmit={handleSubmit}>
            <Form.Input
            required
            icon="user"
            iconPosition="left"
            label="Username"
             placeholder="username"
             value={signupFormData.username}
             name="username"
             onChange={handleUserInfoInputChange}
            />
          <Form.Input
            requried
            icon="lock"
            iconPosition="left"
            label="Password"
            placeholder="password"
            value={signupFormData.password}
            name="password"
            type="password"
            onChange={handleUserInfoInputChange}
            />
            <Button content="Sign Up" value="Sign Up"/>
          </Form>
        </Grid.Column>
      </Grid>
  </Segment>
  )
}

const mapStateToProps = state => {
  return {
    signupFormData: state.signupForm
  }
}

export default connect(mapStateToProps, { updateSignupForm, signup })(Signup);
// error={{
//   content: 'Please enter a valid password',
//   pointing: 'below',
// }}
