// const RestaurantProfile = require('../models/restaurantProfile'); 
// const getProfile = async (req, res) => {
//     const userId = req.currentUser.id;

//     try {
//         const profile = await RestaurantProfile.findOne({ where: { userId } })
//         console.log(profile)
//         if (!profile) {
//             return res.status(401).json({
//                 message: "Profile Not found"
//             })
//         }

//         res.json(profile)

//     } catch (e) {
//         res.status(500).json(
//             {
//                 message: "Internal Server Error"
//             }
//         )
//     }

// }

// const updateMyProfile  = async (req, res) => {
//     const userId = req.currentUser.id;
//     const { phone ,restaurant_name, restaurant_address } = req.body;

//     try {
//         const profile = await RestaurantProfile.findOne({ where: { userId } });

//         if (!profile) {
//             return res.status(401).json({
//                 message: 'Profile does not exist'
//             })
//         }

//         profile.phone = phone;
//         profile.restaurant_name = restaurant_name;
//         profile.restaurant_address = restaurant_address;

//         await profile.save();


//     } catch (e) {
//         res.status(500).json({
//             message: "Internal Server error"
//         })
//     }

// }


// module.exports = {
//     getProfile,
//     updateMyProfile
// }