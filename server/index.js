import express from 'express'
import useDev from './useDev'

const isProduction = process.env.NODE_ENV === 'production'
const app = express()

// app.disable('x-powered-by')

app.set('view engine', 'ejs') // Set view engine
app.set('views', __dirname + '/views') // Set views directory

app.use(express.static(__dirname + '/../public'))

if (!isProduction) {
  useDev(app)
}

app.get('/', (req, res) => res.redirect('/nyheder/politik/eu15/quiz'))
app.get('/nyheder/politik/eu15/quiz', (req, res) => {
  res.render('index', { isProduction })
})

const port = process.env.PORT || 3000
app.listen(port, err => {
  if (err) console.log(err)
  console.log(`Running server on port ${port}`)
})
