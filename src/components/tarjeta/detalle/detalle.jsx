import React from "react";
import { connect } from "react-redux";
import "./detalle.css";
import { Link } from 'react-router-dom'


function Detalle({ detalle, loanding }) {
  return (
    <div className="detalle">
      <Link className="btn btn-danger pr-4 mt-3" to='/lista'>
        <img alt="" style={{background: 'none'}} src="https://img.icons8.com/ios-glyphs/20/FFFFFF/back.png"/>{ ' ' }
        Volver
      </Link>
      {loanding ? (
        <h3>Cargando...</h3>
      ) : (
        <div className="card mt-4 py-5">
          <div className="row">
            <div className="col-12 text-center mb-3">
              <img
                className="img-fluid"
                src={detalle.sprites.front_default}
                alt=""
              />
            </div>
          </div>
          <h1 className="mb-3">{detalle.name}</h1>
          <h4>Altura: {(detalle.height * 0.1).toFixed(1)} m</h4>
          <h4>Peso: {(detalle.weight * 0.1).toFixed(1)} kg</h4>
          <div className="card mt-3">
            <h4>Habilidades: </h4>
            {detalle.abilities.map((a, index) => {
              return <li key={index}>{a.ability.name}</li>;
            })}
          </div>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  detalle: state.current,
  loanding: state.fetching,
});

export default connect(mapStateToProps, {})(Detalle);
