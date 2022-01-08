import React, { useState } from "react"
import iconLanguage from "../assets/material-language.png"

export default function ButtonLanguage() {
  const [language, setLaguage] = useState("")

  useState(() => {
    setLaguage("SPA")
  }, [])

  return (
    <div className="icon-language">
      <span className="menu-link text-white">
        <img src={iconLanguage} alt="language" width={15} style={{marginRight: 5}} />
        {language}
      </span>
    </div>
  )
}