const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('Hello from XKCD-serv! 👋')
})

app.get('/comic', (req, res) => {
  res.send(req.query)
})

app.listen(port, () => console.log(`Our app is now listening on port ${port}!`))
