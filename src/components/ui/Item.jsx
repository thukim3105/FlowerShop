import React from 'react'
import Label from './Label'

function Item({ image, title, description, price, layoutType = 'thumbnail' }) {
  const isFeatured = layoutType === 'featured'
  const containerClass = isFeatured ? 'rounded-3xl overflow-hidden shadow-[0_0_32px_rgba(27,28,26,0.06)]' : 'rounded-xl overflow-hidden shadow-[0_0_18px_rgba(27,28,26,0.06)]'
  const textContainer = isFeatured ? 'p-6 md:p-8' : 'p-4'
  const titleClass = isFeatured ? 'font-serif text-2xl md:text-3xl text-[#1b1c1a]' : 'font-serif text-xl text-[#1b1c1a]'
  const descClass = isFeatured ? 'mt-1 text-sm md:text-base text-[#566342]' : 'mt-1 text-xs text-[#715953]'

  return (
    <div className={`flex flex-col bg-white ${containerClass}`}>
      <div className='w-full h-full'>
        <img src={image} alt={title} className='w-full h-auto object-cover' />
      </div>
      <div className={textContainer}>
        <div className={titleClass}>{title}</div>
        {description && <div className={descClass}>{description}</div>}
        <div className='mt-3 font-semibold text-[#2b6954]'>{price}</div>
      </div>
    </div>
  )
}

export default Item