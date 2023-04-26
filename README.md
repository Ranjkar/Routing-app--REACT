# My App
This is a simple web application with a homepage, a login page, and a dashboard. It allows users to login, access the dashboard, and logout.

## Features
Implemented a navbar with a home link and a login link.
The home page contains a link to go to the dashboard.
When the user clicks on the dashboard link, it redirects the user to the login page because the user needs to be logged in to access the dashboard.
When the user enters login details (username: "uncinc", password: "letmein"), and successfully logs in, a variable is stored in the local storage to remember the user.
Once the login is successful, the user is redirected to the dashboard.

# Technologies Used

React

React Router DOM

# Folder Structure
```bash
my-app/
├── node_modules/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── navbar/
│   │   │   ├── navbar.jsx
│   │   │   └── navbar.css
│   │   └── ...
│   ├── pages/
│   │   ├── dashboard/
│   │   │   ├── dashboard.jsx
│   │   │   └── ...
│   │   ├── home/
│   │   │   ├── home.jsx
│   │   │   └── ...
│   │   ├── login/
│   │   │   ├── login.jsx
│   │   │   ├── login.css
│   │   │   └── ...
│   │   └── ...
│   ├── utils/
│   │   ├── auth.js
│   │   ├── PrivateRoute.js
│   │   └── ...
│   ├── App.js
│   ├── index.js
│   ├── index.css
│   └── ...
├── package.json
├── yarn.lock
└── README.md
```
#Simple Explanation,
The main folder is src because in the src we have components, pages, utils...
We start from pages, we have three pages (dashboard,home,login)
Then we have components, we have a single component Navbar, 
Inside util we have two functions auth.js and privaterouter.js 

Why we created this? 
First of all we have app.js, inside app.js we import the navbar component and pass the login and the logout function, because we need navbar in all the pages, we pass loggedin and handlelogout to check the login status, if user logged we show the dashboard otherwise login, same with logout, 

Navbar page: we have two probs(loggedin/handlelogout) 
If we are logged in the dashboard and logout button will come, if we are not logged in the login will come.

App.js :
How we know login status?
We check username and password inside "login" function(inside the utils/auth.js) 
We save a flag for the logged-in user on local

Auth.js
Function auth check user login status from local storage.

Function login is to check username and password and then save the state of user in localstorage.

Login.jsx
We have login components, two text fields we put user/pass to handlelogin function,

Home.jsx
We have the heading and link for the dashboard.

Dashboard (PrivateRouter)
If the user logged in, > privaterouter.js (utils) 
It goes to Outlet (rout inside private rout component) 
If its not login it navigate to login otherwise dashboard page

# Getting Started
To get started with the project, follow these steps:

Clone the repository to your local machine.

Navigate to the project directory.

Install the dependencies using the following command: 

yarn add.

Run the project using the following command: 

yard start.


Open http://localhost:3000 to view it in the browser.
