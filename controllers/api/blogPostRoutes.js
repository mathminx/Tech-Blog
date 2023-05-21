const router = require('express').Router();
const { BlogPost } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
  try {
    const blogPostData = await BlogPost.findAll({
    });
    if (!blogPostData) {
      res.status(400).json({ message: "Unable to retrieve blog data."});
      return;
    }
    res.status(200).json(blogPostData);
  }
  catch(err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    console.log(req.params, req.body);
    const blogPostData = await BlogPost.findOne({
      where: {
        id: req.params.id
      }
    });
    if (!blogPostData) {
      res.status(400).json({ message: "Unable to retrieve blog data."});
      return;
    }
    res.status(200).json(blogPostData);
  }
  catch(err) {
    res.status(500).json(err);
  }
});

router.post('/', withAuth, async (req, res) => {
  try {
    console.log(req.body)
    const newBlogPost = await BlogPost.create(req.body);
    res.status(200).json(newBlogPost);
  }
  catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', withAuth, async (req, res) => {
  try {
    console.log(req.params, req.body);
    const blogPostData = await BlogPost.update(req.body, {
      where:{id:req.params.id}
    });
    res.status(200).json(blogPostData);
  }
  catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const blogPostData = await BlogPost.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!blogPostData) {
      res.status(404).json({ message: 'No blog post found with this id!' });
      return;
    }

    res.status(200).json(blogPostData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
