import React, { useState } from 'react'
import Footer from '../layouts/Footer'
import Header from '../layouts/Header'
import ProductHero from '../components/product/ProductHero'
import SidebarFilter from '../components/product/SidebarFilter'
import ProductGrid from '../components/product/ProductGrid'

function Product() {
  const [priceValue, setPriceValue] = useState(500000)

  return (
    <div className='min-h-screen bg-[#fbf9f5]'>
      <Header />

      <main className='pt-27 px-6 lg:px-24 pb-16'>
        <div className='mx-auto flex max-w-360 flex-col gap-14'>
          <ProductHero />

          <div className='grid gap-10 xl:grid-cols-[280px_minmax(0,1fr)]'>
            <SidebarFilter value={priceValue} onChange={(event) => setPriceValue(Number(event.target.value))} />
            <ProductGrid />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Product