import Listado from "./components/Listado/Listado"
import {BaseColaboradores} from "./BaseColaboradores"
import { useState } from "react"
import Formulario from "./components/Formulario/Formulario"


const App = () => {
  const [colaborador,setColaborador] = useState(BaseColaboradores)
  


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
      
       {colaborador.map(colaborador => (
        <Listado 
        colaborador = {colaborador}
        />

      ))}
    </table>
    <Formulario/>

    </div>
    
    

    </>
  )
}

export default App