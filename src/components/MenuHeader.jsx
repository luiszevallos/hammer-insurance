import React from 'react'

export default function MenuHeader() {
  return (
    <nav className="menu-header">
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
  )
}
