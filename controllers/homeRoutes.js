const router = require('express').Router();
const { Blogpost, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

// Render home page
router.get('/', async (req, res) => {
  try {
    const blogpostData = await Blogpost.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
        {
          model: Comment, 
          include: [{ model: User }]
        }
      ],
    });
    const blogposts = blogpostData.map((blogpost) =>
      blogpost.get({plain: true})
    );
    // Pass serialized data and session flag into template
    res.render('homepage', {
      blogposts,
      logged_in: req.session.logged_in
    });
  }
  catch(err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Render one blog post with comments
router.get('/blogpost/:id', async (req, res) => {
  try {
    const blogpostData = await Blogpost.findOne({
      where: {
        id: req.params.id
      },
      include: [
        {
          model: User,
          attributes: [
            'name',
          ],
        },
        {
          model: Comment,
          attributes: [
            'user_id',
            'content',
          ],
          include: 
          {
            model: User,
            attributes: [
              'name',
            ],
          },
        },
      ],
    });
    if (!blogpostData) {
      res.status(400).json({ message: "Unable to retrieve blog data."});
      return;
    }
    const blogpost = blogpostData.get({ plain: true });
    res.render('blogpost&Comments', { blogpost });
  }
  catch(err) {
    res.status(500).json(err);
  }
});

// Render dashboard 
router.get('/dashboard', async (req, res) => {
  try {
    const blogpostData = await Blogpost.findAll({
      /*where: {
        user_id: req.session.id
      },*/
      include: [
        {
          model: User,
          attributes: ['name'],
        },
        {
          model: Comment,
          attributes: ['id',  'content', 'user_id', 'created_at'],
            include: {
              model: User,
              attributes: ['name']
              },
        }
      ]
    });
    const blogposts = blogpostData.map((blogpost) =>
      blogpost.get({plain: true})
    );
    // Pass serialized data and session flag into template
    res.render('dashboard', {
      blogposts,
      logged_in: true 
    });
  }
  catch(err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Render one blog post from the dashboard
router.get('/singleBlogpost/:id', async (req, res) => {
  try {
    const blogpostData = await Blogpost.findOne({
      where: {
        id: req.params.id
      },
      include: [
        {
          model: User,
          attributes: [
            'name',
          ],
        },
      ],
    });
    if (!blogpostData) {
      res.status(400).json({ message: "Unable to retrieve blog data."});
      return;
    }
    const blogpost = blogpostData.get({ plain: true });
    res.render('singleBlogpost', { blogpost });
  }
  catch(err) {
    res.status(500).json(err);
  }
});

// Render new blog post page
router.get('/addBlogpost', (req, res) => {
  res.render('addBlogpost');
});

// Render update blog post page
router.get('/updateBlogpost/:id', async (req, res) => {
  try {
    const blogpostData = await Blogpost.findOne({
      where: {
        id: req.params.id
      },
    });
    if (!blogpostData) {
      res.status(400).json({ message: "Unable to retrieve blog data."});
      return;
    }
    const blogpost = blogpostData.get({ plain: true });
    console.log(blogpost);
    res.render('updateBlogpost', { blogpost });
  }
  catch(err) {
    res.status(500).json(err);
  }
});
  

// Render login page
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }
  res.render('login');
});

// Render signup page
router.get('/signup', (req, res) => {
  if (req.session.logged_in) { 
    res.redirect('/dashboard');
    return;
  }
  res.render('signup');
});

module.exports = router;
