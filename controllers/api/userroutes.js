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
    console.log(req.body);
    const newUser = req.body;
    newUser.password = await bcrypt.hash(req.body.password, 10);
    const newUserData = await User.create(newUser);
    req.session.save(() => {
      req.session.user_id = newUserData.id;
      req.session.logged_in = true;
      console.log(req.session.logged_in, "You are now logged in");  
    res.status(200).json(newUserData);
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
      res.status(400).json({ message: 'Incorrect email or password. Please try again!' });
      console.log("Incorrect email or password. Please try again!");
      return;
    }
    const validPassword = await dbUserData.checkPassword(req.body.password);
    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect email or password. Please try again!' });
      console.log('Incorrect email or password. Please try again!');
      return;
    }
    req.session.save(() => {
      req.session.loggedIn = true;
      console.log("true");
      console.log(
        '🚀 ~ file: user-routes.js ~ line 57 ~ req.session.save ~ req.session.cookie',
        req.session.cookie
      );
      res.status(200).json({ user: userData, message: 'You are now logged in!' });
      console.log('You are now logged in!');
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Logout
router.post('/logout', (req, res) => {

  /*if (req.session.loggedIn) {*/
    req.session.destroy(() => {
      res.status(204).end();
    });
 /* } else {
    res.status(404).end();
  }*/
});

module.exports = router;
