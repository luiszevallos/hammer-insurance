import React from "react"

export default function BackgroundTransparent(props) {
  const {onClick} = props
  return <div className='container-transparent' onClick={onClick} />
}