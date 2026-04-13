import React from 'react'
import Button from '../ui/Button'

function AboutSection({ title, description, image, reverse = false, ctaText }) {
  return (
    <div className={`flex flex-col gap-10 lg:gap-14 ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center`}
      >
      <div className="w-full lg:w-1/2">
        <div className="max-w-2xl space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1b1c1a] leading-tight">
            {title}
          </h2>
          <p className="text-base leading-8 text-[#5b6c57]">
            {description}
          </p>
          {ctaText ? (
            <Button className="rounded-full px-8 py-3" variant="secondary" type="button">
              {ctaText}
            </Button>
          ) : null}
        </div>
      </div>

      <div className="w-full lg:w-1/2 overflow-hidden rounded-[1.75rem] shadow-[0_24px_56px_rgba(27,28,26,0.08)]">
        <img
          src={image}
          alt={title}
          className="h-[300px] w-full object-cover"
        />
      </div>
    </div>
  )
}

export default AboutSection
