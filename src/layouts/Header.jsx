import React from 'react'
import Label from '../components/Label'
import { Link } from 'react-router-dom';
import Input from '../components/Input';

function Header() {
    return (
        <div className='flex flex-row px-20 w-full justify-around bg-fuchsia-200'>
            <div className='flex-1/5'>
                <Label string="Welcome to Flower Shop" style="font-serif text-xl" />
            </div>

            <div className='flex flex-row justify-around flex-2/5'>
                <Link to="/" className=''><Label string="Home" style="font-mono text-xl" /></Link>
                <Link to="/product" className=''><Label string="Product" style="font-mono text-xl" /></Link>
                <Label string="Collection" style="font-mono text-xl" />
            </div>

            <div className='flex flex-row flex-2/5 justify-around'>
                <Input className="" />
                <Label string="Cart" style="font-mono text-xl" />
            </div>


        </div>
    )
}

export default Header