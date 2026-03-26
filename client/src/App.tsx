import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [connected, setConnected] = useState(false)
  const [message, setMessage] = useState('')

  useEffect(() => {
    // TODO: Conectar con WebSocket del servidor
    console.log('Cliente iniciado')
  }, [])

  return (
    <div className="app">
      <header>
        <h1>Editor Colaborativo</h1>
        <div className={`status ${connected ? 'connected' : 'disconnected'}`}>
          {connected ? '🟢 Conectado' : '🔴 Desconectado'}
        </div>
      </header>
      <main>
        <div className="editor-container">
          {/* TODO: Implementar editor con Yjs */}
          <div contentEditable className="editor">
            Escribe aquí...
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
