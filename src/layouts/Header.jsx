import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Input from '../components/Input'

function Header() {
  const [showSearch, setShowSearch] = useState(false)
  const [activeMenu, setActiveMenu] = useState('COLLECTIONS')

  const navItems = ['COLLECTIONS', 'WORKSHOPS', 'OCCASIONS', 'JOURNAL']

  const SearchIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  )

  const CartIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  )

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Glassmorphic background */}
      <div className="absolute inset-0 bg-[rgba(251,249,245,0.65)] backdrop-blur-[20px]"></div>

      {/* Navigation container */}
      <nav className="relative flex items-center justify-between px-8 lg:px-24 py-4 lg:py-6">
        
        {/* Left: Brand Logo */}
        <div className="flex-shrink-0 flex-1">
          <Link to="/" className="inline-block">
            <span className="font-serif text-lg lg:text-xl italic text-[#1b1c1a]">
              The Botanical Editorial
            </span>
          </Link>
        </div>

        {/* Center: Navigation Menu */}
        <ul className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 gap-8">
          {navItems.map((item) => (
            <li key={item}>
              <button
                onClick={() => setActiveMenu(item)}
                className={`text-xs tracking-[0.08rem] font-manrope font-medium uppercase transition-colors duration-300 relative pb-2 ${
                  activeMenu === item
                    ? 'text-[#2b6954]'
                    : 'text-[#1b1c1a] hover:text-[#2b6954]'
                }`}
              >
                {item}
                {activeMenu === item && (
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#2b6954]"></div>
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Right: Actions (Search + Cart) */}
        <div className="flex items-center gap-4 lg:gap-6 flex-shrink-0 flex-1 justify-end">
          
          {/* Desktop Search */}
          <div className="hidden lg:block">
            <button
              className="p-2 text-[#1b1c1a] hover:text-[#2b6954] transition-colors"
              aria-label="Search"
            >
              <SearchIcon />
            </button>
          </div>

          {/* Mobile Search Toggle */}
          <button
            className="lg:hidden p-2 text-[#1b1c1a] hover:text-[#2b6954] transition-colors"
            aria-label="Toggle search"
            onClick={() => setShowSearch(!showSearch)}
          >
            <SearchIcon />
          </button>

          {/* Cart with Badge */}
          <Link
            to="/cart"
            className="relative p-2 text-[#1b1c1a] hover:text-[#2b6954] transition-colors"
            aria-label="Shopping cart"
          >
            <CartIcon />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#715953] text-white text-xs rounded-full flex items-center justify-center font-manrope">
              2
            </span>
          </Link>
        </div>
      </nav>

      {/* Mobile Search Input (Collapsible) */}
      {showSearch && (
        <div className="lg:hidden border-t border-[rgba(43,105,84,0.1)] px-8 py-4">
          <Input placeholder="Search flowers..." />
        </div>
      )}

      {/* Mobile Navigation Menu */}
      <div className="lg:hidden border-t border-[rgba(43,105,84,0.1)] px-8 py-3">
        <ul className="flex flex-wrap gap-4">
          {navItems.map((item) => (
            <li key={item}>
              <button
                onClick={() => setActiveMenu(item)}
                className={`text-xs tracking-[0.06rem] font-manrope font-medium uppercase transition-colors ${
                  activeMenu === item
                    ? 'text-[#2b6954] font-semibold'
                    : 'text-[#1b1c1a] hover:text-[#2b6954]'
                }`}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

export default Header