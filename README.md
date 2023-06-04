# Tech-Blog

Writing about tech can be just as important as making it. Developers spend plenty of time creating new applications and debugging existing codebases, but most developers also spend at least some of their time reading and writing about technical concepts, recent advancements, and new technologies. A simple Google search for any concept covered in this course returns thousands of think pieces and tutorials from developers of all skill levels. I built this CMS-style blog site so that developers can publish their blog posts and comment on other developers’ posts as well. 

The app follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Tests](#tests)
* [License](#license)


## Installation
  
Run `npm install` to install the dependencies; 
Npm run seed
`npm start`


## Usage

WHEN I visit the site for the first time THEN I am presented with the homepage

includes existing blog posts if any have been posted
navigation links for the homepage and the dashboard
option to log in
WHEN I click on the homepage option THEN I am taken to the homepage

WHEN I click on any other links in the navigation THEN I am prompted to either sign up or sign in

WHEN I choose to sign up THEN I am prompted to create a username and password

WHEN I click on the sign-up button THEN my user credentials are saved and I am logged into the site

WHEN I revisit the site at a later time and choose to sign in THEN I am prompted to enter my username and password

WHEN I am signed in to the site THEN I see navigation links

homepage
dashboard
option to log out
WHEN I click on the homepage option in the navigation THEN I am taken to the homepage

presented with existing blog posts
include post title and date created
WHEN I click on an existing blog post THEN I am presented with

post title
contents
post creator’s username
date created for that post
have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in THEN the comment is saved the post is updated to

display the comment
the comment creator’s username
date created
WHEN I click on the dashboard option in the navigation THEN I am taken to the dashboard

presented with any blog posts I have already created
the option to add a new blog post
WHEN I click on the button to add a new blog post THEN I am prompted to enter both a title and contents for my blog post

WHEN I click on the button to create a new blog post THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post

WHEN I click on one of my existing posts in the dashboard THEN I am able to delete or update my post and taken back to an updated dashboard

WHEN I click on the logout option in the navigation THEN I am signed out of the site

WHEN I am idle on the site for more than a set time THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments



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
