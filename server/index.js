require('dotenv').config()
const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser')

const app = express()
app.use(cors())
app.use(bodyParser.json())

const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/login', (req, res) => {
  const { username, password } = req.body
  const mockUser = {
    username: 'admin',
    password: '123456' 
  }

  if (username === mockUser.username && password === mockUser.password) {
    res.status(200).json({ message: 'Login successful' })
  } else {
    res.status(401).json({ message: 'Invalid credentials' })
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})