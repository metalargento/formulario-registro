import { useState } from 'react'
import './App.css'
/* import 'bootstrap/dist/css/bootstrap.min.css'; */
/* import Form Grid Form Row from 'reactstrap/forms'; */


const RegistroFormulario = () => {
  const [usuario, setUsuario] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    password: '',
    confirmarPassword: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUsuario({ ...usuario, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí podrías agregar lógica para manejar el envío del formulario
    console.log('Formulario enviado:', usuario);
  };

  return (
    <div className='contenedor'>
      <h1>Registro</h1>
      
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input type="text" name="nombre" value={usuario.nombre} onChange={handleChange} />
        </label>
        <br />
        <label>
          Apellido:
          <input type="text" name="apellido" value={usuario.apellido} onChange={handleChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={usuario.email} onChange={handleChange} />
        </label>
        <br />
        <label>
          Teléfono:
          <input type="tel" name="telefono" value={usuario.telefono} onChange={handleChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" value={usuario.password} onChange={handleChange} />
        </label>
        <br />
        <label>
          Confirmar Password:
          <input type="password" name="confirmarPassword" value={usuario.confirmarPassword} onChange={handleChange} />
        </label>
        <br />
        <button type="submit" className='estiloBoton'>Registrarse</button>
        <button type="reset">Resetear Formulario</button>
      </form>
    </div>
  );
};

export default RegistroFormulario;

