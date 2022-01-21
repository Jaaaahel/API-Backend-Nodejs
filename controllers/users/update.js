const User = require('@/models/user');

module.exports = async (req, res) => {
  const { id } = req.params;

  const user = await User.findOne({ where: { id } });

  if (!user) {
    res.status(404).json({ message: 'User not found!' });
    return;
  }

  const {
    firstName,
    lastName,
    address,
    postcode,
    contactPhoneNumber,
    email,
    username,
    password,
  } = req.body;

  await user.update({
    firstName,
    lastName,
    address,
    postcode,
    contactPhoneNumber,
    email,
    username,
    password,
  });

  res.json(user);
};
