const router = require('express').Router();
const { Blogpost, User } = require('../../models');
const withAuth = require('../../utils/auth');

// Render one blog post from the dashboard
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
      ],
    });
    if (!blogpostData) {
      res.status(400).json({ message: "Unable to retrieve blog data."});
      return;
    }
    const blogpost = blogpostData.get({ plain: true });
    res.render('editBlogpost', { blogpost });
  }
  catch(err) {
    res.status(500).json(err);
  }
});

module.exports = router;