Simple Authentication System (Node.js + Express)

A lightweight authentication system built with Node.js, Express, and express-session.
It includes user registration, login, session-based authentication, logout, and a protected dashboard route.

✨ Features

Register (Sign Up): Create a new account with email & password

Login: Authenticate with registered credentials(For Example: use Credentials {Email: winnybabu@gmail.com , Password : winny@123})

Sessions: Stay logged in using cookies & sessions

Logout: Clear session and redirect to login page

Protected Route: /dashboard is accessible only when logged in

⚙️ Installation

Clone this repository:

git clone https://github.com/PetersonWinnyBabu/user-login-management
cd auth-app


Install dependencies:

npm install


Start the server:

node server.js


Open in browser:

http://localhost:3000

🔑 Usage

Visit /register to create a new account

Visit /login to sign in with your credentials

After login, you’ll be redirected to /dashboard

Click Logout to end the session

📦 Dependencies

express
 – Web framework

jsonwebtoken
 – cookie management

bcryptjs
 – Password hashing

body-parser
 – Parse form data


📜 License

This project is licensed under the MIT License.
