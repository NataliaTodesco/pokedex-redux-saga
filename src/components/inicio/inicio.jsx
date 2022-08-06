import React from 'react'
import './inicio.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { obtenerPokemonsAction } from '../../redux/ducks/pokemonsDucks'
import charmander from '../../img/charmander.png'
import squirtle from '../../img/squirtle.png'

function Inicio({obtenerPokemonsAction}) {
    return (  
        <div className='inicio'>
            <h1>Pokédex</h1>
            <h5>Consulta información sobre tus pokémons favoritos!</h5>
            <Link to='/lista' onClick={e => {obtenerPokemonsAction()}}>
                <div className="pokebola mt-5 ml-5">
                    <div className="rojo"></div>
                    <div className="blanco"></div>
                    <div className="circulo"></div>
                </div>
            </Link>
            <img src={charmander} alt="" className="img-fluid img2" />
            <img src={squirtle} alt="" className="img-fluid img1" />
        </div>
    );
}

function mapStateToProps(state) {
    return {
        chars: state
    }
}

export default connect(mapStateToProps, {obtenerPokemonsAction})(Inicio)