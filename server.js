const net = require('net') // step 1

const server = net.createServer() // step 2
const host = 'localhost'

const app = {
  listen: (port) => {
    server.listen(port, ()=> {
      console.log(`Server is running on http://${host}:${port}`)
    })
  }
}
module.exports = {app}