import React from 'react'
import Label from '../components/Label'

function Intro() {
  return (
    <div className="bg-[url('/img/background.jpg')] bg-cover bg-center h-[50vh] flex flex-col justify-center items-start pl-[10%]">
        <Label string="SUMMER COLLECTION 2026" style="font-mono text-xl" />
        <Label string="Send Love" style="font-mono text-4xl"/>
        <Label string="with Flowers" style="font-['Times_New_Roman'] italic text-4xl"/>
    </div>
  )
}

export default Intro