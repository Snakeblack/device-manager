import { Sidebar } from 'flowbite-react'
import Link from 'next/link'
// TODO: https://react-icons.github.io/react-icons/icons?name=hi o https://heroicons.dev/
import {
  HiTable,
  HiInbox,
  HiUser,
  HiOutlineMenuAlt4,
} from 'react-icons/hi'

function SideBar() {
  return (
    <div className='w-fit h-full'>
      <Sidebar aria-label='Sidebar with multi-level dropdown example'>
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Link className='flex items-center justify-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700' href='/'> 
              <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" /><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" /></svg>
              <span className='px-3 flex-1 whitespace-nowrap'>Resumen</span>
            </Link>
            <Sidebar.Collapse icon={HiTable} label='Formularios'>
              <Link
                className='flex items-center justify-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 group w-full pl-8 transition duration-75'
                href='/center/new'
              >
                <span className='px-3 flex-1 whitespace-nowrap'>Centro</span>
              </Link>
              <Link
                className='flex items-center justify-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 group w-full pl-8 transition duration-75'
                href='/category/new'
              >
                <span className='px-3 flex-1 whitespace-nowrap'>Categoria</span>
              </Link>
              <Link
                className='flex items-center justify-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 group w-full pl-8 transition duration-75'
                href='/red/new'
              >
                <span className='px-3 flex-1 whitespace-nowrap'>Red</span>
              </Link>
              <Link
                className='flex items-center justify-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 group w-full pl-8 transition duration-75'
                href='/ubication/new'
              >
                <span className='px-3 flex-1 whitespace-nowrap'>Ubicación</span>
              </Link>
              <Link
                className='flex items-center justify-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 group w-full pl-8 transition duration-75'
                href='/devicetype/new'
              >
                <span className='px-3 flex-1 whitespace-nowrap'>
                  Tipo de dispositivo
                </span>
              </Link>
              <Link
                className='flex items-center justify-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 group w-full pl-8 transition duration-75'
                href='/new'
              >
                <span className='px-3 flex-1 whitespace-nowrap'>
                  Dispositivo
                </span>
              </Link>
            </Sidebar.Collapse>
            <Sidebar.Item href='#' icon={HiInbox}>
              Inbox
            </Sidebar.Item>
            <Sidebar.Item href='#' icon={HiUser}>
              Users
            </Sidebar.Item>
            <Sidebar.Item href='#' icon={HiOutlineMenuAlt4}>
              Products
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  )
}

export default SideBar
