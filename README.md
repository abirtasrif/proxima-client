# Proxima 
Proxima is a powerful project management app built using the MERN stack. With Proxima, users can create, update, and delete their own projects with ease. The app is highly secure, featuring robust JWT authentication and frontend route protection. In addition, the app boasts a sleek and intuitive user interface, built using Tailwind CSS.

## Features
Proxima comes packed with a variety of useful features, including:

<b> Effortlessly manage projects: </b> Create, update, and delete projects quickly and easily using the user-friendly interface. <br />
<b>Robust security features: </b> The app features highly secure JWT authentication and frontend route protection, ensuring that your data is always safe and secure.<br />
<b>User-specific project views: </b> Users can only see the projects they have created, ensuring that project information is kept private and secure.<br />
<b>Intuitive and streamlined UI: </b> The app's sleek and intuitive user interface makes managing projects a breeze.
Tools
Proxima is built using the MERN stack, featuring the following powerful tools:

- MongoDB: A highly flexible NoSQL database, ideal for managing large and complex data sets.
- React: A powerful and popular frontend JavaScript library, ideal for building user interfaces.
- Node.js: A powerful and popular server-side JavaScript runtime environment.
- Tailwind CSS: A highly customizable CSS framework, designed to make building sleek and intuitive user interfaces a breeze.
Installation
To install Proxima, follow these simple steps:

1. Clone the `client` repository using git clone [https://github.com/abirtasrif/proxima-client.git](https://github.com/abirtasrif/proxima-client.git)
2. Clone the `server` repository using git [https://github.com/abirtasrif/proxima-server.git](https://github.com/abirtasrif/proxima-server.git)
3. Install the required dependencies by running `npm install` or `npm i` in both the `client` and `server` directories.
4. Create a .env file in the root directory of server and add the following variables:
`MONGO_URI:` the MongoDB connection string
`SECRET:` a secret string for JWT authentication
5. Create a .env file in the root directory of client and add the following variable:
`REACT_APP_BASE_URL:` for example `http://localhost:5000`
6. Start the backend server by running `npm run dev`
7. Start the frontend by running `npm start`

### Links
- [Live Demo](https://proxima.abirtasrif.com/) 
- [Front-End Repository](https://github.com/abirtasrif/proxima-client.git)
- [Back-End Repository](https://github.com/abirtasrif/proxima-server.git)
