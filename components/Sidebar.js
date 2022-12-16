import Link from 'next/link'
import { useState } from 'react'

function SideBar() {
  //funcion para abrir y cerrar el sidebar teniendo en cuenta que el boton es un componente aparte
  const [sidebarOpen, setSidebarOpen] = useState('hidden sm:flex')
  const toggleSidebar = () => {
    if (sidebarOpen === 'sm:flex' || sidebarOpen === 'flex') {
      setSidebarOpen('hidden sm:flex')
    } else {
      setSidebarOpen('flex')
    }
  }

  // funcion para abrir y cerrar los botones que hacen el collapse de los menus del sidebar en react
  const [collapseShowForm, setCollapseShowForm] = useState('hidden')
  const toggleForms = () => {
    if (collapseShowForm === 'hidden') {
      setCollapseShowForm('block')
    } else {
      setCollapseShowForm('hidden')
    }
  }

  const [collapseShowList, setCollapseShowList] = useState('hidden')
  const toggleList = () => {
    if (collapseShowList === 'hidden') {
      setCollapseShowList('block')
    } else {
      setCollapseShowList('hidden')
    }
  }

  return (
    <>
      <button
        className={
          'sm:hidden fixed z-10 w-10 h-10 bg-gray-700 dark:bg-gray-800 text-white rounded-lg shadow-lg right-5 top-5'
        }
        onClick={toggleSidebar}
      >
        <svg
          className='w-10 h-10'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z'
            clipRule='evenodd'
          />
        </svg>
      </button>
      <aside
        className={
          'flex-col justify-between top-0 left-0  bg-white  dark:bg-gray-800 lg:w-64 fixed h-screen z-10 ' +
          sidebarOpen
        }
        aria-label='Sidenav'
      >
        <div>
          <div
            id='logo'
            className='flex items-center justify-center h-40 w-full bg-white dark:bg-gray-800'
          >
            <Link
              href='/'
              className='flex flex-col items-center justify-center mt-4'
            >
              <svg
                className='w-10 h-10 text-gray-900 dark:text-white'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M13 7H7v6h6V7z' />
                <path
                  fillRule='evenodd'
                  d='M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z'
                  clipRule='evenodd'
                />
              </svg>
              <span className='text-gray-800 dark:text-white text-lg lg:text-2xl font-bold mx-auto inline-flex py-2'>
                Device Manager
              </span>
            </Link>
          </div>

          <div className='overflow-y-auto py-2 px-3 bg-white  dark:bg-gray-800 '>
            <ul className='pt-5 space-y-2 border-t border-gray-200 dark:border-gray-700'>
              <li>
                <Link
                  href='/'
                  className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'
                >
                  <svg
                    aria-hidden='true'
                    className='w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z'></path>
                    <path d='M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z'></path>
                  </svg>
                  <span className='ml-3'>General</span>
                </Link>
              </li>
              <li>
                <button
                  type='button'
                  className='flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
                  aria-controls='dropdown-pages'
                  data-collapse-toggle='dropdown-pages'
                  onClick={toggleForms}
                >
                  <svg
                    aria-hidden='true'
                    className='flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      d='M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                  <span className='flex-1 ml-3 text-left whitespace-nowrap'>
                    Formularios
                  </span>
                  <svg
                    aria-hidden='true'
                    className='w-6 h-6'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                </button>
                <ul
                  id='dropdown-pages'
                  className={'py-2 space-y-2 ' + collapseShowForm}
                >
                  <li>
                    <Link
                      href='/center/new'
                      className='flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
                    >
                      Centros
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/category/new'
                      className='flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
                    >
                      Categorías
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/red/new'
                      className='flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
                    >
                      Redes
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/ubication/new'
                      className='flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
                    >
                      Ubicaciones
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/devicetype/new'
                      className='flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
                    >
                      Tipo de dispositivos
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/device/new'
                      className='flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
                    >
                      Dispositivos
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <button
                  type='button'
                  className='flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
                  aria-controls='dropdown-list'
                  data-collapse-toggle='dropdown-list'
                  onClick={toggleList}
                >
                  <svg
                    className='flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z'></path>
                  </svg>
                  <span className='flex-1 ml-3 text-left whitespace-nowrap'>
                    Listados
                  </span>
                  <svg
                    aria-hidden='true'
                    className='w-6 h-6'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                </button>
                <ul
                  id='dropdown-pages'
                  className={'py-2 space-y-2 ' + collapseShowList}
                >
                  {/* <li>
                  <Link
                    href='/center/new'
                    className='flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
                  >
                    Centros
                  </Link>
                </li>
                <li>
                  <Link
                    href='/category/new'
                    className='flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
                  >
                    Categorías
                  </Link>
                </li>
                <li>
                  <Link
                    href='/red/new'
                    className='flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
                  >
                    Redes
                  </Link>
                </li>
                <li>
                  <Link
                    href='/ubication/new'
                    className='flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
                  >
                    Ubicaciones
                  </Link>
                </li>
                <li>
                  <Link
                    href='/devicetype/new'
                    className='flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
                  >
                    Tipo de dispositivos
                  </Link>
                </li> */}
                  <li>
                    <Link
                      href='/device'
                      className='flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
                    >
                      Dispositivos
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  href='#'
                  className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'
                >
                  <svg
                    className='flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      d='M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                  <span className='flex-1 ml-3 whitespace-nowrap'>
                    Incidencias
                  </span>
                  <span className='inline-flex justify-center items-center w-4 h-4 md:w-5 text-xs font-semibold rounded-full text-primary-800 bg-primary-100 dark:bg-primary-200 dark:text-primary-800'>
                    6
                  </span>
                </Link>
              </li>
              <li>
                <button
                  type='button'
                  className='flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
                  aria-controls='dropdown-authentication'
                  data-collapse-toggle='dropdown-authentication'
                >
                  <svg
                    className='flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z'></path>
                  </svg>
                  <span className='flex-1 ml-3 text-left whitespace-nowrap'>
                    Usuarios
                  </span>
                  {/* <svg
                  aria-hidden='true'
                  className='w-6 h-6'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  ></path>
                </svg> */}
                </button>
                <ul
                  id='dropdown-authentication'
                  className='hidden py-2 space-y-2'
                >
                  <li>
                    <Link
                      href='#'
                      className='flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
                    >
                      Sign In
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='#'
                      className='flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
                    >
                      Sign Up
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='#'
                      className='flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
                    >
                      Forgot Password
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            {/* <ul className='pt-5 mt-5 space-y-2 border-t border-gray-200 dark:border-gray-700'>
            <li>
              <a
                href='#'
                className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group'
              >
                <svg
                  aria-hidden='true'
                  className='flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M9 2a1 1 0 000 2h2a1 1 0 100-2H9z'></path>
                  <path
                    fillRule='evenodd'
                    d='M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z'
                    clipRule='evenodd'
                  ></path>
                </svg>
                <span className='hidden md:block ml-3'>Docs</span>
              </a>
            </li>
            <li>
              <a
                href='#'
                className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group'
              >
                <svg
                  aria-hidden='true'
                  className='flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z'></path>
                </svg>
                <span className='hidden md:block ml-3'>Components</span>
              </a>
            </li>
            <li>
              <a
                href='#'
                className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group'
              >
                <svg
                  aria-hidden='true'
                  className='flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z'
                    clipRule='evenodd'
                  ></path>
                </svg>
                <span className='hidden md:block ml-3'>Help</span>
              </a>
            </li>
          </ul> */}
          </div>
        </div>

        <div className='flex flex-row bottom-0 left-0 justify-center p-4 lg:space-x-4 w-full bg-white dark:bg-gray-800 z-20'>
          <Link
            href='#'
            className='inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-600'
          >
            <svg
              aria-hidden='true'
              className='w-6 h-6 mx-auto'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z'></path>
            </svg>
          </Link>
          <Link
            href='#'
            data-tooltip-target='tooltip-settings'
            className='inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-600'
          >
            <svg
              aria-hidden='true'
              className='w-6 h-6 mx-auto'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z'
                clipRule='evenodd'
              ></path>
            </svg>
          </Link>
          <div
            id='tooltip-settings'
            role='tooltip'
            className='inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip'
          >
            Settings page
            <div className='tooltip-arrow' data-popper-arrow></div>
          </div>
          <button className='inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-600'>
            <svg
              className='w-6 h-6 text-gray-400 hover:text-white mx-auto'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z'
                clipRule='evenodd'
              />
            </svg>
          </button>
        </div>
      </aside>
    </>
  )
}

export default SideBar
