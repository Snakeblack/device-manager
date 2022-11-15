import axios from "axios";
import { useState } from "react";

export function DevicesForm() {
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
    categoria_id: "",
    tipodispositivo_id: ""
  });

  // Ubicaciones
  const [ubicaciones, setUbicaciones] = useState([]);
  const getUbicaciones = async () => {
    const res = await axios.get("/api/ubications");
    setUbicaciones(res.data);
  };
  
  // Tipo de Dispositivos
  const [tipodispositivos, setTipodispositivos] = useState([]);
  const getTipodispositivos = async () => {
    const res = await axios.get("/api/tipodispositivo");
    setTipodispositivos(res.data);
  };

  // Categorias
  const [categorias, setCategorias] = useState([]);
  const getCategorias = async () => {
    const res = await axios.get("/api/category");
    setCategorias(res.data);
  };


  // Funcion para guardar los datos
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios
      .post("/api/devices", dispositivo)
      .then(function (response) {
        // console.log(response);
      })
      .catch(function (error) {
        // console.log(error.response.data);
      });
    console.log(res);
  };

  // Cambios en los inputs
  const handleChange = ({ target: { name, value } }) =>
    setDispositivo({ ...dispositivo, [name]: value });

  return (
    <div className="w-full max-w-xl">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 my-2 grid grid-cols-2 gap-4 bg-slate-200"
      >
        <label
          htmlFor="nombre"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Nombre del Dispositivo:
        </label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          onChange={handleChange}
          className="shadow border rounded py-2 px-3 text-gray-700"
          required
        />

        <label
          htmlFor="marca"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Marca:
        </label>
        <input
          type="text"
          id="marca"
          name="marca"
          onChange={handleChange}
          className="shadow border rounded py-2 px-3 text-gray-700"
          required
        />

        <label
          htmlFor="modelo"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Modelo:
        </label>
        <input
          type="text"
          id="modelo"
          name="modelo"
          onChange={handleChange}
          className="shadow border rounded py-2 px-3 text-gray-700"
        />

        <label
          htmlFor="serial_number"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Serial:
        </label>
        <input
          type="text"
          id="serial_number"
          name="serial_number"
          onChange={handleChange}
          className="shadow border rounded py-2 px-3 text-gray-700"
        />

        <label
          htmlFor="sistema_operativo"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Sistema Operativo:
        </label>
        <input
          type="text"
          id="sistema_operativo"
          name="sistema_operativo"
          onChange={handleChange}
          className="shadow border rounded py-2 px-3 text-gray-700"
        />

        <label
          htmlFor="cpu"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          CPU:
        </label>
        <input
          type="text"
          id="cpu"
          name="cpu"
          onChange={handleChange}
          className="shadow border rounded py-2 px-3 text-gray-700"
        />

        <label
          htmlFor="ram"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          RAM:
        </label>
        <input
          type="number"
          id="ram"
          name="ram"
          onChange={handleChange}
          className="shadow border rounded py-2 px-3 text-gray-700"
          defaultValue={0}
        />

        <label
          htmlFor="disco_duro"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Disco:
        </label>
        <input
          type="number"
          id="disco_duro"
          name="disco_duro"
          onChange={handleChange}
          className="shadow border rounded py-2 px-3 text-gray-700"
        />

        <label
          htmlFor="congelado"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Congelado:
        </label>
        <select
          id="congelado"
          name="congelado"
          onChange={handleChange}
          className="shadow border rounded py-2 px-3 text-gray-700"
        >
          <option value="0">No</option>
          <option value="1">Si</option>
        </select>

        <label
          htmlFor="detalles"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Detalles:
        </label>
        <textarea
          id="detalles"
          name="detalles"
          rows="2"
          onChange={handleChange}
          className="shadow border rounded py-2 px-3 text-gray-700"
        />

        <label
          htmlFor="ubicacion_id"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Ubicación
        </label>
        <select
          name="ubicacion_id"
          id="ubicacion_id"
          onChange={handleChange}
          className="shadow border rounded py-2 px-3 text-gray-700"
          onClick={getUbicaciones}
          required
        >
          <option value="">Seleccione una ubicación</option>
          {ubicaciones.map((ubicacion) => (
            <option key={ubicacion.id} value={ubicacion.id}>
              {ubicacion.nombre}
            </option>
          ))}
        </select>

        <label
          htmlFor="tipodispositivo_id"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Tipo de Dispositivo:
        </label>
        <select
          id="tipodispositivo_id"
          name="tipodispositivo_id"
          onChange={handleChange}
          className="shadow border rounded py-2 px-3 text-gray-700"
          onClick={getTipodispositivos}
          required
        >
          <option value="">Seleccione un tipo de dispositivo</option>
          {tipodispositivos.map((tipodispositivo) => (
            <option key={tipodispositivo.id} value={tipodispositivo.id}>
              {tipodispositivo.nombre}
            </option>
          ))}
        </select>

        <label
          htmlFor="categoria_id"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Categoría:
        </label>
        <select
          id="categoria_id"
          name="categoria_id"
          onChange={handleChange}
          className="shadow border rounded py-2 px-3 text-gray-700"
          onClick={getCategorias}
          required
        >
          <option value="">Seleccione una categoría</option>
          {categorias.map((categoria) => (
            <option key={categoria.id} value={categoria.id}>
              {categoria.nombre}
            </option>
          ))}
        </select>

        <button
          className="bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded focus:outline-none focus:shadow-outline font-bold text-white uppercase text-xs mt-3"
          type="submit"
        >
          Guardar
        </button>
      </form>
    </div>
  );
}


export default DevicesForm;
