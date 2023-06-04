const router = require('express').Router();
const { Blogpost, User } = require('../../models');
const withAuth = require('../../utils/auth');

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
    // Pass serialized data and session flag into template
    res.status(200).json(blogposts);
  }
  catch(err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const blogpostData = await Blogpost.findByPk(req.params.id); 
    if (!blogpostData) {
      res.status(400).json({ message: "Unable to retrieve blog data."});
      return;
    }
    res.status(200).json(blogpostData);
  }
  catch(err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/', /*withAuth,*/ async (req, res) => {
  try {
    const newblogpost = await Blogpost.create(req.body);
    res.status(200).json(newblogpost);
  }
  catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', /*withAuth,*/ async (req, res) => {
  try {
    const blogpostData = await Blogpost.update(req.body, {
      where:{id:req.params.id}
    });
    res.status(200).json(blogpostData);
  }
  catch (err) {
    res.status(400).json(err);
  }
});


router.delete('/:id', /*withAuth,*/ async (req, res) => {
  console.log(req.params.id)
  try {
    const blogpostData = await Blogpost.destroy({
      where: {
        id: req.params.id,
        /*user_id: req.session.user_id,*/
      },
    });
    if (!blogpostData) {
      res.status(404).json({ message: 'No blog post found with this id!' });
      return;
    }
    console.log("deleted");
    res.status(200).json(blogpostData);
  }
  catch (err) {
    console.log("500");
    res.status(500).json(err);
  }
});

module.exports = router;
