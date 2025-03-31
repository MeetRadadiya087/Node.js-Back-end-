const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');

exports.register = async (req, res) => {
  const { username, password, role } = req.body;
  const user = new User({ username, password, role });
  user.save().then(() => {
    res.redirect('/auth/login');
  });
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (user) {
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
      res.cookie('token', token, { httpOnly: true }).redirect('/');
    } else {
      res.status(400).send('Invalid credentials');
    }
  } else {
    res.status(400).send('Invalid credentials');
  }
};

exports.logout = (req, res) => {
  res.clearCookie('token').redirect('/auth/login');
};
