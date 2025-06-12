require('dotenv').config()
const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser')
const routes = require('./routes/index')
const morgan = require('morgan');


const app = express()
app.use(morgan('dev'))
app.use(cors())
app.use(bodyParser.urlencoded(false))
app.use(bodyParser.json())

const port = process.env.PORT

app.use('/', routes)

app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404
  next(error)
})

app.use((error, req, res, next) => {
  res.status(error.status || 500).json({
    message: error.message
  });
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})