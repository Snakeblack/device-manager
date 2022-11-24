import { useRouter } from "next/router";
import { toast } from "react-toastify";
import axios from "axios";

function DeviceType({ devicetype }) {
  const router = useRouter();

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/devicetype/${id}`);
      router.push("/devicetype/new");
    } catch (error) {
      toast.error(
        error.message || "Error al eliminar el tipo de dispositivo"
      );
    }
  };

  return (
    <div className="w-full max-w-screen-lg mx-auto mt-10 grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-6">
      {devicetype.map(({ id, nombre }) => (
        <div
          key={id}
          className="block rounded-lg bg-gradient-to-tl hover:from-[#16222F] hover:to-[#384C57] transition duration-300 ease-in-out hover:ease-in from-[#16222A] to-[#223945] shadow-md shadow-slate-900/20"
        >
          <div className="bg-transparent p-6 my-4 rounded-lg transition duration-300 ease-in-out hover:ease-in">
            <h1
              className="text-2xl font-bold text-gray-900 dark:text-gray-50"
              key={id}
              id={id}
            >
              {nombre}
            </h1>
            <button
              className="bg-gray-500  hover:bg-gray-700 text-white px-3 py-2 rounded"
              onClick={() => router.push("/devicetype/edit/" + id)}
            >
              Editar
            </button>
            <button
              className="bg-red-500 hover:bg-red-700 ml-2 text-white px-3 py-2 rounded "
              onClick={() => handleDelete(id)}
            >
              Eliminar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DeviceType;
