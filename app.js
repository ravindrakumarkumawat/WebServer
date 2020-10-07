const path = require('path')
const app = require('./server')

const server = app()
const port = 3000
server.listen(port, () => {
  console.log(`server is running on ${port}`)
})