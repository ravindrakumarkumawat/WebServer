const http = require('http')
const host = 'localhost'
const port = 8000

const requestListner = function (req, res) {
  res.writeHead(200)
  res.end('My first http server')
}