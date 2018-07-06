/* eslint-disable */
import React from 'react'
import PropTypes from 'prop-types'
import PictureCard from './../components/PictureCard'

const title = `Here is a title!`
const description = `and how do you like that, a description!`

const Home = ({ classes }) => (
  <PictureCard 
    classes={classes}
    title={title}
    description={description} />
)

Home.propTypes = {
  classes: PropTypes.any,
};

export default Home;
