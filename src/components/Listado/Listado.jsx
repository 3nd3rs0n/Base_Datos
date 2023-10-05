const Listado = ({colaborador}) => {
  const {nombre,correo,edad,cargo,telefono} = colaborador
 
return (
  <>
   <tbody>
    <tr>
      <td>{nombre}</td>
     <td>{correo}</td>
     <td>{edad}</td>
     <td>{cargo}</td>
     <td>{telefono}</td>
    </tr>
 
  </tbody>
  </>
)
}

export default Listado