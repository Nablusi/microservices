const User = require('./user');
const NormalProfile = require('./profile'); 
const RestaurantProfile = require('./restaurantProfile');
const Preferences = require('./preferences'); 
const UserPreferences = require('./userPreferences');
const Food = require('./food');
const Cart =require('./cart'); 
const CartItems = require('./cartItems')
const Order = require('./order'); 
const OrderItem = require('./orderItems'); 


User.belongsToMany(Preferences, {
  through: UserPreferences,
  foreignKey: 'userId',
  otherKey: 'preferencesId' 
});

Preferences.belongsToMany(User, {
  through: UserPreferences,
  foreignKey: 'preferencesId',  
  otherKey: 'userId'
});

Cart.hasMany(CartItems, { foreignKey: 'cartId' });
Food.hasMany(CartItems, { foreignKey: 'foodId' });


Order.hasMany(OrderItem, { foreignKey: 'orderId' });
Food.hasMany(OrderItem, { foreignKey: 'foodId' });
User.hasMany(Order, { foreignKey: 'userId' });


User.hasOne(NormalProfile, { foreignKey: 'userId' });
User.hasOne(RestaurantProfile, { foreignKey: 'userId' });

module.exports = {
  User,
  NormalProfile,
  RestaurantProfile,
  Preferences,
  UserPreferences,
  Food,
  Cart,
  CartItems, 
  OrderItem, 
  Order,
};
