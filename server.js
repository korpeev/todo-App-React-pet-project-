const jsonServer = require("json-server")
const db = require("./src/assets/db.json")
const router = jsonServer.router(db)
const server = jsonServer.create()
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)
server.listen(3000, () => {
  console.log("started")
})
