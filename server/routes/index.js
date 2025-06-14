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
const { cartValidation } = require('../middleware/cartValidation');
const cartController = require('../controllers/cartController');




router.get('/', (req, res) => {
  res.send('Hello World!')
})


router.post('/register', registerValidation, validate, userController.register);
router.post('/login', userController.login);
router.get('/profile', isLoggedin, userProfileController.getProfile);
router.put('/profile', isLoggedin, userProfileController.updateMyProfile);
router.get('/preferences', isLoggedin, userPreferencesController.getPreferences);
router.post('/preferences', isLoggedin, userPreferencesController.assignPreferences);
router.post('/addfood', isLoggedin, foodValidation, validate, foodController.createFood)
router.get('/viewfood/:id', foodController.getFoodThatTheRestaurantHave);
router.post('/cart', isLoggedin, cartController.createCartForUser);
router.post('/cart/add-item', isLoggedin, cartValidation, validate, cartController.addItemToTheCart); 
router.get('/cart', isLoggedin, cartController.getCart);
router.put('/cart/edit-item', isLoggedin, cartController.editCartItem);




module.exports = router
