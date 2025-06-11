const express = require('express'); 
const router = express.Router()

router.get('/', (req, res) => {
  res.send('Hello World!')
})

router.post('/login', (req, res) => {
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


router.post('/signup', (req,res)=>  { 
   const {name, email, phone, address, password} = req.body;   

   // do verification 
   //JWT // token 
   //middleware

})

module.exports = router
