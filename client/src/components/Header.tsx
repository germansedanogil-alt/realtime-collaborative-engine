import React from 'react'
import '../styles/Header.css'

interface HeaderProps {
  title?: string
  connected?: boolean
  userCount?: number
}

const Header: React.FC<HeaderProps> = ({ 
  title = 'Editor Colaborativo', 
  connected = false,
  userCount = 0 
}) => {
  return (
    <header className="header">
      <div className="header-left">
        <div className="logo">
          <span className="logo-icon">📝</span>
          <h1>{title}</h1>
        </div>
      </div>

      <div className="header-right">
        {userCount > 0 && (
          <div className="user-count">
            <span className="user-icon">👥</span>
            <span className="user-text">{userCount} {userCount === 1 ? 'usuario' : 'usuarios'}</span>
          </div>
        )}

        <div className={`connection-status ${connected ? 'connected' : 'disconnected'}`}>
          <span className="status-dot"></span>
          <span className="status-text">
            {connected ? 'Conectado' : 'Desconectado'}
          </span>
        </div>
      </div>
    </header>
  )
}

export default Header
