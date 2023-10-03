

const Listado = ({colaborador}) => {
  const {nombre,correo,edad,cargo,telefono} = colaborador

  return (
    <>

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
      <tr>
       <td>{nombre}</td>
       <td>{correo}</td>
       <td>{edad}</td>
       <td>{cargo}</td>
       <td>{telefono}</td>
      </tr>
      
    
      

    </tbody>
    </table>
    



    </>
  )
}

export default Listado