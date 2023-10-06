import React, { useState } from 'react';
import Listado from "./components/Listado/Listado";
import Formulario from "./components/Formulario/Formulario";
import Alert from "./components/Alert/Alert";
import Buscador from "./components/Buscador/Buscador";
import { BaseColaboradores } from "./BaseColaboradores";

const App = () => {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [alerta, setAlerta] = useState(null);

  const agregarColaborador = (nuevoColaborador) => {
    setColaboradores([...colaboradores, nuevoColaborador]);
    setAlerta({ mensaje: 'Colaborador agregado exitosamente', tipo: 'success' });
  };

  const eliminarColaborador = (index) => {
    const nuevosColaboradores = colaboradores.filter((_, i) => i !== index);
    setColaboradores(nuevosColaboradores);
    setAlerta({ mensaje: 'Colaborador eliminado exitosamente', tipo: 'success' });
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h1 className="text-center mt-5">Lista de Colaboradores</h1>
            <Formulario agregarColaborador={agregarColaborador} setAlerta={setAlerta} />
            <Buscador colaboradores={colaboradores} setColaboradores={setColaboradores} />
            <table className="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Correo</th>
                  <th>Edad</th>
                  <th>Cargo</th>
                  <th>Telefono</th>
                  <th>Acciones</th> {}
                </tr>
              </thead>
              <tbody>
                {colaboradores.map((colaborador, index) => (
                  <Listado
                    key={index}
                    colaborador={colaborador}
                    eliminarColaborador={() => eliminarColaborador(index)} 
                  />
                ))}
              </tbody>
            </table>
            <Alert alerta={alerta} />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
