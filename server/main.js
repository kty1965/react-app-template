// main.js
import express from 'express'
import path from 'path'

const app = express()
// Set port
app.set('port', process.env.PORT || 8080)
// Static files

app.use(express.static('public'))
const http = require('http').Server(app)

// Route
app.get('/', (req, res) => {
  res.sendFile(path.resolve('index.html'))
})

http.listen(app.get('port'), () => {
  console.log('React App Template listening on ' + app.get('port'))
})
