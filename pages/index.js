import axios from 'axios'
import { Layout } from '../components/Layout'
import baseUrl from '../helpers/baseUrl'

function HomePage({ data }) {
  return <Layout></Layout>
}

// export const getServerSideProps = async (context) => {
//   const { data } = await axios.get(`${baseUrl}/api/device`)

//   return {
//     props: {
//       data
//     }
//   }
// }

export default HomePage
