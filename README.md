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
# Getting Started
To get started with the project, follow these steps:

Clone the repository to your local machine.

Navigate to the project directory.

Install the dependencies using the following command: 

yarn add.

Run the project using the following command: 

yard start.


Open http://localhost:3000 to view it in the browser.
