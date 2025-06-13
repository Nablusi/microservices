require('dotenv').config(); 
const bcrypt = require('bcryptjs')
const jwb = require('jsonwebtoken')
const User = require('../models/user');

const register = async (req, res) => {
    const { firstName, lastName, email, password, userType } = req.body;

    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
        return res.status(400).json({ message: 'Email already in use' });
    }

    try {
        const hashPassword = await bcrypt.hash(password, 10)
        const user = await User.create({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: hashPassword,
            userType: userType,
        });

        res.status(200).json({
            message: "Your account created successfully"
        })
    } catch (e) {
        res.status(500).json({
            message: "Internal Server Error"
        })
    }

}


const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ where: { email } })

        if (!user) {
            return res.status(401).json({
                message: "Email Or Password is not correct"
            })
        }

        const authSuccess = await bcrypt.compare(password, user.password);

        if (!authSuccess) {
            return res.status(401).json({
                message: "Email Or Password is not correct"
            })
        } 


        const token = jwb.sign({id: user.id, firstName: user.firstName, lastName: user.lastName, email: user.email, userType: user.userType }, process.env.JWT)

        res.status(200).json({
            accessToken: token
        })

    } catch (e) {
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
}


const me = (req, res) => { 
    const user = req.currentUser;
    res.json(user);
}

module.exports = { register, login, me }



