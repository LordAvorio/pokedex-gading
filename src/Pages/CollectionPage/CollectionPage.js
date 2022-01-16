import React from "react";

import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";
import Card from "@mui/material/Card";

import "./CollectionPage.css";

function CollectionPage(props) {

    console.log(props.dataMyPokemon)

  return (
    <>
      <div style={{ marginTop: "20%", padding: "0 5%"  }}>
        <Grid container spacing={2}>
          {props.dataMyPokemon ? (
            props.dataMyPokemon.map((item, index) => {
              return (
                <Grid item xs={6} key={index}>
                  <Card className="pokeCardLayout">
                     <Grid container>
                         <Grid item xs={12} className="insideLayoutCard">
                            <p className="pokeNameTitle">{item.NickPokemon}</p>
                         </Grid>
                         <Grid item xs={12} className="insideLayoutCard">
                            <img src={props.dataMyPokemon ? item.PokemonURL : ""} className='imagePokemon'/>
                         </Grid>
                         <Grid item xs={12} className="insideLayoutCard">
                            <p className="pokeTypeTitle">{item.TypePokemon}</p>
                         </Grid>
                         <Grid item xs={12} className="insideLayoutCard">
                            <button className="buttonTheme" onClick={() => props.releasePokemon(item.NickPokemon)}>Release</button>
                         </Grid>
                     </Grid> 
                  </Card>
                </Grid>
              );
            })
          ) : (
            <>
              <Grid item xs={6}>
                <Skeleton variant="rectangular" height={110} />
              </Grid>
              <Grid item xs={6}>
                <Skeleton variant="rectangular" height={110} />
              </Grid>
              <Grid item xs={6}>
                <Skeleton variant="rectangular" height={110} />
              </Grid>
              <Grid item xs={6}>
                <Skeleton variant="rectangular" height={110} />
              </Grid>
            </>
          )}
        </Grid>
      </div>
    </>
  );
}

export default CollectionPage;
