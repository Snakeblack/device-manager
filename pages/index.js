import axios from "axios";

import { Layout } from "../components/Layout";
import Link from "next/link";

function HomePage({ device }) {
  // console.log(device);
  return (
    <Layout>
      {device.map((device) => (
        <Link href={`/device/${device.id}`} key={device.id}>
            <div className="border border-gray-200 shadow-md p-6">
              <h1>{device.nombre}</h1>
              <p>{device.marca}</p>
              <p>{device.modelo}</p>
              <p>{device.serial_number}</p>
              <p>{device.sistema_operativo}</p>
              <p>{device.cpu}</p>
              <p>{device.ram}</p>
              <p>{device.disco_duro}</p>
              <p>{device.congelado == 1 ? "Congelado" : device.congelado == 0 ? "No congelado" : ""}</p>
              <p>{device.detalles}</p>
              <p>{device.ubicacion}</p>
              <p>{device.red}</p>
              <p>{device.centro}</p>
              <p>{device.categoria}</p>
              <p>{device.tipo_dispositivo}</p>
            </div>
        </Link>
      ))}
    </Layout>
  );
}

export const getServerSideProps = async (context) => {
  const { data: device } = await axios.get("http://localhost:3000/api/device");

  return {
    props: {
      device,
    },
  };
};

export default HomePage;
