import Listado from "./components/Listado/Listado"
import {BaseColaboradores} from "./BaseColaboradores"
import { useState } from "react"




const App = () => {
  const [colaborador,setColaborador] = useState(BaseColaboradores)


  return (
    <>
  
    {colaborador.map(colaborador =>(
         <Listado
         colaborador ={colaborador}
         />
      ))}

    </>
  )
}

export default App