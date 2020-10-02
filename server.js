const net = require('net') // step 1

const server = net.createServer() // step 2

const app = {
  listen: (port) => {
    server.listen(port, ()=> {
      console.log(`Server Started on`, server.address()) // step 3
    })
  }
}
module.exports = {app}