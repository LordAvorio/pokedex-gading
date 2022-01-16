import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


import HomePage from "./HomePage";

import { getDataPokemon, paginationDataPokemon } from "../../Actions/PokemonAction";

export default function HomeLogic() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { dataPokemon, generalDataPokemon } = useSelector((state) => {
    return {
      dataPokemon: state.pokemonReducer.dataPokemon,
      generalDataPokemon: state.pokemonReducer.generalDataPokemon,
    };
  });

  const nextPage = (url) => {
    dispatch(paginationDataPokemon(url))
  };

  const previousPage = (url) => {
    dispatch(paginationDataPokemon(url))
  };

  const detailPokemonPage = (item) => {
      navigate('/detail',{state:{dataPokemon: item}});
  }

  React.useEffect(() => {
    const fetchData = async () => {
      await dispatch(getDataPokemon());
    };

    fetchData();
  }, []);

  return (
    <>
      {dataPokemon.length !== 0 || generalDataPokemon.length !== 0 ? (
        <HomePage
          dataPokemon={dataPokemon}
          generalDataPokemon={generalDataPokemon}
          isLoading={false}
          nextPage={nextPage}
          previousPage={previousPage}
          detailPokemonPage={detailPokemonPage}
        />
      ) : (
        <HomePage isLoading={true} />
      )}
    </>
  );
}
