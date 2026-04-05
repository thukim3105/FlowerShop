import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Input from '../components/ui/Input'
import { CartIcon, SearchIcon } from '../components/icons'

function Header() {
  const [showSearch, setShowSearch] = useState(false)
  const [activeMenu, setActiveMenu] = useState('HOME')

  const navItems = [
    { label: "HOME", path: "/" },
    { label: "COLLECTIONS", path: "/product" },
    { label: "OCCASIONS", path: "/" },
    { label: "JOURNAL", path: "/" },
  ];


  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Glassmorphic background */}
      <div className="absolute inset-0 bg-[rgba(251,249,245,0.65)] backdrop-blur-[20px]"></div>

      {/* Navigation container */}
      <nav className="relative flex items-center justify-between px-8 lg:px-24 py-4 lg:py-6">

        {/* Left: Brand Logo */}
        <div className="shrink-0 flex-1">
          <Link to="/" className="inline-flex items-center gap-3">
            <img src="/img/logo.png" alt="FlowerShop logo" className="w-8 h-8 object-contain" />
            <span className="font-serif text-lg lg:text-xl italic text-[#1b1c1a]">
              FlowerShop
            </span>
          </Link>
        </div>

        {/* Center: Navigation Menu */}
        <ul className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 gap-8">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                to={item.path}
                onClick={() => setActiveMenu(item.label)}
                className={`text-xs tracking-[0.08rem] font-manrope font-medium uppercase transition-colors duration-300 relative pb-2 ${activeMenu === item.label
                  ? 'text-[#2b6954]'
                  : 'text-[#1b1c1a] hover:text-[#2b6954]'
                  }`}
              >
                {item.label}

                {activeMenu === item.label && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2b6954]" />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right: Actions (Search + Cart) */}
        <div className="flex items-center gap-4 lg:gap-6 shrink-0 flex-1 justify-end">

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
          <Input />
        </div>
      )}

      {/* Mobile Navigation Menu */}
      <div className="lg:hidden border-t border-[rgba(43,105,84,0.1)] px-8 py-3">
        <ul className="flex flex-wrap gap-4">
          {navItems.map((item) => (
            <li key={item.label}>
              <button
                onClick={() => setActiveMenu(item.label)}
                className={`text-xs tracking-[0.06rem] font-manrope font-medium uppercase transition-colors ${activeMenu === item.label
                  ? 'text-[#2b6954] font-semibold'
                  : 'text-[#1b1c1a] hover:text-[#2b6954]'
                  }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

export default Header