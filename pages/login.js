import React from 'react'

export default function login() {
  return (
    <section className='h-screen bg-white dark:bg-gray-900'>
      <div className='px-6 h-full text-gray-800'>
        <div className='flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6'>
          <div className='grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0'>
            <img
              src='./img/computer.jpg'
              className='w-full md:max-h-80 lg:max-h-screen hidden md:block object-cover object-center shadow-xl opacity-75'
              alt='Sample image'
            />
          </div>
          <div className='xl:ml-20 w-10/12 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0 '>
            <form>
              {/* <!-- Email input --> */}
              <div className='mb-6'>
                <input
                  type='text'
                  className='form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                  id='email'
                  placeholder='Correo electrónico'
                />
              </div>

              {/* <!-- Password input --> */}
              <div className='mb-6'>
                <input
                  type='password'
                  className='form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                  id='password'
                  placeholder='Contraseña'
                />
              </div>

              <div className='flex justify-between items-center mb-6'>
                <div className='form-group form-check'>
                  <input
                    type='checkbox'
                    className='form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
                    id='rememberMe'
                  />
                  <label
                    className='form-check-label inline-block text-gray-800 dark:text-gray-200 cursor-pointer'
                    htmlFor='rememberMe'
                  >
                    Recórdarme
                  </label>
                </div>
                <a
                  href='#!'
                  className='text-gray-800 dark:text-gray-300 text-sm text-end
                '
                >
                  ¿Has olvidado la contraseña?
                </a>
              </div>

              <div className='text-center lg:text-left'>
                {session ? (
                  <button
                    type='button'
                    className='inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'
                    onClick={() => signOut()}
                  >
                    Salir
                  </button>
                ) : (
                  <button
                    type='button'
                    className='inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'
                    onClick={() => signIn()}
                  >
                    Acceder
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
