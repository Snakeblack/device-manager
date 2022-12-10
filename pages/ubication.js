import { Layout } from "../components/Layout";
import axios from "axios";
import Search from "../components/Search";
import Ubications from "../components/Ubications";
import AddUbication from "../components/Adds/AddUbication";
import baseUrl from '../helpers/baseUrl';

function ubication({ data }) {
  return (
    <Layout>
      {/* separar los dos div uno al lado de otro */}
      <div className="grid grid-cols-12 gap-4">
        <Search />
        <AddUbication />
      </div>
      <Ubications ubication={data} />
    </Layout>
  );
}

export const getServerSideProps = async (context) => {
  const { data } = await axios.get(`${baseUrl}/api/ubications`);

  return {
    props: {
      data,
    },
  };
};

export default ubication;
