const net = require('net') // step 1

const server = net.createServer() // step 2
const host = 'localhost'

const createServer = (port) => {
  server.listen(port, ()=> {
    console.log(`Server is running on http://${host}:${port}`)
  })
}

const app = {
  listen: (port) => {
    createServer(port)
  }
}
module.exports = {app}