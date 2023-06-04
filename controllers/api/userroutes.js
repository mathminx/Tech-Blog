const router = require('express').Router();
const { User } = require('../../models');
const bcrypt = require('bcrypt');

router.get('/', async (req, res) => {
  try {
    const userData = await User.findAll({
    });
    if (!userData) {
      res.status(400).json({ message: "Unable to retrieve user data."});
      return;
    }
    res.status(200).json(userData);
  }
  catch(err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    console.log(req.params, req.body);
    const userData = await User.findOne({
      where: {
        id: req.params.id
      }
    });
    if (!userData) {
      res.status(400).json({ message: "Unable to retrieve user data."});
      return;
    }
    res.status(200).json(userData);
  }
  catch(err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const newUser = req.body;
    newUser.password = await bcrypt.hash(req.body.password, 10);
    const newUserData = await User.create(newUser);
    req.session.save(() => {
      req.session.user_id = newUserData.id;
      req.session.logged_in = true;
    res.status(200).json({ message: "Login successful"});
    });
  } 
  catch (err) {
    res.status(400).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    console.log("userData", userData);
    if (!userData) {
      res.status(400).json({ message: 'Incorrect email or password - please try again' });
      return;
    }
    const validPassword = await userData.checkPassword(req.body.password);
    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect email or password - please try again' });
      return;
    }
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'Login successful!' });
      res.status(200);
  });
  } catch (err) {
    res.status(400).json(err);
  }
});

// Logout
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
