import React from 'react'
import { CssBaseline, Grid } from '@mui/material'
import Search from '../components/SafarMap/Header/Search'
import List from '../components/SafarMap/List/List'
import Map from '../components/SafarMap/Maps/Map'

const MapsContainer = () => {
  return (
    <div className='h-screen dark:bg-slate-800 dark:text-white w-full'>
        <CssBaseline/>
        <div>
          <Search />
        </div>
       
        <Grid container spacing={3} style={{width:'100%'}}>
          <Grid item xs={12} md={4}>
          <List />
          </Grid>
          <Grid item xs={12} md={8}>
          <Map />
          </Grid>
        </Grid>
    </div>
  )
}

export default MapsContainer