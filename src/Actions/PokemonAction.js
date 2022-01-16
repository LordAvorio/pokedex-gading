import Axios from "axios";

export const getDataPokemon = () => {
  return async (dispatch) => {
    try {
      let response = await Axios.get(
        "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20"
      );

      let pokemonDataDefault = response.data;
      let pokemonData = response.data.results;

      //GET GENERAL DATA
      let pokemonDataGeneral = {
        count: pokemonDataDefault.count,
        next: pokemonDataDefault.next,
        previous: pokemonDataDefault.previous,
      };

      //GET DETAIL DATA
      for (let x = 0; x < pokemonData.length; x++) {
        let responseDetail = await Axios.get(pokemonData[x].url);
        pokemonData[x]["detailpokemon"] = responseDetail.data;
      }

      dispatch({
        type: "GET_DATA_POKEMON",
        payload: pokemonData,
      });

      dispatch({
        type: "GET_GENERAL_DATA_POKEMON",
        payload: pokemonDataGeneral,
      });
    } catch (err) {
      console.error(err);
    }
  };
};

export const paginationDataPokemon = (url) => {
  return async (dispatch) => {
    try {
      let response = await Axios.get(
        url
      );

      let pokemonDataDefault = response.data;
      let pokemonData = response.data.results;

      //GET GENERAL DATA
      let pokemonDataGeneral = {
        count: pokemonDataDefault.count,
        next: pokemonDataDefault.next,
        previous: pokemonDataDefault.previous,
      };

      //GET DETAIL DATA
      for (let x = 0; x < pokemonData.length; x++) {
        let responseDetail = await Axios.get(pokemonData[x].url);
        pokemonData[x]["detailpokemon"] = responseDetail.data;
      }

      dispatch({
        type: "GET_DATA_POKEMON",
        payload: pokemonData,
      });

      dispatch({
        type: "GET_GENERAL_DATA_POKEMON",
        payload: pokemonDataGeneral,
      });
    } catch (err) {
      console.error(err);
    }
  };
};
