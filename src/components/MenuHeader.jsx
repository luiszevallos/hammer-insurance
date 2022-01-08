import React from 'react'
import BackgroundTransparent from './BackgroundTransparent'

export default function MenuHeader(props) {
  const { active, onClick } = props

  return (
    <>
      {active && <BackgroundTransparent onClick={onClick} />}
      <nav className={`${active ? "active " : ''}menu-header`}>
        <ul>
          <li className="menu-link">Servicios</li>
          <li className="menu-link">Pagos</li>
          <li className="menu-link">Oficinas</li>
          <li className="menu-link">Blog</li>
          <li className="menu-link text-white">Nosotros</li>
          <li className="menu-link text-white">Contacto</li>
          <li className="menu-link border-link text-white">Pedir Prosupuesto</li>
        </ul>
      </nav>
    </>
  )
}
