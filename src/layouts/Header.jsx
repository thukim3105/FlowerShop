import React, { useState } from 'react'
import Label from '../components/Label'
import { Link } from 'react-router-dom'
import Input from '../components/Input'

function Header() {
  const [showSearch, setShowSearch] = useState(false)

  return (
    <header className="w-full sticky top-0 z-50 bg-[rgba(251,249,245,0.7)] backdrop-blur-sm">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Branding (left) */}
        <div className="flex-shrink-0">
          <Link to="/" className="flex items-center gap-3">
            <span className="font-serif text-lg md:text-2xl text-[rgba(27,28,26,0.95)]">Flower Shop</span>
          </Link>
        </div>

        {/* Center nav (glassmorphic floating group) */}
          
            <Link to="/" className="px-3 py-2 rounded-full text-sm md:text-base font-manrope text-[rgba(27,28,26,0.9)] hover:bg-[rgba(43,105,84,0.12)]">
              Home
            </Link>
            <Link to="/product" className="px-3 py-2 rounded-full text-sm md:text-base font-manrope text-[rgba(27,28,26,0.9)] hover:bg-[rgba(43,105,84,0.12)]">
              Product
            </Link>
            <Link to="/collection" className="px-3 py-2 rounded-full text-sm md:text-base font-manrope text-[rgba(27,28,26,0.9)] hover:bg-[rgba(43,105,84,0.12)]">
              Collection
            </Link>

        {/* Right: search + cart (mobile-first, search collapses) */}
        <div className="flex items-center gap-3 flex-shrink-0">
          {/* Desktop input */}
          <div className="hidden md:block">
            <div className="bg-white rounded-md px-2 py-1 shadow-[0_6px_24px_rgba(27,28,26,0.04)]">
              <Input />
            </div>
          </div>

          {/* Mobile search toggle */}
          <button
            className="md:hidden px-3 py-2 bg-[rgba(43,105,84,0.08)] rounded-full text-sm text-[rgba(43,105,84,0.9)]"
            aria-label="Toggle search"
            onClick={() => setShowSearch(v => !v)}
          >
            Search
          </button>

          {/* Cart */}
          <Link to="/cart" className="px-3 py-2 rounded-full text-sm text-[rgba(27,28,26,0.95)]">
            Cart
          </Link>
        </div>
      </div>

      {/* Mobile search input (collapsible) */}
      {showSearch && (
        <div className="px-4 pb-3 md:hidden">
          <div className="bg-[rgb(255,255,255)] rounded-md px-2 py-2 shadow-[0_6px_24px_rgba(27,28,26,0.04)]">
            <Input />
          </div>
        </div>
      )}
    </header>
  )
}

export default Header