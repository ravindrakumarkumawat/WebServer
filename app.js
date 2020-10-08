const server = require('./server')

const serveStatic = require('./staticfiles')

const app = server()

app.use(serveStatic)
const port = 3000
app.listen(port, () => {
  console.log(`server is running on ${port}`)
})