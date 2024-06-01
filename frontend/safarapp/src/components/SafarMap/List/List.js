import React, { useState, useEffect, createRef } from 'react';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core'
import useStyles from './styles.js';
const List = () => {
  const classes = useStyles();
  const [type, setType] =useState('restaurants');
  const [rating, setRating] =useState('');
  return (
    <div className={classes.container}>
      <Typography >Halal Food near by you</Typography>
      <FormControl className={classes.formControl}>
            <InputLabel id="type">Type</InputLabel>
            <Select value={type} onChange={(e)=> setType(e.target.value)}>
              <MenuItem value="restaurants">Restaurants</MenuItem>
              <MenuItem value="masjids">Masjids</MenuItem>
            </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
            <InputLabel id="rating">Rating</InputLabel>
            <Select value={rating} onChange={(e)=> setRating(e.target.value)}>
              <MenuItem value="0">All</MenuItem>
              <MenuItem value="3">Above 3.0</MenuItem>
              <MenuItem value="4">Above 4.0</MenuItem>
              <MenuItem value="4.5">Above 4.5</MenuItem>
            </Select>
      </FormControl>
    </div>
  )
}

export default List