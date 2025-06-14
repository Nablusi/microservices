const Food = require('../models/food');
const User = require('../models/user');

const createFood = async (req, res) => {
    const userId = req.currentUser.id;
    const { foodName, description, price, category } = req.body;

    try {
        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(401).json({ message: "User Not Found" });
        }

        if (user.userType !== 'restaurant_owner') {
            return res.status(401).json({ message: "User is not restaurant owner" });
        }

        const food = await Food.create({
            foodName,
            description,
            price,
            category,
            userId
        });

        res.status(201).json(food);

    } catch (e) {
        console.log("Food Error", e);
        res.status(500).json({ message: "Internal Server Error" });
    }
};


const getFoodThatTheRestaurantHave = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json({ message: "Restaurant not found" });
        }

        if (user.userType !== 'restaurant_owner') {
            return res.status(403).json({ message: "User is not a restaurant owner" });
        }

        const foodList = await Food.findAll({ where: { userId: id } });
        res.status(200).json(foodList);
    } catch (e) {
        console.error("Get Food Error:", e);
        res.status(500).json({ message: "Internal Server Error" });
    }
}


module.exports = { createFood, getFoodThatTheRestaurantHave }; 