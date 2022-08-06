import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";

export function* obtenerPokemons(action) {
  try {
    const { data } = yield axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=15"
    );
    yield put({
      type: "GET_POKEMONS_SUCCESS",
      payload: data.results,
    });
  } catch (e) {
    yield put({
      type: "GET_POKEMONS_ERROR",
      payload: e.response.message,
    });
  }
}

export function* obtenerDetails(action) {
  try {
    const {data} = yield axios.get(action.url);
    yield put({
      type: "GET_DETAILS_SUCCESS",
      payload: data,
    });
  } catch (e) {
    yield put({
      type: "GET_DETAILS_ERROR",
      payload: e.response.message,
    });
  }
}

export default function* mySaga() {
  yield takeEvery("GET_POKEMONS", obtenerPokemons);
  yield takeEvery("GET_DETAILS", obtenerDetails);
}
