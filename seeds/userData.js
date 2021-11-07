const { User } = require('../models');

const userdata = [
  {
    username: 'allenalda',
    email: 'a@a.com',
    password: 'asdf'
  },
  {
    username: 'simon',
    email: 'b@a.com',
    password: 'asdf'
  },
  {
    username: 'alvin',
    email: 'c@a.com',
    password: 'asdf'
  },
  {
    username: 'theodore',
    email: 'd@a.com',
    password: 'asdf'
  },
];

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;
