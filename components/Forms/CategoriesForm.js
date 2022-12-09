import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const CategoriesForm = () => {
  const [category, setCategory] = useState({
    nombre: "",
  });

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (router.query.id) {
        await axios.put(`/api/category/${router.query.id}`, category);
        toast.success("Category updated");
      } else {
        await axios.post("/api/category", category);
        toast.success("Category created");
      }
      router.push("/category/new");
    } catch (error) {
      toast.error("Error creating category");
    }
  };

  const handleChange = ({ target: { name, value } }) =>
    setCategory({ ...category, [name]: value });

  useEffect(() => {
    const getCategory = async () => {
      const { data } = await axios.get(`/api/category/${router.query.id}`);
      setCategory({
        nombre: data.nombre,
      });
    };

    if (router.query.id) {
      getCategory(router.query.id);
    }
  }, [router.query.id]);

  return (
    <div className="w-full max-w-screen-lg mx-auto">
      <h1
        className="text-2xl font-bold text-gray-900 dark:text-white mb-10"
      >Categoria</h1>
      <form onSubmit={handleSubmit}>
      <div className="relative z-0 mb-6 w-full group">
          <input
            type="text"
            name="nombre"
            onChange={handleChange}
            value={category.nombre}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="nombre"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Nombre de la Categoria
          </label>
        </div>
        <div
          className="flex justify-end items-center mt-6"
        >
          <button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="submit"
          >
            {router.query.id ? "Editar Categoria" : "Guardar Categoria"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CategoriesForm;
