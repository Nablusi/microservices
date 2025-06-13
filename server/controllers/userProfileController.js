const { NormalProfile, RestaurantProfile } = require('../models');

const getProfile = async (req, res) => {
  const userId = req.currentUser.id;
  const userType = req.currentUser.userType;

  try {
    let profile;

    if (userType === 'normal') {
      profile = await NormalProfile.findOne({ where: { userId } });
    } else if (userType === 'restaurant_owner') {
      profile = await RestaurantProfile.findOne({ where: { userId } });
    } else {
      return res.status(400).json({ message: 'Invalid user type' });
    }

    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }

    res.json(profile);
  } catch (error) {
    console.error('Error getting profile:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const updateMyProfile = async (req, res) => {
  const userId = req.currentUser.id;
  const userType = req.currentUser.userType;
  const { phone, address, restaurant_name, restaurant_address } = req.body;

  try {
    let profile;

    if (userType === 'normal') {
      profile = await NormalProfile.findOne({ where: { userId } });
      if (profile) {
        profile.phone = phone;
        profile.address = address;
      }
    } else if (userType === 'restaurant_owner') {
      profile = await RestaurantProfile.findOne({ where: { userId } });
      if (profile) {
        profile.phone = phone;
        profile.restaurant_name = restaurant_name;
        profile.restaurant_address = restaurant_address;
      }
    } else {
      return res.status(400).json({ message: 'Invalid user type' });
    }

    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }

    await profile.save();
    res.json({ message: 'Profile updated successfully', profile });
  } catch (error) {
    console.error('Error updating profile:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  getProfile,
  updateMyProfile
};
