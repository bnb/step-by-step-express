const express = require('express')
const request = require('request')
const handlebars = require('express-handlebars')
const app = express()
const port = process.env.PORT ? process.env.PORT : 8080
const host = process.env.DOCKER_HOST ? process.env.DOCKER_HOST : '0.0.0.0'

// Define rendering engine + static directory
app.engine('handlebars', handlebars())
app.set('view engine', 'handlebars')
app.use(express.static('static'))

// Define Error Handler
const errorHandler = (err, req, res, next) => {
  res.status(500)
  res.render('error', { error: err })
}

app.use(errorHandler)

// Define default route
app.get('/', (req, res) => {
  res.send('Hello from XKCD-serv! 👋')
})

// Define API
app.get('/comic', (req, res) => {
  if (req.query.id) {
    request(`https://xkcd.com/${req.query.id}/info.0.json`, (error, response, body) => {
      if (error) errorHandler()

      console.log(`Response from XKCD website when calling https://xkcd.com/${req.query.id}/info.0.json: ${response} ${response.statusCode}`)

      const bodyToJson = JSON.parse(body)
      const dataToRender = {
        'title': bodyToJson.safe_title,
        'img': bodyToJson.img,
        'desc': bodyToJson.alt
      }
      res.render('comic', dataToRender)
    })
  } else {
    res.send('Find a comic by adding a querystring to the current page. For example: tierneyxkcd.azurewebsites.net/comic?id=112')
  }
})

app.listen(port, host, () => console.log(`Our app is now listening at ${host}:${port}!`))
