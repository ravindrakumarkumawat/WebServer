const net = require('net') // step 1

const server = net.createServer() // step 2
const host = 'localhost'

const middlewares = []
const createServer = async (port, fn) => {
  await server.listen(port, ()=> {
    console.log(`Server is running on http://${host}:${port}`)
  })
  fn()
}

const app = () => {
  const obj = {}
  obj.listen = (port, fn) => createServer(port, fn)
  obj.use = (middleware) => middlewares.push(middleware)
 
  return obj
}
module.exports = app