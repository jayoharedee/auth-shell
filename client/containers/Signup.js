/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dialog, {
  DialogActions, DialogContent, DialogContentText, DialogTitle,
} from 'material-ui/Dialog';
import { create } from './api-user.js';
import AuthForm from './../components/AuthForm';

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      password: '',
      email: '',
      open: false,
      error: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.clickSubmit = this.clickSubmit.bind(this);
  }

  handleChange = name => (event) => {
    this.setState({ [name]: event.target.value });
  }

  clickSubmit = () => {
    const user = {
      name: this.state.name || undefined,
      email: this.state.email || undefined,
      password: this.state.password || undefined,
    };

    create(user).then((data) => {
      if (data.error) {
        this.setState({ error: data.error });
      } else {
        this.setState({ error: '', open: true });
      }
    });
  }

  render() {
    const { classes } = this.props;
    const {
      email,
      password,
      name,
      open,
      error,
    } = this.state;
    return (
      <div>
        <AuthForm
          email={email}
          password={password}
          name={name}
          open={open}
          error={error}
          classes={classes}
          handleChange={this.handleChange}
          clickSubmit={this.clickSubmit} />
      </div>
    );
  }
}

Signup.propTypes = {
  classes: PropTypes.any,
};

export default Signup;
