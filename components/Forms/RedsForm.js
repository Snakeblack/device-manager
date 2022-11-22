import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const RedForm = () => {
  const [red, setRed] = useState({
    nombre: "",
    categoria_id: "",
    categoria: "",
    centro_id: "",
    centro: "",
  });

  const router = useRouter();

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

  // Centros
  const [centros, setCentros] = useState([]);
  const getCentros = async () => {
    try {
      const res = await axios.get("/api/center");
      setCentros(res.data);
    } catch (error) {
      toast.error(error.message || "Error al obtener los centros");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (router.query.id) {
        await axios.put(`/api/red/${router.query.id}`, red);
        toast.success("Red actualizada");
      } else {
        await axios.post("/api/red", red);
        toast.success("Red creada");
      }
      router.push("/ubication/new");
    } catch (error) {
      toast.error("Error al crear la red");
    }
  };

  const handleChange = ({ target: { name, value } }) =>
    setRed({ ...red, [name]: value });

  useEffect(() => {
    const getRed = async () => {
      const { data } = await axios.get(`/api/red/${router.query.id}`);
      setRed({
        nombre: data.nombre,
        categoria_id: data.categoria_id,
        categoria: data.categoria,
        centro_id: data.centro_id,
        centro: data.centro,
      });
    };
    getCategorias();
    getCentros();

    if (router.query.id) {
      getRed(router.query.id);
    }
  }, [router.query.id]);

  return (
    <div className="w-full w-full max-w-screen-lg mx-auto mt-10">
      <form onSubmit={handleSubmit}>
        <div className="relative z-0 mb-6 w-full group">
          <input
            type="text"
            name="nombre"
            value={red.nombre}
            onChange={handleChange}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="nombre"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Numero de la red
          </label>
        </div>
        <div className="relative z-0 mb-6 w-full group">
            <label htmlFor="categoria_id" className="sr-only">
              Categoría
            </label>
            <select
              id="categoria_id"
              name="categoria_id"
              onChange={handleChange}
              className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
              required
            >
              {router.query.id ? (
                <option value={red.categoria_id}>
                  {red.categoria}
                </option>
              ) : (
                <option selected="">Selecciona la categoría</option>
              )}
              {categorias.map((categoria) => (
                <option key={categoria.id} value={categoria.id}>
                  {categoria.nombre}
                </option>
              ))}
            </select>
          </div>
        <div className="relative z-0 mb-6 w-full group">
          <label htmlFor="centro_id" className="sr-only">
            Centro
          </label>
          <select
            id="centro_id"
            name="centro_id"
            onChange={handleChange}
            className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            required
          >
            {router.query.id ? (
              <option value={red.centro_id}>{red.centro}</option>
            ) : (
              <option selected="">Selecciona el centro</option>
            )}
            {centros.map((centro) => (
              <option key={centro.id} value={centro.id}>
                {centro.nombre}
              </option>
            ))}
          </select>
        </div>
        <div
          className="flex justify-end items-center mt-6"
        >
          <button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="submit"
          >
            {router.query.id ? "Editar Red" : "Guardar Red"}
          </button>
        </div>
      </form>
    </div>
            
  )
}

export default RedForm;