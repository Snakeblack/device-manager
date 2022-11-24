import AddCenter from "../../components/Adds/AddCenter";
import AddRed from "../../components/Adds/AddRed";
import UbicationsForm from "../../components/Forms/UbicationsForm";
import { Layout } from "../../components/Layout";


function newUbicationPage() {
  return (
    <Layout>
      <div className="flex flex-row items-center">
        <AddCenter />
        <AddRed />
      </div>
      <UbicationsForm />
    </Layout>
  );
}

export default newUbicationPage;
