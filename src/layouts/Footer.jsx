import React from 'react'
import Label from '../components/Label'

function Footer() {
    return (
        <footer className='w-full bg-[#f5f3ef] py-16'>
            <div className='max-w-6xl mx-auto px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
                <div className='space-y-4'>
                    <Label string="The Flower Shop" style="font-serif text-2xl" />
                    <Label string="Hand-crafted bouquets inspired by seasonal motion and editorial styling." style="text-sm text-[#566342]" />
                </div>
                <div className='space-y-2'>
                    <Label string="SHOP" style="font-medium uppercase tracking-widest text-xs text-[#2b6954]" />
                    <Label string="COLLECTION" style="text-sm text-[#1b1c1a]" />
                    <Label string="OCCASIONS" style="text-sm text-[#1b1c1a]" />
                    <Label string="WORKSHOP" style="text-sm text-[#1b1c1a]" />
                </div>
                <div className='space-y-2'>
                    <Label string="RESOURCES" style="font-medium uppercase tracking-widest text-xs text-[#2b6954]" />
                    <Label string="SUSTAINABILITY" style="text-sm text-[#1b1c1a]" />
                    <Label string="CARE GUIDE" style="text-sm text-[#1b1c1a]" />
                    <Label string="SHIPPING" style="text-sm text-[#1b1c1a]" />
                </div>
                <div className='space-y-2'>
                    <Label string="CONNECT" style="font-medium uppercase tracking-widest text-xs text-[#2b6954]" />
                    <Label string="INSTAGRAM" style="text-sm text-[#1b1c1a]" />
                    <Label string="PINTEREST" style="text-sm text-[#1b1c1a]" />
                    <Label string="PRIVACY" style="text-sm text-[#1b1c1a]" />
                </div>
            </div>
            <div className='mt-10 border-t border-[#e9e5df] pt-6 text-center text-xs text-[#566342]'>
                © {new Date().getFullYear()} The Flower Shop — Crafted with care, naturally.
            </div>
        </footer>
    )
}

export default Footer