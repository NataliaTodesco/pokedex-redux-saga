import React, { useEffect, useState } from "react";
import Tarjeta from "../tarjeta/tarjeta";
import { connect } from "react-redux";
import { Link } from 'react-router-dom'

function Lista({ array, loanding }) {
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    setPersonajes(array);
  }, [array]);

  return (
    <div>
      <Link className="btn btn-danger pr-4 mt-3" to='/'>
        <img alt="" style={{background: 'none'}} src="https://img.icons8.com/ios-glyphs/20/FFFFFF/back.png"/>{ ' ' }
        Volver
      </Link>
      {loanding ? (
        <p>Cargando...</p>
      ) : (
        <div className="row">
          {personajes.map((personaje, index) => {
            return (
              <div key={index} className="col-lg-4 col-md-6">
                <Tarjeta element={personaje}></Tarjeta>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state, ownProps) => (
  {
    array: state.array,
    loanding: state.fetching,
  }
);

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Lista);
