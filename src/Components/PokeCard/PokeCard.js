import React from 'react'

import Card from '@mui/material/Card';
import Grid from "@mui/material/Grid";

import './PokeCard.css'

function PokeCard(props) {

    return (
        <>
            <Card className="pokeCardLayout">
                <Grid container>
                    <Grid item xs={12} className="insideLayoutCard">
                        <p className="pokeNameTitle">{props.item.name}</p>
                    </Grid>
                    <Grid item xs={12} className="insideLayoutCard">
                        <img src={props.item.detailpokemon ? props.item.detailpokemon.sprites.other.dream_world.front_default : ""} className='imagePokemon'/>
                    </Grid>
                </Grid>
            </Card>
        </>
    )
}

export default PokeCard
