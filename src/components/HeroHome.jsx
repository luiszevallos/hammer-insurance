import React, { useContext } from "react"
import { StateContext } from "../contexts/useStateContext"
import CarCollage from "../assets/CarCollage.png"
import ButtonPrimary from "./ButtonPrimary"

export default function HeroHome(props) {
  const { state } = useContext(StateContext);
  const { bussinesName, description } = state;

  return (
    <section className="hero-home">
      <div className="hero-left">
        <div className="hero-message">
          <span className="text-message text-light">
            Seguro integral en el que puedes confiar
          </span>
          <span className="text-title text-large">
            Confía en {bussinesName}
          </span>
          <span className="text-title text-large">
            {description} ¡somos vecinos!
          </span>
          <span className="text-message">
            Calidad en el trato al cliente y los mejores precios de mercado.
          </span>
          <span className="text-message">
            amplias coberturas y facilidad en los pagos
          </span>
        </div>
        <div className="hero-buttons">
          <ButtonPrimary label="Servicios" light />
          <ButtonPrimary label="solicitar Presupuesto" />
        </div>
      </div>
      <div className="hero-right">
        <img
          src={CarCollage}
          className="hero-image-car"
          alt="car collage"
        />
      </div>
    </section>
  )
}