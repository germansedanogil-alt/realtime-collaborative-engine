import { WebSocketServer } from 'ws'

const PORT = 8080

const wss = new WebSocketServer({ port: PORT })

console.log(`🚀 WebSocket servidor escuchando en ws://localhost:${PORT}`)

wss.on('connection', (ws) => {
  console.log('✅ Cliente conectado')
  
  ws.on('message', (data) => {
    console.log('📨 Mensaje recibido:', data)
    
    // Reenviar a todos los clientes excepto el que lo envió
    wss.clients.forEach((client) => {
      if (client.readyState === 1 && client !== ws) {
        client.send(data)
      }
    })
  })
  
  ws.on('close', () => {
    console.log('❌ Cliente desconectado')
  })
  
  ws.on('error', (error) => {
    console.error('⚠️ Error en conexión:', error)
  })
})
