const router = require('express').Router();
const { Blogpost } = require('../../models');

// CREATE new post
router.post('/', async (req, res) => {
  try {
    const dbBlogData = await Blogpost.create({
      title: req.body.title,
      text: req.body.text,
      user_id: req.body.password,
    });

    req.session.save(() => {
      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Get all blog posts
router.get('/', async (req, res) => {
    try {
      const blogData = await Blogpost.findAll({
        order: ['date']
      })
      res.status(200).json(blogData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.delete('/:id', async (req, res) => {
    try {
      const blogData = await Blogpost.destroy({
        where: {
          id: req.params.id
        }
      });
  
      if (!blogData) {
        res.status(404).json({ message: 'No blog found with this id!' });
        return;
      }
  
      res.status(200).json(blogData);
    } catch (err) {
      res.status(500).json(err);
    }
  
  });
  

module.exports = router;
