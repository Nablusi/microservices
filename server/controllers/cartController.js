const Cart = require('../models/cart');
const User = require('../models/user');
const CartItems = require('../models/cartItems');
const Food = require('../models/food');


const createCartForUser = async (req, res) => {
    const userId = req.currentUser.id;
    try {
        const user = await User.findByPk(userId);

        if (!user) {
            return res.status(401).json({
                message: "User Not found"
            })
        }

        const cart = await Cart.create({
            userId: userId
        })

        res.status(201).json(cart);

    } catch (e) {
        console.log('Cart Error', e);
        res.status(500).json({
            message: 'Internal Server Error'
        })
    }
}


const addItemToTheCart = async (req, res) => {
    const userId = req.currentUser.id;
    const { foodId, cartId, quantity, price } = req.body;

    try {
        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(401).json({ message: "User Not Found" });
        }

        const cart = await Cart.findByPk(cartId);
        if (!cart || cart.userId !== userId) {
            return res.status(403).json({ message: "Unauthorized cart access" });
        }
        const existingCartItem = await CartItems.findOne({
            where: {
                cartId,
                foodId
            }
        });

        let cartItem;
        if (existingCartItem) {
            
            existingCartItem.quantity += quantity;
            await existingCartItem.save();
            cartItem = existingCartItem;
        } else {
           
            cartItem = await CartItems.create({
                foodId,
                cartId,
                quantity,
                price
            });
        }

        res.status(201).json(cartItem);
    } catch (e) {
        console.error("Add Cart Item Error:", e);
        res.status(500).json({ message: "Internal Server Error" });
    }
};


const getCart = async (req, res) => {
    const userId = req.currentUser.id;

    try {
        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(401).json({ message: "User Not Found" });
        }

        const cart = await Cart.findOne({
            where: { userId }, 
            include: [{
                model: CartItems,
                include: [Food] 
            }]
        });

        if (!cart) {
            return res.status(404).json({ message: "Cart not found" });
        }

        res.status(200).json(cart);
    } catch (e) {
        console.error("Get Cart Error:", e);
        res.status(500).json({ message: "Internal Server Error" });
    }
};


const editCartItem = async (req, res) => {
    const userId = req.currentUser.id;
    const { cartId, foodId, quantity } = req.body;

    try {
        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(401).json({ message: "User not found" });
        }

        const cart = await Cart.findByPk(cartId);
        if (!cart || cart.userId !== userId) {
            return res.status(403).json({ message: "Unauthorized cart access" });
        }

        const cartItem = await CartItems.findOne({
            where: { cartId, foodId }
        });

        if (!cartItem) {
            return res.status(404).json({ message: "Cart item not found" });
        }

        if (quantity <= 0) {
            await cartItem.destroy();
            return res.status(200).json({ message: "Item removed from cart" });
        }

        cartItem.quantity = quantity;
        await cartItem.save();

        res.status(200).json(cartItem);
    } catch (e) {
        console.error("Edit Cart Item Error:", e);
        res.status(500).json({ message: "Internal Server Error" });
    }
};


module.exports = {
    createCartForUser,
    addItemToTheCart,
    getCart,
     editCartItem,
}