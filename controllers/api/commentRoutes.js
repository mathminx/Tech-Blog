const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
  try {
    const commentData = await Comment.findAll({
    });
    if (!commentData) {
      res.status(400).json({ message: "Unable to retrieve comments."});
      return;
    }
    res.status(200).json(commentData);
  }
  catch(err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const commentData = await Comment.findOne({
      where: {
        blogpost_id: req.params.id
      }
    });
    if (!commentData) {
      res.status(404).json({ message: "Unable to retrieve comment."});
      return;
    }
    res.status(200).json(commentData);
  }
  catch(err) {
    res.status(500).json(err);
  }
});

router.post('/', withAuth, async (req, res) => {
  console.log(req.body);
  try {
    const newComment = await Comment.create({
      content: req.body.content,
      user_id: req.session.user_id,
      blogpost_id: req.body.blogpost_id,
    });
    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;