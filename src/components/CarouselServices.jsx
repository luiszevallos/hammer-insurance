import React, { useContext } from "react"
import { StateContext } from "../contexts/useStateContext"
import ButtonPrimary from "./ButtonPrimary"

export default function CarouselServices() {
  const { state } = useContext(StateContext)
  const { services } = state
  return (
    <div className="carousel-services">
      {services.map(service => (
        <div className="item-service">
          <span className="text-title">{service.name}</span>
          <p className="text-message">{service.description}</p>
          <div>
            <ButtonPrimary label="Ver más"/>
          </div>
          <div>
            <img className="service-image" src={service.url_image} alt={service.name} />
          </div>
        </div>
      ))}
    </div>
  )
}
