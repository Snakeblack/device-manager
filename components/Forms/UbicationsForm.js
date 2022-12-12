import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const UbicationsForm = () => {
  const [ubication, setUbication] = useState({
    nombre: "",
    is_aula: "",
    centro_id: "",
    red_id: "",
  });

  const router = useRouter();

  // Centros
  const [centers, setCenters] = useState([]);
  const getCenters = async () => {
    try {
      const res = await axios.get("/api/center");
      setCenters(res.data);
    } catch (error) {
      toast.error(error.message || "Error al obtener los centros");
    }
  };

  // Redes
  const [reds, setReds] = useState([]);
  const getReds = async () => {
    try {
      const res = await axios.get("/api/red");
      setReds(res.data);
    } catch (error) {
      toast.error(error.message || "Error al obtener las redes");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (router.query.id) {
        await axios.put(`/api/ubications/${router.query.id}`, ubication);
        toast.success("Ubicación actualizada");
      } else {
        await axios.post("/api/ubications", ubication);
        toast.success("Ubicación creada");
      }
      router.push("/ubication");
    } catch (error) {
      toast.error(error.message || "Error al crear la ubicación");
    }
  };

  const handleChange = ({ target: { name, value } }) =>
    setUbication({ ...ubication, [name]: value });

  useEffect(() => {
    const getUbication = async () => {
      const { data } = await axios.get(`/api/ubications/${router.query.id}`);
      setUbication({
        nombre: data.nombre,
        is_aula: data.is_aula,
        centro_id: data.centro_id,
        red_id: data.red_id,
      });
    };
    getCenters();
    getReds();
    if (router.query.id) {
      getUbication(router.query.id);
    }
  }, [router.query.id]);

  return (
    <div className="w-full max-w-screen-lg mx-auto mt-8">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-10">
        Ubicación
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="relative z-0 mb-6 w-full group">
          <input
            type="text"
            name="nombre"
            onChange={handleChange}
            value={ubication.nombre}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="nombre"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Nombre de la ubicación
          </label>
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <label htmlFor="is_aula" className="sr-only">
            ¿Es un aula?
          </label>
          <select
            id="is_aula"
            name="is_aula"
            onChange={handleChange}
            className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent dark:bg-gray-900 border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            defaultValue="Selecciona si es un despacho"
          >
            {router.query.id ? (
              <option value={ubication.is_aula}>
                {ubication.is_aula ? "Sí" : "No"}
              </option>
            ) : (
              <option>Selecciona si es un despacho</option>
            )}
            <option value="0">Es un despacho</option>
            <option value="1">No es despacho</option>
          </select>
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <label htmlFor="centro_id" className="sr-only">
            Centro
          </label>
          <select
            name="centro_id"
            id="centro_id"
            onChange={handleChange}
            className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent dark:bg-gray-900 border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            onClick={getCenters}
            defaultValue="Selecciona un centro"
            required
          >
            {router.query.id ? (
              <option value={ubication.centro_id}>{ubication.centro_id}</option>
            ) : (
              <option>Selecciona un centro</option>
            )}
            {centers.map((center) => (
              <option key={center.id} value={center.id}>
                {center.nombre}
              </option>
            ))}
          </select>
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <label htmlFor="red_id" className="sr-only">
            Red
          </label>
          <select
            name="red_id"
            id="red_id"
            onChange={handleChange}
            className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent dark:bg-gray-900 border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            onClick={getReds}
            defaultValue="Selecciona una red"
            required
          >
            {router.query.id ? (
              <option value={ubication.red_id}>{ubication.red_id}</option>
            ) : (
              <option>Selecciona una red</option>
            )}
            {reds.map((red) => (
              <option key={red.id} value={red.id}>
                {red.nombre}
              </option>
            ))}
          </select>
        </div>

        <div className="flex justify-end items-center mt-6">
          <button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="submit"
          >
            {router.query.id ? "Editar Ubicación" : "Guardar Ubicación"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UbicationsForm;
