import { useState, useEffect, useRef } from 'react'
import Header from './components/Header'
import Toolbar from './components/Toolbar'
import './App.css'

function App() {
  const [connected, setConnected] = useState(false)
  const [userCount, setUserCount] = useState(0)
  const editorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // TODO: Conectar con WebSocket del servidor
    console.log('Cliente iniciado')
  }, [])

  return (
    <div className="app">
      <Header 
        title="Editor Colaborativo" 
        connected={connected} 
        userCount={userCount}
      />

      <main>
        <div className="editor-container">
          <Toolbar editorRef={editorRef} />
          {/* TODO: Implementar editor con Yjs */}
          <div 
            ref={editorRef}
            contentEditable 
            className="editor"
            suppressContentEditableWarning
          >
            Escribe aquí...
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
