const net = require('net') // step 1

const server = net.createServer() // step 2

const app = {
  listen: (port) => {
    server.listen(port, ()=> {
      console.log(`Server Started on -->`, server.address()) // step 3
      console.log('Server is working...')
    })
  }
}
module.exports = {app}