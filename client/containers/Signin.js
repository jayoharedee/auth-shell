/* eslint-disable */
import React, { Component } from 'react';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';
import Icon from 'material-ui/Icon';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { Redirect } from 'react-router-dom';
import auth from '../api/auth-helper';
import { signin } from '../api/api-auth';
import AuthForm from '../components/AuthForm';

class Signin extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      error: '',
      redirectToReferrer: false,
    }

    this.handleChange = this.handleChange.bind(this)
    this.clickSubmit = this.clickSubmit.bind(this)
  }
  
  clickSubmit = () => {
    const user = {
      email: this.state.email || undefined,
      password: this.state.password || undefined,
    };

    signin(user).then((data) => {
      if (data.error) {
        this.setState({ error: data.error });
      } else {
        auth.authenticate(data, () => {
          this.setState({ redirectToReferrer: true });
        });
      }
    });
  }

  handleChange = name => (event) => {
    this.setState({ [name]: event.target.value });
  }

  render() {
    const { classes } = this.props;
    const {
      email,
      password,
      name,
      open,
      error,
      redirectToReferrer,
    } = this.state;

    const { from } = this.props.location.state || {
      from: {
        pathname: '/',
      },
    };

    if (redirectToReferrer) {
      return (<Redirect to={from} />);
    }

    return (
      <AuthForm
        signin={true}
        email={email}
        password={password}
        name={name}
        open={open}
        error={error}
        classes={classes}
        handleChange={this.handleChange}
        clickSubmit={this.clickSubmit} />
    );
  }
}

Signin.propTypes = {
  classes: PropTypes.any,
};

export default Signin;
