import { Sidebar } from 'flowbite-react'
import Link from 'next/link'
// TODO: https://react-icons.github.io/react-icons/icons?name=hi o https://heroicons.dev/
import { HiTable, HiUser, HiSupport } from 'react-icons/hi'

function SideBar() {
  return (
    <div className='w-fit h-full'>
      <Sidebar
        aria-label='Sidebar with multi-level dropdown'
        className='h-full w-64'
      >
        {/* <div className='h-full overflow-y-auto overflow-x-hidden rounded-xl border border-[#D1D5DB] dark:border-none bg-[#F9FAFB] py-4 px-3 dark:bg-gray-800'> */}
          <Sidebar.ItemGroup
            border='rounded-xl border-[#D1D5DB] dark:border-none bg-[#F9FAFB] py-4 px-3 dark:bg-gray-800'
          >
            <Link
              className='flex items-center justify-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
              href='/'
            >
              <svg
                className='w-6 h-6 text-gray-400'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z' />
                <path d='M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z' />
              </svg>
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
            <Link
              className='flex items-center justify-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
              href='/device'
            >
              <svg
                className='w-6 h-6 text-gray-400'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z'
                  clipRule='evenodd'
                />
              </svg>
              <span className='px-3 flex-1 whitespace-nowrap'>
                Dispositivos
              </span>
            </Link>
            <Sidebar.Item href='#' icon={HiUser}>
              Usuarios
            </Sidebar.Item>
            <Sidebar.Item href='#' icon={HiSupport}>
              Incidencias
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        {/* </div> */}
      </Sidebar>
    </div>
  )
}

export default SideBar
