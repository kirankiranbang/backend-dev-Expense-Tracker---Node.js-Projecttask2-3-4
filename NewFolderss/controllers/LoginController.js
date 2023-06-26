// controllers/LoginController.js
const Logins = require('../models/logins');
const User = require('../models/User');
const bcrypt = require('bcrypt');
exports.postLoginData = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate the presence of the password field
    if (!password) {
      return res.status(400).json({ success: false, message: 'Password is required' });
    }

    // Find the user in the database
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({ success: false, message: 'User not found' });
    }

    // Perform password verification (using plain text comparison, not recommended for production)
    if (user.password !== password) {
      return res.status(400).json({ success: false, message: 'Invalid password' });
    }

    // Create the Logins instance
    const login = await Logins.create({ email, password, user_id: user.id });

    // Login successful, redirect to welcome.html
    res.redirect('/admin/welcome');
  } catch (error) {
    console.error('Error logging in:', error);
    return res.status(500).json({ success: false, message: 'Internal server error' });
  }
};
