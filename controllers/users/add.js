const User = require('@/models/user');

module.exports = async (req, res) => {
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

  const user = await User.create({
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
