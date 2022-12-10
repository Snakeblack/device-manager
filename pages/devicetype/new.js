import DeviceTypeForm from "../../components/Forms/DeviceTypeForm";
import axios from "axios";
import { Layout } from "../../components/Layout";
import DeviceType from "../../components/List/DeviceType";
import baseUrl from '../../helpers/baseUrl';

function newDeviceTypePage({ data }) {
  return (
    <Layout>
      <DeviceTypeForm />
      <DeviceType devicetype={data} />
    </Layout>
  );
}

export const getServerSideProps = async (context) => {
  const { data } = await axios.get(
    `${baseUrl}/api/devicetype`
  );

  return {
    props: {
      data,
    },
  };
};

export default newDeviceTypePage;
