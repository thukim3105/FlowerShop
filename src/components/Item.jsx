import React from 'react'
import Label from './Label'

function Item(props) {
  return (
    <div className="flex flex-col">
        <div className='w-full h-auto'>
            <img src={props.src} className="w-full h-auto"/>
        </div>
        <div className='flex flex-row justify-between font-serif text-xl pr-[5%] py-4'>
            <Label string={props.name}/>
            <Label string={props.price}/>
        </div>
    </div>
  )
}

export default Item