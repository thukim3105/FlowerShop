import React from 'react'

function Body({ children }) {
  return (
    <div className="w-full bg-[rgb(251,249,245)]">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-6">{children}</div>
    </div>
  )
}

export default Body