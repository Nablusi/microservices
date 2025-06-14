const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router()
const { registerValidation } = require('../middleware/validator');
const validate = require('../middleware/validate')
const isLoggedin = require('../middleware/auth')
const userProfileController = require('../controllers/userProfileController');
const userPreferencesController = require('../controllers/userPreferenceController');
const { foodValidation } = require("../middleware/foodValidation");
const foodController = require('../controllers/foodController');




router.get('/', (req, res) => {
  res.send('Hello World!')
})


router.post('/register', registerValidation, validate, userController.register);
router.post('/login', userController.login);
router.get('/profile', isLoggedin, userProfileController.getProfile);
router.put('/profile', isLoggedin, userProfileController.updateMyProfile);
router.get('/preferences', isLoggedin, userPreferencesController.getPreferences);
router.post('/preferences', isLoggedin, userPreferencesController.assignPreferences);
router.post('/addfood', isLoggedin, foodValidation, validate, foodController.createFood )
router.get('/viewfood/:id', foodController.getFoodThatTheRestaurantHave);




module.exports = router
