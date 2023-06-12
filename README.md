# Tech-Blog

This CMS-style blog site was created for developers to publish their blog posts from a dashboard and comment on other developers’ posts from the home page. The application follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and an Express.js API for the contollers. The application also uses the dotenv package to enable use of environment variables, the bcrypt package to hash passwords, and the express-session and connect-session-sequelize packages for user authentication. The express-session package stores the session data on the client in a cookie that expires after five minutes of user inactivity. 

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)


## Installation

The application is deployed to Heroku. To install the application locally, do the following:
  
* Run `npm install` to install the dependencies. 
* Run `npm run seed` to seed the database.
* Run `npm start` to invoke the application.


## Usage

When you visit the site for the first time, you will be presented with the homepage and a navigation menu with links to the homepage, the dashboard, the login page, and the signup page.

![image](https://github.com/mathminx/Tech-Blog/assets/122234007/3d361937-3bff-4da2-9f65-bfc8caa8fc6d)


When you click on any menu link other than the home page option, you will be prompted to log in or sign up for an account.

![image](https://github.com/mathminx/Tech-Blog/assets/122234007/228b0354-8b7b-49da-b892-d74c3a1a1380)


When you click the **Sign Up link**, you will be prompted to input a username and email address, and to create a password. Your username will be displayed on your blog posts and comments. Your password must be at least 8 characters long. 

![image](https://github.com/mathminx/Tech-Blog/assets/122234007/8b34f771-06ab-4276-b94a-84764096ec1b)


When you click on the **Submit** button, your user credentials will be saved and you will be logged into the website.

![image](https://github.com/mathminx/Tech-Blog/assets/122234007/c7e394d2-fcc7-4e9c-ab34-1ed8e426a616)


When you revisit the site at a later time and choose to log in, you will be prompted to enter your email adresss and password. 

![image](https://github.com/mathminx/Tech-Blog/assets/122234007/122d6126-bb64-490f-a7d7-4623879cdb3a)


When you log in, the **Login** and **Sign Up** menu options will be replaced by a **Logout** option.  

![image](https://github.com/mathminx/Tech-Blog/assets/122234007/425f366b-8d04-4348-bfb9-7c8fbb2f4495)


When you click on the homepage link, you will be taken to the homepage where you can view and comment on any existing blog posts. Each blog post includes a title, the user name of the creator, and the date on which it was created. 

![image](https://github.com/mathminx/Tech-Blog/assets/122234007/e87c3649-af4a-4fd3-9536-5c56c5cd297a)


You can click on any existing blog post to view comments and/or enter a comment of your own. to leave a comment, click the **Add a comment** button. You must be logged in to leave comments.

![image](https://github.com/mathminx/Tech-Blog/assets/122234007/1c869311-37ed-47e8-962a-752b78dc2dc4)


Once you have written your comment, click on the **Submit** button to save it. 

![image](https://github.com/mathminx/Tech-Blog/assets/122234007/aeb55c38-48d3-49a7-89a6-643ebf0cad40)


The blog post will be updated to display your comment, username, and the dated you created the comment.

![image](https://github.com/mathminx/Tech-Blog/assets/122234007/54b610cb-2848-40f8-bd45-5e157d6e359b)


When you click on the dashboard option in the navigation menu, you will taken to your dashboard, where you will be presented with the titles of all the blog posts you have already created and an option to create a new blog post. 

![image](https://github.com/mathminx/Tech-Blog/assets/122234007/53ad7508-fce1-4c2e-8326-ab0c7ea9272c)


When you click on the link to add a new blog post, you will prompted to enter both a title and contents for your blog post. Once you are finished, click on the **Save** button. 

![image](https://github.com/mathminx/Tech-Blog/assets/122234007/554b0494-e449-4974-9db7-a149bde79a37)


The title and contents of your post will be saved and you will return to your updated dashboard that includes your new blog post.

![image](https://github.com/mathminx/Tech-Blog/assets/122234007/89f96159-0a72-424c-8052-0673436bf119)


If you wish to update or delete one of your existing blog posts, click on the grey bar containing the title of the post you want to update or delete. 

![image](https://github.com/mathminx/Tech-Blog/assets/122234007/d3466913-1813-4402-9a9e-d0b4ce7b2bc4)


To update the post, make your changes and click the **Update** button to save it. 

![image](https://github.com/mathminx/Tech-Blog/assets/122234007/911fc570-a6b8-41e2-aa48-2e5aa5a89541)


Your updated post will be saved and you will be taken back to your dashboard where your updates will be reflected.

![image](https://github.com/mathminx/Tech-Blog/assets/122234007/c4eff399-8eec-4e3b-bbc5-46372a7d8885)


To delete a post, click the **Delete** button. 

![image](https://github.com/mathminx/Tech-Blog/assets/122234007/2d5ea6db-9dab-439a-ab48-bfa4d29a6b2b)


Once the selected blog past has deleted, you will be taken back to your updated dashboard. 

![image](https://github.com/mathminx/Tech-Blog/assets/122234007/d022c431-88d7-4326-a670-55986594db23)


To log out of the application, click on the **Logout** option in the navigation menu.

![image](https://github.com/mathminx/Tech-Blog/assets/122234007/80625050-6a3e-46e0-8314-7f66dbe0eac0)


You will be taken to the home page.

![image](https://github.com/mathminx/Tech-Blog/assets/122234007/b312e619-ccfb-4bef-8024-e45550d04abd)


If you are idle on the site for more than a five minutes, you are still able to view comments, but if you try to enter a comment, you will be prompted to log in again.

![image](https://github.com/mathminx/Tech-Blog/assets/122234007/f08eee11-eadf-4cd7-a3ac-12da0ba98813)



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
