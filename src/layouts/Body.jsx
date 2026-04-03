import React from 'react'
import Label from '../components/Label'
import Item from '../components/Item'

function Body() {
  return (
    <div className="w-full bg-[rgb(251,249,245)] p-[3%]">
      <div className='flex flex-row justify-between pt-[10%] '>
        <Label string={"New Arrivals"} style={"font-serif text-4xl items-end"} />
        <Label string={"EXPLORE ALL"} style="items-end"/>
      </div>
      <div className='flex h-screen py-5 justify-between'>
        <div className="w-1/2 pr-[5%]">
          <Item src="/img/lily.jpg" name="Lily" price="$85" />
        </div>
        <div className="w-1/3 flex flex-col">
          <Item src="/img/phalaenopsis-orchids.jpg" name="Phalaenopsis orchids" price="$85" className="h-1/2" />
          <Item src="/img/lavender.jpg" name="Lavender" price="$85" className="h-1/2" />
        </div>
      </div>
    </div>
  )
}

export default Body