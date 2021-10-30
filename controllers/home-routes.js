const router = require('express').Router();
const { User, Blogpost } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');

// GET all blogposts for homepage
router.get('/', async (req, res) => {
  try {
    const dbUserBlogData = await User.findAll({
      include: [
        {
          model: Blogpost,
        },
      ],
    });

    const blogs = dbUserBlogData.map((blog) =>
      blog.get({ plain: true })
    );

    res.render('homepage', {
      blogs,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one blog
// Use the custom middleware before allowing the user to access the gallery
router.get('/blog/:id', withAuth, async (req, res) => {
  try {
    const dbUserBlogData = await Blogpost.findByPk(req.params.id, {
      include: [
        {
          model: User,
        },
      ],
    });

    const blog = dbUserBlogData.get({ plain: true });
    res.render('blog', { blog, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one painting
// Use the custom middleware before allowing the user to access the painting
router.get('/painting/:id', withAuth, async (req, res) => {
  try {
    const dbPaintingData = await Painting.findByPk(req.params.id);

    const painting = dbPaintingData.get({ plain: true });

    res.render('painting', { painting, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
