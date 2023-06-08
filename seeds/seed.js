const sequelize = require('../config/connection');
const { User, Blogpost, Comment } = require('../models');

const userData = require('./userData.json');
const blogPostData = require('./blogPostData.json');
const commentData = require('./commentData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- Database Synched -----\n');

  const user = await User.bulkCreate(userData, {
    individualHooks: true,
    plain: true,
  });
  console.log('\n----- User Table Seeded -----\n');

  for (const blogpost of blogPostData) {
    const newBlogPost = await Blogpost.create({
      ...blogpost,
    });
  }
  console.log('\n----- BlogPost Table Seeded -----\n');
  
  for (const comment of commentData) {
    const newComment = await Comment.create({
      ...comment,
    });
  }
  console.log('\n----- Comment Table Seeded -----\n');

  process.exit(0);
};

seedDatabase();