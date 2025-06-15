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
const { orderValidation } = require('../middleware/validationOrder');
const orderController = require('../controllers/orderController');
const { orderItemValidation } = require('../middleware/orderItemValidation')
const searchController = require('../controllers/searchController')




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
router.post('/order', isLoggedin, orderValidation, validate, orderController.createOrder);
router.post('/addorderitem', isLoggedin, orderItemValidation, validate, orderController.addOrderItems);
router.get('/order', isLoggedin, orderController.getOrder);
router.put('/editorderitem', isLoggedin, orderController.editOrderItem)
router.put('/editorderstatus', isLoggedin, orderController.editOrderStatus)
router.delete('/order/:orderId', isLoggedin, orderController.deleteOrder);
router.delete('/:orderId/items/:foodId', isLoggedin, orderController.deleteOrderItem);
router.delete('/:cartId/items/:foodId', isLoggedin, cartController.deleteCartItem);
router.delete('/cart/:cartId', isLoggedin, cartController.deleteCart);
router.get('/search', searchController.searchForRestaurant);




module.exports = router
