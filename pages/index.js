import axios from "axios";
import DevicesForm from "../components/DevicesForm";

function HomePage({ device }) {
  console.log(device);
  return (
    <>
      <DevicesForm device={device} />
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
            {/* <p>{device.ubicacion_id}</p>
            <p>{device.tipodispositivo_id}</p>
            <p>{device.categoria_id}</p> */}
          </div>
        ))}
      </div>
    </>
  );
}


export const getServerSideProps = async context => {
  const { data: device } = await axios.get('http://localhost:3000/api/devices');

  return {
    props: {
      device
    }
  };
}

export default HomePage;
