// Tipos para mensajes WebSocket
export interface EditorMessage {
  type: 'init' | 'update' | 'sync' | 'cursor'
  payload: any
  timestamp: number
  clientId: string
}

// Estado del documento
export interface DocumentState {
  id: string
  content: string
  version: number
  lastModified: number
}

// Información del cliente
export interface ClientInfo {
  id: string
  name: string
  color: string
  cursor: CursorPosition
}

// Posición del cursor
export interface CursorPosition {
  line: number
  column: number
}

// Cambio CRDT
export interface CRDTOperation {
  type: 'insert' | 'delete'
  position: number
  content?: string
  timestamp: number
  clientId: string
}
