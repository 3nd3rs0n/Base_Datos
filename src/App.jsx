import React, { useState } from 'react';
import Listado from "./components/Listado/Listado";
import Formulario from "./components/Formulario/Formulario";
import Alert from "./components/Alert/Alert";
import { BaseColaboradores } from "./BaseColaboradores";

const App = () => {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [alerta, setAlerta] = useState(null);

  const agregarColaborador = (nuevoColaborador) => {
    setColaboradores([...colaboradores, nuevoColaborador]);
    setAlerta({ mensaje: 'Colaborador agregado exitosamente', tipo: 'success' });
  };

  return (
    <>
      <div className="d-flex gap-5 mx-5 my-5">
        <table className="table table-bordered table-sm table-striped">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Edad</th>
              <th>Cargo</th>
              <th>Telefono</th>
            </tr>
          </thead>
          <tbody>
            {colaboradores.map((colaborador, index) => (
              <Listado key={index} colaborador={colaborador} />
            ))}
          </tbody>
        </table>
        <Formulario agregarColaborador={agregarColaborador} setAlerta={setAlerta} />
        <Alert alerta={alerta} />
      </div>
    </>
  );
};

export default App;
