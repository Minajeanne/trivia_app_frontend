import React from 'react';
import { connect } from 'react-redux';
import { updateLoginForm } from '../actions/loginForm.js';
import { login } from '../actions/currentUser.js';
import { Link } from 'react-router-dom';
import { Form, Divider, Segment, Grid, Icon, Button } from 'semantic-ui-react';
import Signup from './Signup.js';

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
          <Form
            onSubmit={handleSubmit}
            basic color="green"
            style={{ fontFamily: "Shadows Into Light, cursive", fontSize: "25px" }}
            >
            <Form.Input
              icon="user"
              iconPosition="left"
              label="Username"
              name="username"
               value={loginFormData.username}
               onChange={handleInputChange}
          />
          <Form.Input
            icon="lock"
            iconPosition="left"
            label="Password"
            name="password"
            type="password"
             value={loginFormData.password}
             onChange={handleInputChange}
          />
          <Button
            basic color="green"
            style={{ fontFamily: "Shadows Into Light, cursive", fontSize: "25px" }}
            content="Log In"
            value="Log In"
            >
              Log In
            </Button>
        </Form>
      </Grid.Column>

      <Grid.Column verticalAlign='middle'>
        <Link to="/signup">
          <Button
            icon='signup'
            size='big'
            basic color="green"
            style={{ fontFamily: "Shadows Into Light, cursive", fontSize: "25px" }}
            >
              Sign Up
          </Button>
        </Link>
      </Grid.Column>
    </Grid>

    <Divider vertical>Or</Divider>
  </Segment>
  )
}

const mapStateToProps = state => {
  return {
    loginFormData: state.loginForm
  }
}


export default connect(mapStateToProps, { updateLoginForm, login })(Login);
