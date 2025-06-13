const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router()
const { registerValidation } = require('../middleware/validator');
const  validate  = require('../middleware/validate')
const isLoggedin = require('../middleware/auth')


router.get('/', (req, res) => {
  res.send('Hello World!')
})


router.post('/register', registerValidation, validate, userController.register);
router.post('/login',  userController.login);
router.get('/profile', isLoggedin, userController.me);


module.exports = router
