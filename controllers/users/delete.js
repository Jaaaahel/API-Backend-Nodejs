const User = require('@/models/user');

module.exports = async (req, res) => {
  const { id } = req.params;

  const user = await User.findOne({ where: { id } });

  if (!user) {
    res.status(404).json({ message: 'User not found!' });
    return;
  }

  await user.destroy();

  res.json({ message: 'User successfully deleted!' });
};
