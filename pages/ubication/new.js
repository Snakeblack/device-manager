import AddCenter from '../../components/AddCenter'
import UbicationsForm from '../../components/Forms/UbicationsForm'
import { Layout } from '../../components/Layout'

function newUbicationPage() {
  return (
    <Layout>
      <AddCenter />
      <UbicationsForm />
    </Layout>
  )
}

export default newUbicationPage