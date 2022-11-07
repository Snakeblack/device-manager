import axios from "axios";
import { useState } from "react";

export function DevicesForm() {
  const [device, setDevice] = useState({
    nombre: "",
    marca: "",
    modelo: "",
    serial_number: "",
    sistema_operativo: "",
    cpu: "",
    ram: "",
    disco_duro: "",
    congelado: "",
    detalles: "",
    ubicacion_id: "",
    tipodispositivo_id: "",
    categoria_id: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios
      .post("/api/devices", device)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error.response.data);
      });
    console.log(res);
  };

  const handleChange = ({ target: { name, value } }) =>
    setDevice({ ...device, [name]: value });

  return (
    <div className="bg-gray-300">
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre del Dispositivo:</label>
        <input type="text" id="nombre" name="nombre" onChange={handleChange} />

        <label htmlFor="marca">Marca:</label>
        <input type="text" id="marca" name="marca" onChange={handleChange} />

        <label htmlFor="modelo">Modelo:</label>
        <input type="text" id="modelo" name="modelo" onChange={handleChange} />

        <label htmlFor="serial_number">Serial:</label>
        <input
          type="text"
          id="serial_number"
          name="serial_number"
          onChange={handleChange}
        />

        <label htmlFor="sistema_operativo">Sistema Operativo:</label>
        <input
          type="text"
          id="sistema_operativo"
          name="sistema_operativo"
          onChange={handleChange}
        />

        <label htmlFor="cpu">CPU:</label>
        <input type="text" id="cpu" name="cpu" onChange={handleChange} />

        <label htmlFor="ram">RAM:</label>
        <input type="text" id="ram" name="ram" onChange={handleChange} />

        <label htmlFor="disco_duro">Disco:</label>
        <input
          type="text"
          id="disco_duro"
          name="disco_duro"
          onChange={handleChange}
        />

        <label htmlFor="congelado">Congelado:</label>
        <select id="congelado" name="congelado">
          <option value="true">si</option>
          <option value="false">no</option>
        </select>

        <label htmlFor="detalles">Detalles:</label>
        <textarea
          id="detalles"
          name="detalles"
          rows="2"
          onChange={handleChange}
        />

        <label htmlFor="ubicacion_id">Ubicación:</label>
        <select id="ubicacion_id" name="ubicacion_id" onChange={handleChange}>
          <option value="1">Ubicación 1</option>
          <option value="2">Ubicación 2</option>
          <option value="3">Ubicación 3</option>
        </select>

        <label htmlFor="tipodispositivo_id">Tipo de Dispositivo:</label>
        <select
          id="tipodispositivo_id"
          name="tipodispositivo_id"
          onChange={handleChange}
        >
          <option value="1">Desktop</option>
          <option value="2">Portátil</option>
          <option value="3">OPS</option>
          <option value="4">Impresora</option>
          <option value="5">Periferico</option>
          <option value="6">Otro</option>
        </select>

        <label htmlFor="categoria_id">Categoría:</label>
        <select id="categoria_id" name="categoria_id" onChange={handleChange}>
          <option value="1">Empleados</option>
          <option value="2">Aulas</option>
          <option value="3">Alumnos</option>
        </select>

        <button>Guardar Dispositivo</button>
      </form>
    </div>
  );
}

export default DevicesForm;
