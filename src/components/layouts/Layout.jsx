import React, { useState, useEffect } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import Logo from "../Logo"
import ChatIcon from "../ChatIcon"
import MenuHeader from "../MenuHeader"
import ButtonLanguage from "../ButtonLanguage"

export default function Layout(props) {
  const [active, setActive] = useState(false);
  const { children } = props

  useEffect(() => setActive(false), [])

  return (
    <>
      <header className="header">
        <div className="button-menu" onClick={() => setActive(!active)}>
          <MenuIcon sx={{ color: '#59a5e3', fontSize: 30 }} />
        </div>
        <Logo />
        <MenuHeader
          active={active}
          onClick={() => setActive(!active)}
        />
        <ButtonLanguage />
      </header>
      {children}
      <ChatIcon />
    </>
  )
}
