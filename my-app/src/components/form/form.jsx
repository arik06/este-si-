


import React from 'react';
import './form.css';



class Form extends React.Component {
    constructor(props) {
      super(props);
  
      // Inicializa el estado del componente con los campos del formulario
      this.state = {
        nombre: '',
        apellido: '',
        horario: ''
      };
    }
  
    // Maneja el evento de cambio del campo de nombre
    handleNombreChange = event => {
      this.setState({ nombre: event.target.value });
    };
  
    // Maneja el evento de cambio del campo de apellido
    handleApellidoChange = event => {
      this.setState({ apellido: event.target.value });
    };
  
    // Maneja el evento de cambio del campo de horario
    handleHorarioChange = event => {
      this.setState({ horario: event.target.value });
    };
  
    // Maneja el evento de envío del formulario
    handleSubmit = event => {
      event.preventDefault();
      // Procesa la información del formulario aquí
    };
  
    render() {
      return (
        <>
          <h1>Reservaciones</h1>
          <form onSubmit={this.handleSubmit}>
            <label>
              Nombre:
              <input
                type="text"
                value={this.state.nombre}
                onChange={this.handleNombreChange}
              />
            </label>
            <br />
            <label>
              Apellido:
              <input
                type="text"
                value={this.state.apellido}
                onChange={this.handleApellidoChange}
              />
            </label>
            <br />
            <label>
              Horario:
              <input
                type="text"
                value={this.state.horario}
                onChange={this.handleHorarioChange}
              />
            </label>
            <br />
            <input type="submit" value="Enviar" />
          </form>
        </>
      );
    }
  }
  
export default Form