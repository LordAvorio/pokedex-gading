import React from "react";

import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";
import PokeCard from "../../Components/PokeCard/PokeCard";

import "./HomePage.css";

export default function HomePage(props) {
  return (
    <>
      <div style={{ margin: "20% 0", padding: "0 5%" }}>
        <Grid container spacing={2}>
          {props.isLoading ? (
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
          ) : (
            props.dataPokemon.map((item, index) => {
              return (
                <Grid item xs={6} key={index} onClick={() => props.detailPokemonPage(item.detailpokemon)}>
                  <PokeCard item={item} />
                </Grid>
              );
            })
          )}
          {props.generalDataPokemon ? (
            <>
              <Grid item xs={6}>
                {props.generalDataPokemon.previous === null ||
                props.isLoading ? (
                  <button className="buttonTheme deactiveButton">
                    Previous
                  </button>
                ) : (
                  <button className="buttonTheme activeButton" onClick={() => props.previousPage(props.generalDataPokemon.previous)}>Previous</button>
                )}
              </Grid>
              <Grid item xs={6} className="rightButton">
                {props.generalDataPokemon.next === null || props.isLoading ? (
                  <button className="buttonTheme deactiveButton">Next</button>
                ) : (
                  <button className="buttonTheme activeButton" onClick={() => props.nextPage(props.generalDataPokemon.next)}>Next</button>
                )}
              </Grid>
            </>
          ) : (
              <>
                <Grid item xs={6}>
                    <Skeleton variant="rectangular" height={20} />
                </Grid>
                <Grid item xs={6}>
                    <Skeleton variant="rectangular" height={20} />
                </Grid>
              </>
          )}
        </Grid>
      </div>
    </>
  );
}
