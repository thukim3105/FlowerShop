import React from 'react'
import { useParams, Link } from 'react-router-dom'
import ProductHero from '../components/sections/ProductDetail/ProductHero'
import ProductDescription from '../components/sections/ProductDetail/ProductDescription'
import ProductAttributes from '../components/sections/ProductDetail/ProductAttributes'
import CareSection from '../components/sections/ProductDetail/CareSection'
import ReviewsSection from '../components/sections/ProductDetail/ReviewsSection'
import RelatedProducts from '../components/sections/ProductDetail/RelatedProducts'
import { getProductById, getRelatedProducts } from '../data/productDetailData'

function ProductDetail() {
  const { id } = useParams()
  const product = getProductById(id)

  if (!product) {
    return (
      <main className="min-h-[60vh] px-6 py-24 text-center sm:px-10">
        <h1 className="font-serif text-3xl text-[#1b1c1a]">Product not found</h1>
        <p className="mt-4 text-sm leading-7 text-[#5b6c57]">The product you are looking for does not exist or has been removed.</p>
        <Link to="/" className="mt-8 inline-flex rounded-full bg-[#2b6954] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#244f3c]">
          Return to catalog
        </Link>
      </main>
    )
  }

  return (
    <main className="bg-[#fbf9f5] px-6 py-12 lg:px-24 lg:py-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-16">
        <ProductHero data={product} />

        <div className="grid gap-8 lg:grid-cols-[1.4fr_0.85fr]">
          <ProductDescription data={product.detail} />
          <ProductAttributes attributes={product.attributes} />
        </div>

        <CareSection items={product.careItems} />

        <ReviewsSection reviews={product.reviews} rating={product.rating} />

        <RelatedProducts products={getRelatedProducts(product.id)} />
      </div>
    </main>
  )
}

export default ProductDetail