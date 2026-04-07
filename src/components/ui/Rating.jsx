import React from 'react'
import { FiStar } from 'react-icons/fi'

function Rating({ value, max = 5, className = '' }) {
    const stars = Array.from({ length: max }, (_, index) => index + 1)

    return (
        <div className={`flex items-center gap-3 ${className}`}>
            <div className="flex items-center gap-1 text-[#f2c94c]">
                {stars.map((star) => (
                    <FiStar
                        key={star}
                        className={star <= Math.round(value) ? 'h-5 w-5' : 'h-5 w-5 opacity-40'}
                    />
                ))}
            </div>
            <span className="text-lg font-semibold text-[#1b1c1a]">{value.toFixed(1)}</span>
        </div>
    )
}

export default Rating
