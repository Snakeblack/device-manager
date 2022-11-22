import DevicesForm from "../components/Forms/DevicesForm";
import { Layout } from "../components/Layout";
import AddUbication from "../components/Adds/AddUbication";
import AddDeviceType from "../components/Adds/AddDeviceType";
import AddCategory from "../components/Adds/AddCategory";

function NewPage() {
  return (
    <Layout>
      <div className="flex flex-row items-center">
        <AddUbication />
        <AddDeviceType />
        <AddCategory />
      </div>
      <DevicesForm />
    </Layout>
  );
}

export default NewPage;
