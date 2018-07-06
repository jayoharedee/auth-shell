/* eslint-disable */
import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';
import Icon from 'material-ui/Icon';
import Dialog, {
  DialogActions, DialogContent, DialogContentText, DialogTitle,
} from 'material-ui/Dialog';
import { Link } from 'react-router-dom';

const styles = (theme) => ({
  card: {
    maxWidth: 600,
    margin: 'auto',
    textAlign: 'center',
    marginTop: theme.spacing.unit * 5,
    paddingBottom: theme.spacing.unit * 2,
  },
  error: {
    verticalAlign: 'middle',
  },
  title: {
    marginTop: theme.spacing.unit * 2,
    color: theme.palette.openTitle,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 300,
  },
  submit: {
    margin: 'auto',
    marginBottom: theme.spacing.unit * 2,
  },
});

const AuthForm = ({
  classes,
  signin,
  handleChange,
  clickSubmit,
  error,
  open,
  email,
  password,
}) => (
  <div>
    <Card className={classes.card}>
      <CardContent>
        <Typography type="headline" component="h2" className={classes.title}>
        { signin ? 'Sign In' : 'Sign Up'}
        </Typography>
        {
          signin
            ?
              ''
            : 
              <TextField 
                id="name"
                label="Name"
                className={classes.textField}
                value={name}
                onChange={handleChange('name')}
                margin="normal" />
        }
        <br />
        <TextField id="email" type="email" label="Email" className={classes.textField} value={email} onChange={handleChange('email')} margin="normal" />
        <br />
        <TextField id="password" type="password" label="Password" className={classes.textField} value={password} onChange={handleChange('password')} margin="normal" />
        <br />
        {' '}
        {
        error && (
        <Typography component="p" color="error">
          <Icon color="error" className={classes.error}>
  error
          </Icon>
          {error}
        </Typography>
        )
      }
      </CardContent>
      <CardActions>
        <Button color="primary" variant="raised" onClick={clickSubmit} className={classes.submit}>
  Submit
        </Button>
      </CardActions>
    </Card>
    <Dialog open={open} disableBackdropClick>
      <DialogTitle>
        New Account
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
        New account successfully created.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Link to="/signin">
          <Button color="primary" autoFocus="autoFocus" variant="raised">
          Sign In
          </Button>
        </Link>
      </DialogActions>
    </Dialog>
  </div>
);

export default withStyles(styles)(AuthForm);

