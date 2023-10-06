import React from "react";

const Listado = ({ colaborador }) => {
  const { nombre, correo, edad, cargo, telefono } = colaborador;

  return (
    <tr>
      <td>{nombre}</td>
      <td>{correo}</td>
      <td>{edad}</td>
      <td>{cargo}</td>
      <td>{telefono}</td>
    </tr>
  );
};

export default Listado;
