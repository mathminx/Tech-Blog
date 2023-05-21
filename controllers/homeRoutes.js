const router = require('express').Router();
const { BlogPost, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

// Render home page
router.get('/', async (req, res) => {
  try {
    const blogpostData = await BlogPost.findAll({
      include: [
        {
          model: User,
        },
      ],
    });
    const blogposts = blogpostData.map((blogpost) =>
      blogpost.get({plain: true})
    );
    res.render('homepage', {
      blogposts,
    });
  }
  catch(err) {
    console.log(err);
    res.status(500).json(err);
  }
});


// Render dashboard 
router.get('/dashboard', async (req, res) => {
  try {
    const blogpostData = await BlogPost.findAll({
      include: [
        {
          model: User,
        },
        {
          model: Comment,
        },
      ],
    });
    const blogposts = blogpostData.map((blogpost) =>
      blogpost.get({plain: true})
    );
    res.render('dashboard', {
      blogposts,
    });
  }
  catch(err) {
    console.log(err);
    res.status(500).json(err);
  }
});


// Render login page
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    alert("You are already logged in.");
  }
  res.render('login');
});


// Render signup page
router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    alert("You are already logged in.");
    return;
  }
  res.render('signup');
});



module.exports = router;
