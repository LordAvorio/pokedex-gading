import React from 'react'

import Grid from "@mui/material/Grid";
import Card from '@mui/material/Card';
import LinearProgress from '@mui/material/LinearProgress';


import "./DetailPage.css"


function DetailPage(props) {

    return (
        <>
             <div style={{margin: "20% 4%"}}>
                <Grid container>
                    <Grid item xs={12}>
                        <Card className="pokemonMainLayout">
                            <Grid container>
                                <Grid item xs={6}>
                                    <p className="pokemonName">{props.dataPokemon.name}</p>
                                </Grid>
                                <Grid item xs={6}>

                                </Grid>
                                <Grid item xs={5}>
                                    <p className="titleStatus">Hp</p>
                                    <LinearProgress variant="determinate" value={props.dataPokemon.stats[0].base_stat} />
                                    <p className="titleStatus">Attack</p>
                                    <LinearProgress variant="determinate" value={props.dataPokemon.stats[1].base_stat} />
                                    <p className="titleStatus">Defense</p>
                                    <LinearProgress variant="determinate" value={props.dataPokemon.stats[2].base_stat} />
                                    <p className="titleStatus">Speed</p>
                                    <LinearProgress variant="determinate" value={props.dataPokemon.stats[5].base_stat} />
                                </Grid>
                                <Grid item xs={7}>
                                    <img src={props.dataPokemon.sprites.other.dream_world.front_default} className='imagePokemon'/>
                                </Grid>
                                <Grid item xs={12}>
                                    <button className='buttonCatch'>Catch Pokemon</button>
                                </Grid>
                            </Grid>
                        </Card>
                        <Card className="pokemonMainLayout">
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <p className='moveTitle'>Moves</p>
                                </Grid>
                                {
                                    Array.from(props.dataPokemon.moves).map((item, index) => {
                                        return(
                                            <Grid item xs={6} key={index}>
                                                <Card className="cardMove">
                                                    <Grid container>
                                                        <Grid item xs={12}>
                                                            <p className="moveElement">{item.elementmove}</p>
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <p className="elementName">{item.move.name}</p>
                                                        </Grid>
                                                    </Grid>
                                                </Card>
                                            </Grid>
                                        )
                                    })
                                }
                            </Grid>
                        </Card>
                    </Grid>
                </Grid>                
            </div>
        </>
    )
}

export default DetailPage
