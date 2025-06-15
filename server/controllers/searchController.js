const Sequelize = require('sequelize');
const { Op } = Sequelize;

const User = require('../models/user');
const RestaurantProfile = require('../models/restaurantProfile');
const Food = require('../models/food');

const searchForRestaurant = async (req, res) => {
    try {
        let { query } = req.query;

        const whereCondition = {
            userType: 'restaurant_owner',
        };

        if (query) {
            whereCondition[Op.or] = [
                { name: { [Op.iLike]: `%${query}%` } },
                { '$food.foodName$': { [Op.iLike]: `%${query}%` } },
                { '$food.category$': { [Op.iLike]: `%${query}%` } }
            ];
        }

        const restaurants = await User.findAll({
            where: whereCondition,
            attributes: { exclude: ['password', 'email'] },
            include: [
                {
                    model: RestaurantProfile,
                    attributes: { exclude: ['email', 'password'] }
                },
                {
                    model: Food,
                    as: 'food',
                    attributes: ['foodName', 'category', 'price', 'description']
                }
            ]
        });

        res.status(200).json(restaurants);

    } catch (e) {
        res.status(500).json({ message: 'Internal Server Error', error: e.message });
    }
};

module.exports = {
    searchForRestaurant
};
