import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';

import DetailPage from "./DetailPage";

function DetailLogic() {
  const [openModalInput, setOpenModalInput] = useState(false);
  const [openModalFailed, setOpenModalFailed] = useState(false);
  const [openModalSameNick, setOpenModalNick] = useState(false);
  const [pokemonNick, setPokemonNick] = useState("");

  const location = useLocation();

  const catchingPokemon = () => {
    let randomNumber = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    if (randomNumber > 50) {
      setOpenModalInput(true);
    } else {
      setOpenModalFailed(true);
    }
  };

  const closeModalFailed = () => {
    setOpenModalFailed(false);
  };

  const closeModalSameNick = () => {
    setOpenModalNick(false);
    setOpenModalInput(false);
    setPokemonNick("");
  }

  const storePokemon = () => {
    let checkCookie = read_cookie('store_pokemon')  
    let arrayPokemon = []  
    let storePokemon = {}
    let checkSame = false

    for(let x = 0; x < checkCookie.length; x++){
      if(checkCookie[x].TypePokemon === location.state.dataPokemon.name && checkCookie[x].NickPokemon === pokemonNick){
        checkSame = true
      }
    }

    if(checkSame === true){
      setOpenModalNick(true)
      setOpenModalInput(false);
      setPokemonNick("");
    }else{
      storePokemon["TypePokemon"] = location.state.dataPokemon.name;
      storePokemon["NickPokemon"] = pokemonNick;
      storePokemon["PokemonURL"] = location.state.dataPokemon.sprites.other.dream_world.front_default;
      arrayPokemon.push(storePokemon)
  
      if(checkCookie){
          checkCookie.push(storePokemon)
          bake_cookie("store_pokemon", checkCookie)
      }else{
          bake_cookie("store_pokemon", arrayPokemon)       
      }
    }


    setOpenModalInput(false);
    setPokemonNick("");
  };

  return (
    <>
      <DetailPage
        dataPokemon={location.state.dataPokemon}
        catchingPokemon={catchingPokemon}
        openModalInput={openModalInput}
        openModalFailed={openModalFailed}
        closeModalFailed={closeModalFailed}
        storePokemon={storePokemon}
        pokemonNick={pokemonNick}
        setPokemonNick={setPokemonNick}
        openModalSameNick={openModalSameNick}
        closeModalSameNick={closeModalSameNick}
      />
    </>
  );
}

export default DetailLogic;
