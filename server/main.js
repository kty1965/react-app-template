// app-server.js
import express from 'express'
const app = express()
// Set port
app.set('port', process.env.PORT || 3000)
// Static files

app.use(express.static('public'))
const http = require('http').Server(app)

// Config
import config from './config'

// Route
app.get('/', (req, res) => {
  console.log(__dirname + '../public/index.html')
  res.sendFile(__dirname + '../public/index.html')
})

http.listen(app.get('port'), () => {
  console.log('TripScanner App listening on ' + app.get('port'))
})
