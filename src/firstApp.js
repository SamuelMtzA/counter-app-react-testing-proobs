//creando componente, functional component
import React from "react";
//exige escribir la propiedad del componente
import PropTypes from "prop-types";

const FirstApp = ({ saludo, subtitulo }) => {
  return (
    //forma de hacer un fragment
    //imprimir objetos con react usando pre
    <>
      <p>{ saludo }</p>
      <h1>{subtitulo}</h1>
      {/* <pre> {JSON.stringify(saludo, null,2)} </pre> */}
    </>
  );
};

FirstApp.propTypes = {
  value: PropTypes.string.isRequired,
};

FirstApp.defaultProps = {
  value: 'soy un subtitulo'
}

export default FirstApp;
