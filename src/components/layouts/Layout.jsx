import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import Logo from "../Logo"
import ChatIcon from "../ChatIcon"
import MenuHeader from "../MenuHeader"
import ButtonLanguage from "../ButtonLanguage"

export default function Layout(props) {
  const { children } = props
  return (
    <>
      <header className="header">
        <div className="button-menu">
          <MenuIcon sx={{ color: '#59a5e3', fontSize: 30 }} />
        </div>
        <Logo />
        <MenuHeader />
        <ButtonLanguage />
      </header>
      {children}
      <ChatIcon />
    </>
  )
}
