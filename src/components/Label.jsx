import React from 'react'

function Label(props) {
  return (
    <div className={`flex items-center justify-center ${props.style}`}>{props.string}</div>
  )
}

export default Label