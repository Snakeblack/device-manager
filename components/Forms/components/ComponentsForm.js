import React from 'react'

export function Title({ children }) {
  return (
    <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-10">
      {children}
    </h1>
  )
}