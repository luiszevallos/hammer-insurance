import React from 'react'
import Fondo from "../assets/FondoHome.png"
import HeroHome from "../components/HeroHome"
import ServiceHome from "../components/ServiceHome"

export default function HomeScreen() {
  return (
    <>
      <div className="container-image">
        <img
          src={Fondo}
          alt="fondo"
          className="image-home"
        />
      </div>
      <main className="container">
        <HeroHome />
        ranking
        <ServiceHome />
      </main>
    </>
  )
}
