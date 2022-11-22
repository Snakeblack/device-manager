import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const CenterForm = () => {
  const [center, setCenter] = useState({
    nombre: "",
    direccion: "",
  });

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (router.query.id) {
        await axios.put(`/api/center/${router.query.id}`, center);
        toast.success("Centro actualizado");
      } else {
        await axios.post("/api/center", center);
        toast.success("Centro creado");
      }
      router.push("/ubication/new");
    } catch (error) {
      toast.error("Error al crear el centro");
    }
  };

  const handleChange = ({ target: { name, value } }) =>
    setCenter({ ...center, [name]: value });

  useEffect(() => {
    const getCenter = async () => {
      const { data } = await axios.get(`/api/centers/${router.query.id}`);
      setCenter({
        nombre: data.nombre,
        direccion: data.direccion,
      });
    };

    if (router.query.id) {
      getCenter(router.query.id);
    }
  }, [router.query.id]);

  return (
    <div className="w-full w-full max-w-screen-lg mx-auto mt-10">
      <form onSubmit={handleSubmit}>
        <div className="relative z-0 mb-6 w-full group">
          <input
            type="text"
            name="nombre"
            onChange={handleChange}
            value={center.nombre}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="nombre"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Nombre del centro
          </label>
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <input
            type="text"
            name="direccion"
            onChange={handleChange}
            value={center.direccion}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="direccion"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Dirección
          </label>
        </div>
        <div
          className="flex justify-end items-center mt-6"
        >
          <button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="submit"
          >
            {router.query.id ? "Editar Centro" : "Guardar Centro"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CenterForm;
