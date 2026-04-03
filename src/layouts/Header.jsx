import React, { useState } from 'react'
import Label from '../components/Label'
import { Link } from 'react-router-dom'
import Input from '../components/Input'

function Header() {
  const [showSearch, setShowSearch] = useState(false)

  return (
    <header className="w-full bg-fuchsia-200 px-4 py-3 shadow-sm">
      <div className="max-w-screen-xl mx-auto flex items-center gap-4">
        {/* Branding - left */}
        <div className="flex-shrink-0">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-serif text-lg md:text-2xl">Flower Shop</span>
          </Link>
        </div>

        {/* Center navigation - mobile-first: visible as 3-button group */}
        <nav className="flex-1 flex justify-center">
          <div className="flex gap-2 bg-transparent rounded-md">
            <Link to="/" className="px-3 py-2 rounded-md text-sm md:text-base bg-white/20 hover:bg-white/30">
              Home
            </Link>
            <Link to="/product" className="px-3 py-2 rounded-md text-sm md:text-base bg-white/20 hover:bg-white/30">
              Product
            </Link>
            <Link to="/collection" className="px-3 py-2 rounded-md text-sm md:text-base bg-white/20 hover:bg-white/30">
              Collection
            </Link>
          </div>
        </nav>

        {/* Right: search (collapsible on mobile) and cart */}
        <div className="flex items-center gap-3 flex-shrink-0">
          {/* Search button - on mobile toggles input; on md+ shows input inline */}
          <div className="flex items-center">
            {/* input visible on md+ */}
            <div className="hidden md:block md:mr-2">
              <Input />
            </div>

            {/* toggle button for mobile */}
            <button
              className="md:hidden px-2 py-1 bg-white/20 rounded-md"
              aria-label="Toggle search"
              onClick={() => setShowSearch(v => !v)}
            >
              Search
            </button>
          </div>

          <Link to="/cart" className="px-3 py-2 bg-white/20 rounded-md text-sm md:text-base">
            Cart
          </Link>
        </div>
      </div>

      {/* Mobile search input (collapsible, full width) */}
      {showSearch && (
        <div className="mt-2 px-4 md:hidden">
          <Input />
        </div>
      )}
    </header>
  )
}

export default Header