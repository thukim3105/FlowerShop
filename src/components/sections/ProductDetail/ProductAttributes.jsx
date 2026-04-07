import React from 'react'
import Card from '../../ui/Card'

function ProductAttributes({ attributes }) {
    return (
        <Card className="space-y-6">
            <div>
                <h2 className="font-serif text-3xl text-[#1b1c1a]">Attributes</h2>
                <p className="mt-3 max-w-sm text-sm leading-7 text-[#5b6c57]">A thoughtfully selected floral profile to balance texture, scent, and softness.</p>
            </div>

            <ul className="space-y-4">
                {attributes.map((attribute) => (
                    <li key={attribute} className="flex items-start gap-3 text-sm text-[#1b1c1a]">
                        <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#2b6954]" />
                        <span>{attribute}</span>
                    </li>
                ))}
            </ul>
        </Card>
    )
}

export default ProductAttributes
