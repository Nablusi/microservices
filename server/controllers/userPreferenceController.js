const Preferences = require("../models/preferences");
const User = require('../models/user')

const assignPreferences = async (req, res) => {
    const userId = req.currentUser.id;
    const { name } = req.body; 

    try {
        const user = await User.findByPk(userId);
        if (!user) return res.status(404).json({ message: 'User not found' });

        const preferences = await Promise.all(
            name.map(async (prefName) => {
                const [preference] = await Preferences.findOrCreate({ where: { name: prefName } });
                return preference;
            })
        );

        await user.setPreferences(preferences);

        res.status(200).json({ message: 'Preferences assigned successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};



const getPreferences = async (req, res) => {
    const userId = req.currentUser.id;

    try {
        const user = await User.findByPk(userId, {
            include: Preferences
        });

        if (!user) return res.status(404).json({ message: 'User not found' });

        res.status(200).json({ preferences: user.Preferences });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};


module.exports = {
    assignPreferences,
    getPreferences
}
