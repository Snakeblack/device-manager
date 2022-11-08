import axios from "axios";
import { useState } from "react";

export function DevicesForm({ device }) {
  const [dispositivo, setDispositivo] = useState({
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
      .post("/api/devices", dispositivo)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error.response.data);
      });
    console.log(res);
  };

  const handleChange = ({ target: { name, value } }) =>
    setDispositivo({ ...dispositivo, [name]: value });

  return (
    <div className="w-full max-w-md">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <label htmlFor="nombre">Nombre del Dispositivo:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          onChange={handleChange}
          className="shadow border rounded py-2 px-3 text-gray-700"
        />

        <label htmlFor="marca">Marca:</label>
        <input
          type="text"
          id="marca"
          name="marca"
          onChange={handleChange}
          className="shadow border rounded py-2 px-3 text-gray-700"
        />

        <label htmlFor="modelo">Modelo:</label>
        <input
          type="text"
          id="modelo"
          name="modelo"
          onChange={handleChange}
          className="shadow border rounded py-2 px-3 text-gray-700"
        />

        <label htmlFor="serial_number">Serial:</label>
        <input
          type="text"
          id="serial_number"
          name="serial_number"
          onChange={handleChange}
          className="shadow border rounded py-2 px-3 text-gray-700"
        />

        <label htmlFor="sistema_operativo">Sistema Operativo:</label>
        <input
          type="text"
          id="sistema_operativo"
          name="sistema_operativo"
          onChange={handleChange}
          className="shadow border rounded py-2 px-3 text-gray-700"
        />

        <label htmlFor="cpu">CPU:</label>
        <input
          type="text"
          id="cpu"
          name="cpu"
          onChange={handleChange}
          className="shadow border rounded py-2 px-3 text-gray-700"
        />

        <label htmlFor="ram">RAM:</label>
        <input
          type="text"
          id="ram"
          name="ram"
          onChange={handleChange}
          className="shadow border rounded py-2 px-3 text-gray-700"
        />

        <label htmlFor="disco_duro">Disco:</label>
        <input
          type="text"
          id="disco_duro"
          name="disco_duro"
          onChange={handleChange}
          className="shadow border rounded py-2 px-3 text-gray-700"
        />

        <label htmlFor="congelado">Congelado:</label>
        <input
          type="checkbox"
          value="1"
          id="congelado"
          name="congelado"
          onChange={handleChange}
          className="shadow border rounded py-2 px-3 text-gray-700"
        />
        <input
          type="hidden"
          value="0"
          id="congelado"
          name="congelado"
          onChange={handleChange}
          className="shadow border rounded py-2 px-3 text-gray-700"
        />

        <label htmlFor="detalles">Detalles:</label>
        <textarea
          id="detalles"
          name="detalles"
          rows="2"
          onChange={handleChange}
          className="shadow border rounded py-2 px-3 text-gray-700"
        />

        <label htmlFor="ubicacion_id">Ubicación:</label>
        <select
          id="ubicacion_id"
          name="ubicacion_id"
          onChange={handleChange}
          value={device.ubicacion_id}
        >
          {device.ubicaciones.map((ubicacion) => (
            <option key={ubicacion.id} value={ubicacion.id}>
              {ubicacion.nombre}
            </option>
          ))}
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

        <button className="bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded focus:outline-none focus:shadow-outline font-bold text-white">
          Guardar Dispositivo
        </button>
      </form>
    </div>
  );
}

export const getServerSideProps = async context => {
  const { data: device } = await axios.get('http://localhost:3000/api/devices');

  return {
    props: {
      device
    }
  };
}

export default DevicesForm;
