import React from 'react'
import Card from '../../ui/Card'
import Rating from '../../ui/Rating'

function ReviewsSection({ reviews, rating }) {
    return (
        <section className="space-y-8">
            <div className="flex flex-col items-center gap-4 text-center">
                <h2 className="font-serif text-3xl text-[#1b1c1a]">Kind Words</h2>
                <Rating value={rating} />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                {reviews.map((review) => (
                    <Card key={review.name} className="space-y-4">
                        <h3 className="font-semibold text-lg text-[#1b1c1a]">{review.name}</h3>
                        <p className="text-sm leading-7 text-[#5b6c57]">{review.text}</p>
                    </Card>
                ))}
            </div>
        </section>
    )
}

export default ReviewsSection
