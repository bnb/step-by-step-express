const express = require('express')
const request = require('request')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('Hello from XKCD-serv! 👋')
})

app.get('/comic', (req, res) => {
  if (req.query.id) {
    request(`https://xkcd.com/${req.query.id}/info.0.json`, (error, response, body) => {
      if (error) throw error
      console.log(`Response from XKCD website when calling https://xkcd.com/${req.query.id}/info.0.json: ${response} ${response.statusCode}`)
      res.send(body)
    })
  } else {
    res.send('Find a comic by adding a querystring to the current page. For example: https://tierneyxkcd.azurewebsites.net/comic?id=112')
  }
})

app.listen(port, () => console.log(`Our app is now listening on port ${port}!`))
