# Tech-Blog

This CMS-style blog site was created for developers to publish their blog posts from the dashboard and comment on other developers’ posts from the home page. The application follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication. 

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Tests](#tests)
* [License](#license)


## Installation
  
Run `npm install` to install the dependencies. 
Run `npm run seed` to seed the database.
Run `npm start` to invoke the application.


## Usage

When you visit the site for the first time, you are presented with the homepage and a navigation menu with links to the homepage, the dashboard, the login page, and the signup page.

When you click on any menu link other than the home page option, you are prompted to log in or sign up for an account.

When you click the **Sign Up link**, you are prompted to input a username and an email address, and to create a password. Your username will be displayed on your blog posts and comments. Your password must be at least 8 characters long. When you click on the **Submit** button, you user credentials are saved and you are logged into the website.

When you revisit the site at a later time and choose to log in, you will be prompted to enter your email adresss and password. When you log in, the **Login** and **Sign Up** menu options are replaced by a **Logout** option.  

When you click on the homepage link, you are taken to the homepage where you can view and comment on any existing blog posts. Each blog post includes a title, the user name of the creator, and the date on which it was created. You can click on any existing blog post to view comments and/or enter a comment of your own. Once you have written your comment, click on the **Submit** button to save it. The blog post will then be updated to display your comment, username, and the dated you created the comment. You mustbe logged in to leave comments.

When you click on the dashboard option in the navigation menu, you are taken to the dashboard, where you will be presented with the titles of all the blog posts you have already created and an option to create a new blog post. When you click on the link to add a new blog post, you are prompted to enter both a title and contents for your blog post. Once you are finished, click on the **Save** button. The title and contents of your post are saved and you are taken back to an updated dashboard that includes your new blog post.

If you wish to update or delete one of your existing blog posts, click on the grey bar containing the title of the post you want to update or delete. To update the post, make your changes and click the **Update** button to save it. To delete the post, click the **Delete** button. Once the selected blog past has been saved or deleted, you are taken back to the updated dashboard. 

To log out of the application, click on the **Logout** option in the navigation menu.

If you are idle on the site for more than a five minutes, you are still able to view comments, but if you try to enter a comment, you are prompted to log in again.


## License

 This project is licensed under the terms of the MIT license.

 ![License: ](https://img.shields.io/badge/License-MIT-blueviolet.svg)


## Badges

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)  ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)  ![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)  ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)  ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)  ![Mongoose](https://img.shields.io/badge/Mongoose-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)  ![Insomnia](https://img.shields.io/badge/Insomnia-black?style=for-the-badge&logo=insomnia&logoColor=5849BE)

![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white) ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)  ![edX](https://img.shields.io/badge/edX-%2302262B.svg?style=for-the-badge&logo=edX&logoColor=white)




## Review

You are required to submit BOTH of the following for review:

* The URL of the functional, deployed application Heroku.

* The URL of the GitHub repository, with a unique name and a readme describing the project.
