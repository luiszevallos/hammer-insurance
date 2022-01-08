import React, { useContext } from "react"
import { StateContext } from "../contexts/useStateContext"
import CarouselServices from "./CarouselServices"

export default function ServiceHome() {
  const { state } = useContext(StateContext);
  const { bussinesName, description } = state;

  return (
    <section className="service-home">
      <span className="text-message text-light text-center">
        Servicios
      </span>
      <span className="text-title text-center">
        {`Tu agente cercano: en ${bussinesName} ${description} nadie se queda atrás`}
      </span>
      <span className="text-message text-center">
        {`En ${bussinesName} ${description} siempre hablamos tu idioma conocemos tu comunidad, somos vecinos.`}
      </span>
      <CarouselServices />
    </section>
  )
}