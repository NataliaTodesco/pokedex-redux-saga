import { reducePokemons } from './ducks/pokemonsDucks'
import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import mySaga from './sagas/mySaga'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware()

export function storeGenerator(){
    const store = createStore(reducePokemons, composeEnhancers(applyMiddleware(sagaMiddleware)))
    sagaMiddleware.run(mySaga)

    return store
}

export default storeGenerator