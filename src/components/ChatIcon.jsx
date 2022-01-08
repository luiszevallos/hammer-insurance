import React from "react"
import ImageChat from "../assets/chat.png"

export default function ChatIcon() {
  return (
    <div className="container-chat">
      <div className="chat-button">
        <div className="chat-text">
          <span className="text-message text-small">¿En qué podemos ayudarte?</span>
          <span className="text-message text-small">Chatea con nosotros</span>
        </div>
        <img src={ImageChat} alt="Chat" width={32} />
      </div>
    </div>
  )
}