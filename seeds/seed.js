const sequelize = require('../config/connection');
const { User, Blogpost } = require('../models');

const userData = require('./userData.json');
const blogpostData = require('./blogData.json');



const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const blogposts = await Blogpost.bulkCreate(blogpostData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();