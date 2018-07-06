/* eslint-disable */
import React from 'react';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import seashellImg from '../assets/images/seashell.jpg';

const styles = (theme) => ({
  card: {
    maxWidth: 600,
    margin: 'auto',
    marginTop: theme.spacing.unit * 5,
  },
  title: {
    padding: `${theme.spacing.unit * 3}px ${theme.spacing.unit * 2.5}px ${theme.spacing.unit * 2}px`,
    color: theme.palette.text.secondary,
  },
  media: {
    minHeight: 330,
  },
});

const PictureCard = ({ classes, title, description }) => (
  <Card className={classes.card}>
    <Typography type="headline" component="h2" className={classes.title}>
      {title}
    </Typography>
    <CardMedia className={classes.media} image={seashellImg} title="Unicorn Shells" />
    <CardContent>
      <Typography type="body1" component="p">
        {description}
      </Typography>
    </CardContent>
  </Card>
);

export default withStyles(styles)(PictureCard);
