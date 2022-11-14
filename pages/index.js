import axios from "axios";
import DevicesForm from "../components/DevicesForm";

function HomePage({ device }) {
  console.log(device);
  return (
    <>
      <DevicesForm />
      <div>
        {device.map((device) => (
          <div key={device.id}>
            <h1>{device.nombre}</h1>
            <p>{device.marca}</p>
            <p>{device.modelo}</p>
            <p>{device.serial_number}</p>
            <p>{device.sistema_operativo}</p>
            <p>{device.cpu}</p>
            <p>{device.ram}</p>
            <p>{device.disco_duro}</p>
            <p>{device.congelado}</p>
            <p>{device.detalles}</p>
            <p>{device.ubicacion}</p>
            <p>{device.is_aula}</p>
            <p>{device.red}</p>
            <p>{device.centro}</p>
            <p>{device.categoria}</p>
            <p>{device.tipo_dispositivo}</p>
          </div>
        ))}
      </div>
    </>
  );
}


export const getServerSideProps = async context => {
  const { data: device } = await axios.get('http://localhost:3000/api/devices');
  const { data: ubication } = await axios.get('http://localhost:3000/api/ubications');
  const { data: tipodispositivo } = await axios.get('http://localhost:3000/api/tipodispositivo');
  const { data: category } = await axios.get('http://localhost:3000/api/category');

  return {
    props: {
      device,
      ubication,
      tipodispositivo,
      category
    }
  };
}

export default HomePage;
