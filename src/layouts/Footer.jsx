import React from 'react'
import Label from '../components/Label'

function Footer() {
    return (
        <div className='flex flex-row justify-between px-[10%] pt-20 bg-[rgba(251,249,245,0.65)]'>
            <div className='flex flex-col'>
                <Label string="The Flower Shop" style="font-serif text-xl"/>
            </div>
            <div className=''>
                <Label string="SHOP" style="pb-4"/>
                <Label string="COLLECTION" style="pb-2"/>
                <Label string="OCCASIONS" style="pb-2"/>
                <Label string="WORKSHOP" style="pb-2"/>
            </div>
            <div className=''>
                <Label string="RESOURCES" style="pb-4"/>
                <Label string="SUSTAINABILITY" style="pb-2"/>
                <Label string="CARE GUIDE" style="pb-2"/>
                <Label string="SHIPPING" style="pb-2"/>
            </div>
            <div>
                <Label string="CONNECT" style="pb-4"/>
                <Label string="INSTAGRAM" style="pb-2"/>
                <Label string="PINTEREST" style="pb-2"/>
                <Label string="PRIVACY" style="pb-2"/>
            </div>
        </div>
    )
}

export default Footer