const { Op } = require('sequelize');
const User = require('@/models/user');

module.exports = async (req, res) => {
  const { ids } = req.body;

  await User.destroy({
    where: {
      id: {
        [Op.in]: ids,
      },
    },
  });

  res.json({ message: 'Users successfully deleted!' });
};
