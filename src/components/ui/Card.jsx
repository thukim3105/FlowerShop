import React from 'react'

function Card({ children, className = '', ...props }) {
    return (
        <div
            className={`rounded-[2rem] bg-white p-6 shadow-[0_24px_56px_rgba(27,28,26,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_32px_80px_rgba(27,28,26,0.14)] ${className}`}
            {...props}
        >
            {children}
        </div>
    )
}

export default Card
