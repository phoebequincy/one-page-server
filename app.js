const express = require('express')
const app = express()
const port = 3000

// const listener = () => console.log(`Application listening on port ${port}!`)
// app.listen(port, listener)
const listener = () => console.log(`Woot! The party's here! ${port}!`)
app.listen(port, listener)
app.get('/ping', (req, res) => {
  const message = 'pong!'
  console.log(`ON THE SERVER: ${message}`)
  res.send(`RESPONDING TO THE CLIENT: ${message}`)
})
