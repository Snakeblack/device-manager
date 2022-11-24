import { Devices } from "../components/Devices";
import { Layout } from "../components/Layout";
import axios from "axios";
import Search from "../components/Search";
import Add from "../components/Adds/Add";

function HomePage({ data }) {
  // console.log(device);
  return (
    <Layout>
      {/* separar los dos div uno al lado de otro */}
      <div className="grid grid-cols-12 gap-5">
        <Search />
        <Add />
      </div>
      <Devices device={data} />
    </Layout>
  );
}

export const getServerSideProps = async (context) => {
  const { data } = await axios.get("http://localhost:3000/api/device");

  return {
    props: {
      data,
    },
  };
};

export default HomePage;
