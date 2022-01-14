import React from 'react'

import Grid from '@mui/material/Grid';

import './header.css'


function Header() {
    return (
        <>
          <div className="headerLayout">
            <Grid container>
                <Grid item xs ={12}>
                    <p className="titleHeader">Pokedex</p>
                </Grid>
            </Grid>
          </div>  
        </>
    )
}

export default Header
