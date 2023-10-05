import { useState } from "react"

const Formulario = () => {
  const [nombre,setNombre] = useState("")
  const [email,setEmail] = useState("")
  const [edad,setEdad] = useState("")
  const [cargo,setCargo] = useState("")
  const [telefono,setTelefono] = useState("")

  const validarDatos = (e) => {
    e.preventDefault()
  }



  return (
    <>
    <form 
    className="d-flex flex-column gap-2"
    onSubmit={validarDatos}>
       
        <div className="form-group">
            <input 
            type="text"
            name="nombre" 
            placeholder="Nombre completo"
            className="form-control shadow"
            onChange={(e) => setNombre(e.target.value)} 
            value={nombre}
            />
        </div>
        <div className="form-group">
            <input 
            type="email"
            name="email" 
            placeholder="correo@correo.com"
            className="form-control shadow"
            onChange={(e) => setEmail(e.target.value)}  
            value={email}
            />
        </div>
        <div className="form-group">
            <input 
            type="number"
            name="edad" 
            placeholder="Edad"
            className="form-control shadow" 
            onChange={(e) => setEdad(e.target.value)} 
            value={edad}
            />
        </div>
        <div className="form-group">
            <input 
            type="text"
            name="cargo" 
            placeholder="cargo"
            className="form-control shadow" 
            onChange={(e) => setCargo(e.target.value)} 
            value={cargo}
            />
        </div>
        <div className="form-group">
            <input 
            type="number"
            name="telefono" 
            placeholder="+56 9 ########"
            className="form-control shadow" 
            onChange={(e) => setTelefono(e.target.value)} 
            value={telefono}
            />
        </div>
        
       
        
        

        <button type="submit" className="btn-btn-success mt-3 rounded"> Agregar</button>


   
    </form>

    

    </>
  )
}

export default Formulario