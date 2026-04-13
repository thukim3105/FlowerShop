import React from 'react'

function Card({ children, className = '', ...props }) {
    return (
        <div
            className={`rounded-4xl bg-white p-6 transition duration-300 shadow-[0_32px_80px_rgba(27,28,26,0.14)] ${className}`}
            {...props}
        >
            {children}
        </div>
    )
}

export default Card
