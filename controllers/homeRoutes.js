const router = require('express').Router();
const { Blogpost, User, Comment } = require('../models');
const withAuth = require('../utils/auth');


// Render home page with all blog posts
router.get('/', async (req, res) => {
  try {
    const blogpostData = await Blogpost.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });
    const blogposts = blogpostData.map((blogpost) =>
      blogpost.get({plain: true})
    );
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

// Render one blog post from the home page with comments
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
    res.render('singleHomepageBlogpost', { 
      blogpost,
      logged_in: req.session.logged_in
     });
  }
  catch(err) {
    res.status(500).json(err);
  }
});

// Render dashboard with blog posts
router.get('/dashboard', withAuth, async (req, res) => {
  try {
    const blogpostData = await Blogpost.findAll({
      where: {
        user_id: req.session.user_id
      },
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
    res.render('dashboard', {
      blogposts,
      logged_in: true,
      user_id: req.session.user_id,
    });
  }
  catch(err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Render one blog post from the dashboard
router.get('/singleDashboardBlogpost/:id', withAuth, async (req, res) => {
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
    res.render('singleDashboardBlogpost', { 
      blogpost,
      logged_in: req.session.logged_in
    });
  }
  catch(err) {
    res.status(500).json(err);
  }
});

// Render new blog post page
router.get('/addBlogpost', withAuth, (req, res) => {
  res.render('addBlogpost', {
    logged_in: req.session.logged_in 
  });
});
  
// Render new comment page
router.get('/addComment', withAuth, (req, res) => {
  res.render('addComment', {
    logged_in: req.session.logged_in
  });
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
