import React from 'react';
import { connect } from 'react-redux';
import { updateLoginForm } from '../actions/loginForm.js';
import { login } from '../actions/currentUser.js';
import { Link } from 'react-router-dom';
import { Form, Divider, Segment, Grid, Icon, Button } from 'semantic-ui-react';
import Signup from './Signup.js';
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
             value={loginFormData.username}
             onChange={handleInputChange}
          />
          <Form.Input
            required
            icon="lock"
            iconPosition="left"
            label="Password"
             placeholder="password"
             value={loginFormData.password}
             onChange={handleInputChange}
          />
          <Button content="Log In" value="Log In" primary/>
        </Form>
      </Grid.Column>

      <Grid.Column verticalAlign='middle'>
        <Link to="/signup">
          <Button icon='signup' size='big'>
            Sign Up
          </Button>
        </Link>
      </Grid.Column>
    </Grid>

    <Divider vertical>Or</Divider>
  </Segment>

      // <Grid.Column>
      //   <Form.Input
      //     required
      //     fluid
      //     placeholder="password"
      //     value={loginFormData.password}
      //     name="password"
      //     type="password"
      //     onChange={handleInputChange}
      //     />
  )
}

const mapStateToProps = state => {
  return {
    loginFormData: state.loginForm
  }
}


export default connect(mapStateToProps, { updateLoginForm, login })(Login);
