import React, { useContext } from "react"
import { StateContext } from "../contexts/useStateContext"

export default function Logo() {
  const { state } = useContext(StateContext);
  const { bussinesName, description } = state;
  return (
    <div className="logo-container">
      <span className="logo-title">{bussinesName}</span>
      <span className="logo-description">{description}</span>
    </div>
  )
}