# Realtime Collaborative Engine
Sistema de edición colaborativa en tiempo real inspirado en Google Docs.

## Objetivo
Construir una aplicación donde múltiples usuarios puedan editar un documento simultáneamente sin conflictos, utilizando CRDTs para garantizar consistencia.

---

## Conceptos clave
- **Realtime comunication**: WebSockets
- **Consistencia eventual**
- **CRDT (Conflict-free Replicated Data Types)**
- **Sincronización de estado distribuido**

---

## Arquitectura
[Frontend React]
      ↓ (WebSocket)
[Realtime Server (Node)]
      ↓
[CRDT Engine (Yjs)]
      ↓
[Persistence (Redis/PostgreSQL)]

---

## Stack tecnológico
### Frontend
- React + TypeScript
- WebSocket client
- Editor (`contenteditable`o ProseMirror)

### Backend
- Node.js + TypeScript
- WebSocket (`ws` o `socket.io`)

### Motor de sincronización
- Yjs (CRDT)

### Persistencia
- Redis (recomendado para MVP)
- PostgreSQL (opcional para producción)

---

## Flujo de datos
1. Usuario escribe en el editor
2. Se genera un cambio CRDT
3. Se envía al servidor vía WebSocket
4. El servidor lo distribuye a otros clientes
5. Cada cliente aplica el cambio
6. Todos los clientes convergen al mismo estado

---

## Estructura del proyecto
realtime-collaborative-engine/
├─ client/
│ ├─ src/
│ │ ├─ components/
│ │ ├─ editor/
│ │ └─ websocket/
│ └─ package.json
│
├─ server/
│ ├─ src/
│ │ ├─ websocket/
│ │ ├─ crdt/
│ │ └─ persistence/
│ └─ package.json
│
├─ shared/
│ └─ types/
│
└─ README.md

---

## Roadmap
### Fase 1 - MVP básico
- [ ] WebSocket server funcionando
- [ ] Cliente conectado
- [ ] Broadcast de mensajes básico

### Fase 2 - Sincronización real
- [ ] Integrar Yjs
- [ ] Sincromización de documento en tiempo real
- [ ] Evitar sobreescrituras
      
### Fase 3 - Persistencia
- [ ] Guardar estado del documento
- [ ] Restaurar documento al reconectar
- [ ] Manejar múltiples usuarios

### Fase 4 - Robustez
- [ ] Manejo de reconexión
- [ ] Estado inicial para nuevos clientes
- [ ] Manejo de latencia

### Fase 5 - Features avanzadas
- [ ] Cursores de otros usuarios
- [ ] Historial de cambios
- [ ] Permisos (read/write)
- [ ] Offline support

---

## Problemas técnicos clave
- Conflictos simultáneos de edición
- Orden de mensajes en red
- Reconexión de clientes
- Sincronización inicial
- Escalabilidad del servidor


## Ejecución local

### Backend
```bash
  cd server
  npm install
  npm run dev
```

### Frontend
```bash
  cd server
  npm install
  npm run dev
```
