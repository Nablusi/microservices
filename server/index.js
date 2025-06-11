require('dotenv').config()
const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser')
const routes = require('./routes/index')

const app = express()
app.use(cors())
app.use(bodyParser.json())

const port = process.env.PORT

app.use('/', routes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})