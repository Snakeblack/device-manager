import { Layout } from "../../components/Layout";
import axios from "axios";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

function DevicePage({ devicetype }) {
  const router = useRouter();

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/devicetype/${id}`);
      router.push("/");
    } catch (error) {
      toast.error(error.response.data.message || "Error al eliminar el dispositivo");
    }
  };

  return (
    <Layout>
      <h1>{devicetype.nombre}</h1>
      <button
        className="bg-gray-500  hover:bg-gray-700 text-white px-3 py-2 rounded"
        onClick={() => router.push("/devicetype/edit/" + devicetype.id)}
      >
        Editar
      </button>
      <button
        className="bg-red-500 hover:bg-red-700 ml-2 text-white px-3 py-2 rounded "
        onClick={() => handleDelete(devicetype.id)}
      >
        Eliminar
      </button>
    </Layout>
  );
}

export const getServerSideProps = async (context) => {
  const { data: devicetype } = await axios.get(
    "https://nextjs-mysql-crud-snakeblack.vercel.app/api/devicetype/" + context.query.id
  );

  return {
    props: {
      devicetype,
    },
  };
};

export default DevicePage;