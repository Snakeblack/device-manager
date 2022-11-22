import AddCategory from '../../components/Adds/AddCategory'
import AddCenter from '../../components/Adds/AddCenter'
import RedForm from '../../components/Forms/RedsForm'
import { Layout } from '../../components/Layout'

function newRedPage() {
  return (
    <Layout>
      <div className="flex flex-row items-center">
        <AddCategory />
        <AddCenter />
      </div>
      <RedForm />
    </Layout>
  )
}

export default newRedPage