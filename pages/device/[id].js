import { Layout } from "../../components/Layout";
import axios from "axios";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import baseUrl from '../../helpers/baseUrl';

function DevicePage({ device }) {
  const router = useRouter();

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/device/${id}`);
      router.push("/");
    } catch (error) {
      toast.error(error.response.data.message || "Error al eliminar el dispositivo");
    }
  };

  return (
    <Layout>
      <h1>{device.nombre}</h1>
      <p>{device.tipo_dispositivo}</p>
      <p>{device.marca}</p>
      <p>{device.modelo}</p>
      <p>{device.serial_number}</p>
      <p>{device.sistema_operativo}</p>
      <p>{device.cpu}</p>
      <p>{device.ram}{device.ram ? "GB" : ""}</p>
      <p>{device.disco_duro}{device.disco_duro ? "GB" : ""}</p>
      <p>{device.congelado == 1 ? "Congelado" : "No congelado"}</p>
      <p>{device.detalles}</p>
      <p>{device.centro}</p>
      <p>{device.ubicacion}</p>
      <button
        className="bg-gray-500  hover:bg-gray-700 text-white px-3 py-2 rounded"
        onClick={() => router.push("/device/edit/" + device.id)}
      >
        Editar
      </button>
      <button
        className="bg-red-500 hover:bg-red-700 ml-2 text-white px-3 py-2 rounded "
        onClick={() => handleDelete(device.id)}
      >
        Eliminar
      </button>
    </Layout>
  );
}

export const getServerSideProps = async (context) => {
  const { data: device } = await axios.get(
    `${baseUrl}/api/device/` + context.query.id
  );

  return {
    props: {
      device,
    },
  };
};

export default DevicePage;
