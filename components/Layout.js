import { useRouter } from 'next/router'
import { ToastContainer } from 'react-toastify'

import SideBar from './Sidebar'

export function Layout({ children }) {
  const router = useRouter()
  return (
    <>

      <div className='bg-white dark:bg-gray-900 dark:text-white min-h-screen flex flex-row'>
        {router.pathname != '/profile' ? <SideBar /> : null}

        <div className='h-full min-h-screen w-full px-5 pb-14 pt-10 md:pt-20 sm:ml-44 sm:px-10 md:ml-40 md:px-20 lg:ml-52 lg:px-36
        bg-gray-100 dark:bg-gray-900 
        '>
          {children}
        </div>
      </div>
      <ToastContainer />
    </>
  )
}
