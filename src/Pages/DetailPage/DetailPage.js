import React from "react";

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Modal from "@mui/material/Modal";
import TextField from '@mui/material/TextField';
import LinearProgress from "@mui/material/LinearProgress";

import "./DetailPage.css";

function DetailPage(props) {
  return (
    <>
      <div style={{ margin: "20% 4%" }}>
        <Grid container>
          <Grid item xs={12}>
            <Card className="pokemonMainLayout">
              <Grid container>
                <Grid item xs={6}>
                  <p className="pokemonName">{props.dataPokemon.name}</p>
                </Grid>
                <Grid item xs={6}></Grid>
                <Grid item xs={5}>
                  <p className="titleStatus">Hp</p>
                  <LinearProgress
                    variant="determinate"
                    value={props.dataPokemon.stats[0].base_stat}
                  />
                  <p className="titleStatus">Attack</p>
                  <LinearProgress
                    variant="determinate"
                    value={props.dataPokemon.stats[1].base_stat}
                  />
                  <p className="titleStatus">Defense</p>
                  <LinearProgress
                    variant="determinate"
                    value={props.dataPokemon.stats[2].base_stat}
                  />
                  <p className="titleStatus">Speed</p>
                  <LinearProgress
                    variant="determinate"
                    value={props.dataPokemon.stats[5].base_stat}
                  />
                </Grid>
                <Grid item xs={7}>
                  <img
                    src={
                      props.dataPokemon.sprites.other.dream_world.front_default
                    }
                    className="imagePokemon"
                  />
                </Grid>
                <Grid item xs={12}>
                  <button
                    className="buttonCatch"
                    onClick={() => props.catchingPokemon()}
                  >
                    Catch Pokemon
                  </button>
                </Grid>
              </Grid>
            </Card>
            <Card className="pokemonMainLayout">
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <p className="moveTitle">Moves</p>
                </Grid>
                {Array.from(props.dataPokemon.moves).map((item, index) => {
                  return (
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
                  );
                })}
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </div>

      <Modal open={props.openModalFailed}>
        <Card className="modalLayout">
          <Grid container>
            <Grid item xs={12}>
              <p className="pokemonName">Pokemon Ran Away....</p>
            </Grid>
            <Grid item xs={12}>
              <button className="buttonCatch" onClick={() => props.closeModalFailed()}>Close</button>
            </Grid>
          </Grid>
        </Card>
      </Modal>

      <Modal open={props.openModalSameNick}>
        <Card className="modalLayout">
          <Grid container>
            <Grid item xs={12}>
              <p className="pokemonName">You Have Same Nickname in same Pokemon</p>
            </Grid>
            <Grid item xs={12}>
              <button className="buttonCatch" onClick={() => props.closeModalSameNick()}>Close</button>
            </Grid>
          </Grid>
        </Card>
      </Modal>

      <Modal open={props.openModalInput}>
        <Card className="modalLayout">
          <Grid container>
            <Grid item xs={12}>
              <p className="pokemonName">Input Pokemon Name</p>
            </Grid>
            <Grid item xs={12}>
                <TextField className="inputNick" id="standard-basic" label="Nickname" variant="standard" value={props.pokemonNick} onChange={(e) => props.setPokemonNick(e.target.value) } />
            </Grid>
            <Grid item xs={12}>
              {
                  props.pokemonNick ?
                  <button className="buttonCatch" onClick={() => props.storePokemon()}>Add Pokemon</button>
                  :
                  <button className="buttonCatch" disabled onClick={() => props.storePokemon()}>Add Pokemon</button>
              }  
            </Grid>
          </Grid>
        </Card>
      </Modal>          

    </>
  );
}

export default DetailPage;
