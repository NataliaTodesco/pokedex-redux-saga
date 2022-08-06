// Constantes
let initialData = {
  fetching: false,
  array: [],
  current: {},
};
export const GET_POKEMONS = "GET_POKEMONS";
export const GET_POKEMONS_SUCCESS = "GET_POKEMONS_SUCCESS";
export const GET_POKEMONS_ERROR = "GET_POKEMONS_ERROR";
export const GET_DETAILS = "GET_DETAILS";
export const GET_DETAILS_SUCCESS = "GET_DETAILS_SUCCESS";
export const GET_DETAILS_ERROR = "GET_DETAILS_ERROR";

// Reducers
export const reducePokemons = (state = initialData, action) => {
  switch (action.type) {
    case GET_POKEMONS:
      return { ...state, fetching: true };
    case GET_POKEMONS_SUCCESS:
      return { ...state, array: action.payload, fetching: false };
    case GET_POKEMONS_ERROR:
      return { ...state, error: action.payload, fetching: false };
    case GET_DETAILS:
      return { ...state, url: action.url, fetching: true };
    case GET_DETAILS_SUCCESS:
      return { ...state, current: action.payload, fetching: false };
    case GET_DETAILS_ERROR:
      return { ...state, error: action.payload, fetching: false };
    default:
      return state;
  }
};

// Actions
export const obtenerPokemonsAction = () => ({
  type: GET_POKEMONS
})

export const obtenerDetailsAction = (url) => ({
  type: GET_DETAILS,
  url
})