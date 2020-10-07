const path = require('path')
const app = require('./server')

const serveStatic = require('./staticfiles')

const dir = path.join(__dirname, 'Public')

const server = app()
const port = 3000
server.listen(port, () => {
  console.log(`server is running on ${port}`)
})