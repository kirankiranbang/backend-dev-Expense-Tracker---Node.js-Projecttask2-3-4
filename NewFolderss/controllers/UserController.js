const User = require('../models/User');
// const Logins = require('../models/logins');
exports.createUser = async (req, res) => {
  try {
    const { username, email, password, phoneNumber } = req.body;

    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ success: false, message: 'Email already exists' });
    }

    const user = await User.create({ username, email, password, phoneNumber });

    return res.status(201).json({ success: true, message: 'User created successfully', user });
  } catch (error) {
    console.error('Error creating user:', error);
    return res.status(500).json({ success: false, message: 'Internal server error' });
  }
};