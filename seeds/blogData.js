const { Blogpost } = require('../models');

const blogdata = [
  {
    title: 'Blossoming Apricot',
    text: 'What is the deal with tech anyway? Crazy, right?',
    user_id: 1
  },
  {
    title: 'Blog Post 2',
    text: 'Computers are everywhere these days.',
    user_id: 1
  },
  {
    title: 'Blog Post 3',
    text: 'Even vacuums have computers? Are you kidding?',
    user_id: 2
  },
  {
    title: 'Blog Post 4',
    text: 'Still in disbelief that people think Elon Musk is smart.',
    user_id: 2
  },
];

const seedBlogs = () => Blogpost.bulkCreate(blogdata);

module.exports = seedBlogs;