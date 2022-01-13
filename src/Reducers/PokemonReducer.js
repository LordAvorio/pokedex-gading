let INITIAL_STATE = {
  dataPokemon: [],
  generalDataPokemon: [],
};

const pokemonReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_DATA_POKEMON":
      return {
        ...state,
        dataPokemon: action.payload,
      };
    case "GET_GENERAL_DATA_POKEMON":
      return {
        ...state,
        generalDataPokemon: action.payload,
      };
    default:
      return state;
  }
};

export default pokemonReducer;
