import React, { useState } from 'react';
import Listado from "./components/Listado/Listado";
import Formulario from "./components/Formulario/Formulario";
import { BaseColaboradores } from "./BaseColaboradores";

const App = () => {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);

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
              <Listado
                key={index}
                colaborador={colaborador}
              />
            ))}
          </tbody>
        </table>
        <Formulario setColaboradores={setColaboradores} colaboradores={colaboradores} />
      </div>
    </>
  );
};

export default App;
