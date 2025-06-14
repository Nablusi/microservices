const User = require('../models/user');
const Order = require('../models/order');
const OrderItem = require('../models/orderItems');
const Food = require('../models/food');


const createOrder = async (req, res) => {
    const userId = req.currentUser.id;
    const { status, totalPrice } = req.body;
    try {
        const user = await User.findByPk(userId);

        if (!user) {
            return res.status(401).json({
                message: 'User not Found'
            })
        }

        const order = await Order.create({
            userId: userId,
            status,
            totalPrice,
        })


        res.status(201).json(order);



    } catch (e) {
        console.log('order Error', e)
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
}

const addOrderItems = async (req, res) => {
    const userId = req.currentUser.id;
    const { orderId, foodId, quantity, priceAtOrderTime } = req.body;

    try {
        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(401).json({ message: 'User not found' });
        }

        const order = await Order.findByPk(orderId);
        if (!order || order.userId !== userId) {
            return res.status(403).json({ message: 'Unauthorized access to order' });
        }

        const existingOrderItem = await OrderItem.findOne({
            where: { orderId, foodId }
        });

        let orderItem;
        if (existingOrderItem) {
            existingOrderItem.quantity += quantity;
            await existingOrderItem.save();
            orderItem = existingOrderItem;
        } else {
            orderItem = await OrderItem.create({
                orderId,
                foodId,
                quantity,
                priceAtOrderTime
            });
        }

        res.status(201).json(orderItem);

    } catch (e) {
        console.error('Order Error:', e);
        res.status(500).json({ message: "Internal Server Error" });
    }
};



const editOrderItem = async (req, res) => {
    const userId = req.currentUser.id;
    const { orderId, foodId, quantity } = req.body;

    try {
        const order = await Order.findByPk(orderId);
        if (!order || order.userId !== userId) {
            return res.status(403).json({ message: "Unauthorized" });
        }

        const orderItem = await OrderItem.findOne({ where: { orderId, foodId } });
        if (!orderItem) {
            return res.status(404).json({ message: "Order item not found" });
        }

        if (quantity <= 0) {
            await orderItem.destroy();
            return res.status(200).json({ message: "Item removed from order" });
        }

        orderItem.quantity = quantity;
        await orderItem.save();

        res.status(200).json(orderItem);
    } catch (e) {
        console.error("Edit Order Item Error:", e);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const getOrder = async (req, res) => {
    const userId = req.currentUser.id;

    try {
        const orders = await Order.findAll({
            where: { userId },
            include: [{
                model: OrderItem,
                include: [Food]
            }]
        });

        if (!orders || orders.length === 0) {
            return res.status(404).json({ message: "No orders found" });
        }

        res.status(200).json(orders);
    } catch (e) {
        console.error("Get Order Items Error:", e);
        res.status(500).json({ message: "Internal Server Error" });
    }
};



const editOrderStatus = async (req, res) => {
    const userId = req.currentUser.id;
    const { status, orderId } = req.body; 

    try {
        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(401).json({ message: 'User not found' });
        }

        const order = await Order.findByPk(orderId);
        if (!order || order.userId !== userId) {
            return res.status(403).json({ message: 'Unauthorized to edit this order' });
        }

        order.status = status;
        await order.save();

        res.status(200).json(order);

    } catch (e) {
        console.error('Order Error:', e);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};


const deleteOrder = async (req, res) => {
    const userId = req.currentUser.id;
    const { orderId } = req.params;

    try {
        const order = await Order.findByPk(orderId);
        if (!order) {
            return res.status(404).json({ message: "Order not found" });
        }

        if (order.userId !== userId) {
            return res.status(403).json({ message: "Unauthorized" });
        }
        await OrderItem.destroy({ where: { orderId } });
        await order.destroy();

        res.status(200).json({ message: "Order deleted successfully" });
    } catch (e) {
        console.error("Delete Order Error:", e);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const deleteOrderItem = async (req, res) => {
    const userId = req.currentUser.id;
    const { orderId, foodId } = req.params;

    try {
        const order = await Order.findByPk(orderId);
        if (!order || order.userId !== userId) {
            return res.status(403).json({ message: "Unauthorized or order not found" });
        }

        const item = await OrderItem.findOne({
            where: { orderId, foodId }
        });

        if (!item) {
            return res.status(404).json({ message: "Order item not found" });
        }

        await item.destroy();

        res.status(200).json({ message: "Order item deleted successfully" });
    } catch (e) {
        console.error("Delete Order Item Error:", e);
        res.status(500).json({ message: "Internal Server Error" });
    }
};


module.exports = {
    createOrder,
    addOrderItems, 
    getOrder,
    editOrderItem,
    editOrderStatus,
    deleteOrder,
    deleteOrderItem
}
