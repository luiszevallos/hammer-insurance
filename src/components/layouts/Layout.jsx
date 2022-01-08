import React from 'react'
import MenuHeader from "../MenuHeader"
import Logo from "../Logo"

export default function Layout(props) {
  const { children } = props
  return (
    <>
      <header className="header">
        <Logo />
        <MenuHeader />
        <div>idioma</div>
      </header>
      {children}
    </>
  )
}
