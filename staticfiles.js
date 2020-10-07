const path = require('path')
const fs = require('fs').promises
const serveStatic = dir => {
  return async (req, res) => {
    try {
      
    } catch (err) {
      res.status(500).send(err)
    }
  }
}

module.exports = serveStatic