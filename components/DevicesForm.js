import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

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
    cuenta_office: "",
    ubicacion_id: "",
    categoria_id: "",
    tipodispositivo_id: "",
    ubicacion: "",
    tipo_dispositivo: "",
    categoria: "",
  });

  const router = useRouter();

  // console.log(router.query)

  // Ubicaciones
  const [ubicaciones, setUbicaciones] = useState([]);
  const getUbicaciones = async () => {
    try {
      const res = await axios.get("/api/ubications");
      setUbicaciones(res.data);
    } catch (error) {
      toast.error(error.message || "Error al obtener ubicaciones");
    }
  };

  // Tipo de Dispositivos
  const [tipodispositivos, setTipodispositivos] = useState([]);
  const getTipodispositivos = async () => {
    try {
      const res = await axios.get("/api/tipodispositivo");
      setTipodispositivos(res.data);
    } catch (error) {
      toast.error(
        error.message || "Error al obtener los tipos de dispositivos"
      );
    }
  };

  // Categorias
  const [categorias, setCategorias] = useState([]);
  const getCategorias = async () => {
    try {
      const res = await axios.get("/api/category");
      setCategorias(res.data);
    } catch (error) {
      toast.error(error.message || "Error al obtener las categorias");
    }
  };

  // Funcion para guardar los datos
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (router.query.id) {
        await axios.put(`/api/device/${router.query.id}`, dispositivo);
        toast.success("Dispositivo actualizado satisfactoriamente");
      } else {
        await axios.post("/api/device", dispositivo);
        toast.success("Dispositivo creado satisfactoriamente");
      }

      router.push("/");
    } catch (error) {
      toast.error(
        error.response.data.message || "Error al guardar el dispositivo"
      );
    }
  };

  // Cambios en los inputs
  const handleChange = ({ target: { name, value } }) =>
    setDispositivo({ ...dispositivo, [name]: value });

  useEffect(() => {
    const getDevice = async () => {
      const { data } = await axios.get("/api/device/" + router.query.id);
      // console.log(data);
      setDispositivo({
        nombre: data.nombre,
        marca: data.marca,
        modelo: data.modelo ? data.modelo : "",
        serial_number: data.serial_number ? data.serial_number : "",
        sistema_operativo: data.sistema_operativo ? data.sistema_operativo : "",
        cpu: data.cpu ? data.cpu : "",
        ram: data.ram ? data.ram : "",
        disco_duro: data.disco_duro ? data.disco_duro : "",
        congelado: data.congelado ? data.congelado : "",
        detalles: data.detalles ? data.detalles : "",
        cuenta_office: data.cuenta_office ? data.cuenta_office : "",
        ubicacion_id: data.ubicacion_id,
        categoria_id: data.categoria_id,
        tipodispositivo_id: data.tipodispositivo_id,
        ubicacion: data.ubicacion,
        tipo_dispositivo: data.tipo_dispositivo,
        categoria: data.categoria,
      });
    };
    getUbicaciones();
    getTipodispositivos();
    getCategorias();
    if (router.query.id) {
      getDevice(router.query.id);
    }
  }, [router.query.id]);

  return (
    <div className="w-full w-full max-w-screen-lg mx-auto mt-10">
      <form onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-3 md:gap-6">
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="text"
              id="nombre"
              name="nombre"
              onChange={handleChange}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              value={dispositivo.nombre}
            />
            <label
              htmlFor="nombre"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Nombre del Dispositivo
            </label>
          </div>

          <div className="relative z-0 mb-6 w-full group">
            <input
              type="text"
              id="marca"
              name="marca"
              onChange={handleChange}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              value={dispositivo.marca}
            />
            <label
              htmlFor="marca"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Marca
            </label>
          </div>

          <div className="relative z-0 mb-6 w-full group">
            <input
              type="text"
              id="modelo"
              name="modelo"
              onChange={handleChange}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={dispositivo.modelo}
            />
            <label
              htmlFor="modelo"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Modelo
            </label>
          </div>
        </div>

        <div className="grid md:grid-cols-3 md:gap-6">
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="text"
              id="serial_number"
              name="serial_number"
              onChange={handleChange}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={dispositivo.serial_number}
            />
            <label
              htmlFor="serial_number"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Numero de Serie
            </label>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="text"
              id="sistema_operativo"
              name="sistema_operativo"
              onChange={handleChange}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={dispositivo.sistema_operativo}
            />
            <label
              htmlFor="sistema_operativo"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Sistema Operativo
            </label>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="text"
              id="cpu"
              name="cpu"
              onChange={handleChange}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={dispositivo.cpu}
            />
            <label
              htmlFor="cpu"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              CPU
            </label>
          </div>
        </div>
        <div className="grid md:grid-cols-3 md:gap-6">
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="text"
              id="ram"
              name="ram"
              onChange={handleChange}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={dispositivo.ram}
            />
            <label
              htmlFor="ram"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Memoria RAM (GB)
            </label>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="text"
              id="disco_duro"
              name="disco_duro"
              onChange={handleChange}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={dispositivo.disco_duro}
            />
            <label
              htmlFor="disco_duro"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Almacenamiento (GB)
            </label>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="email"
              id="cuenta_office"
              name="cuenta_office"
              onChange={handleChange}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={dispositivo.cuenta_office}
            />
            <label
              htmlFor="cuenta_office"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Cuenta Office
            </label>
          </div>
        </div>
        <div class="relative z-0 mb-6 w-full group">
          <textarea
            id="detalles"
            name="detalles"
            rows="1"
            onChange={handleChange}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            value={dispositivo.detalles}
          />
          <label
            htmlFor="detalles"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Detalles
          </label>
        </div>
        <div className="grid md:grid-cols-4 md:gap-6">
        <div class="relative z-0 mb-6 w-full group">
          <label htmlFor="congelado" className="sr-only">
            Congelado
          </label>
          <select
            id="congelado"
            name="congelado"
            onChange={handleChange}
            className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
          >
            {router.query.id ? (
              <option value={dispositivo.congelado}>
                {dispositivo.congelado == 1
                  ? dispositivo.congelado == 0
                    ? "No"
                    : "Si"
                  : ""}
              </option>
            ) : (
              <option selected="">Selecciona el estado</option>
            )}
            <option value="0">Congelado</option>
            <option value="1">No Congelado</option>
            <option value="">Ninguno</option>
          </select>
        </div>

        <div class="relative z-0 mb-6 w-full group">
          <label htmlFor="ubicacion_id" className="sr-only">
            Ubicación
          </label>
          <select
            name="ubicacion_id"
            id="ubicacion_id"
            onChange={handleChange}
            className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            required
          >
            {router.query.id ? (
              <option value={dispositivo.ubicacion_id}>
                {dispositivo.ubicacion}
              </option>
            ) : (
              <option selected="">Selecciona la ubicación</option>
            )}

            {ubicaciones.map((ubicacion) => (
              <option key={ubicacion.id} value={ubicacion.id}>
                {ubicacion.nombre}
              </option>
            ))}
          </select>
        </div>

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
          required
        >
          <option value={dispositivo.tipodispositivo_id}>
            {dispositivo.tipo_dispositivo}
          </option>
          <optgroup label="Opciones">
            {tipodispositivos.map((tipodispositivo) => (
              <option key={tipodispositivo.id} value={tipodispositivo.id}>
                {tipodispositivo.nombre}
              </option>
            ))}
          </optgroup>
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
          required
        >
          <option value={dispositivo.categoria_id}>
            {dispositivo.categoria}
          </option>
          <optgroup label="Opciones">
            {categorias.map((categoria) => (
              <option key={categoria.id} value={categoria.id}>
                {categoria.nombre}
              </option>
            ))}
          </optgroup>
        </select>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded focus:outline-none focus:shadow-outline font-bold text-white uppercase text-xs mt-3"
          type="submit"
        >
          {router.query.id ? "Editar Dispositivo" : "Guardar Dispositivo"}
        </button>
      </form>
    </div>
  );
}

export default DevicesForm;
