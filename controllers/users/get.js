const User = require('@/models/user');

module.exports = async (req, res) => {
  const users = await User.findAll();

  res.json(users);
};
