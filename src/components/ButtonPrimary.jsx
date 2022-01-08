import React from "react"

export default function ButtonPrimary(props) {
  const { label, light, auto } = props

  return (
    <button
      className={
        `button-primary ${light && "button-primary button-light"} ${auto && "button-auto"}`
      }
    >
      <span>{label}</span>
    </button>
  )
}