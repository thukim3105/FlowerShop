import React from 'react'

function Button({ children, className = '', variant = 'primary', ...props }) {
  const baseStyles = 'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#2b6954] focus:ring-offset-2'
  const variantStyles = variant === 'secondary' ? 'bg-white text-[#1b1c1a] border border-[#d3c8be] hover:bg-[#faf7f4]' : 'bg-[#2b6954] text-white hover:bg-[#244f3c]'

  return (
    <button className={`${baseStyles} ${variantStyles} ${className}`} {...props}>
      {children}
    </button>
  )
}

export default Button
