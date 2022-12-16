import React from 'react'

export function Title({ children }) {
  return (
    <h1 className='text-2xl font-bold text-gray-900 dark:text-white mb-10'>
      {children}
    </h1>
  )
}

export function ButtonGroup({ children }) {
  return (
    <div className='flex flex-row items-center justify-end gap-2'>
      {children}
    </div>
  )
}
