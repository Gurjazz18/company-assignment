<h1 align="center" id="title">Task Management</h1>
A task management app is a software application designed to help individuals or teams organize, 
track, and manage their tasks and activities efficiently. 
Task management apps provide users with a central platform to create, assign, prioritize, monitor,
and track tasks, ensuring that projects and daily responsibilities are effectively managed.


## 🛠 Built with 

Technologies used in the project:

![Javascript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&amp;logo=javascript&amp;logoColor=F7DF1E)

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&amp;logo=react&amp;logoColor=61DAFB)

![React-Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&amp;logo=react-router&amp;logoColor=white)



![Chakra-UI](https://img.shields.io/badge/Chakra--UI-319795?style=for-the-badge&amp;logo=chakra-ui&amp;logoColor=white)

![Node-JS](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&amp;logo=nodedotjs&amp;logoColor=white)

![Express-JS](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&amp;logo=express&amp;logoColor=white)

![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&amp;logo=mongodb&amp;logoColor=white)

![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&amp;logo=JSON%20web%20tokens)

## 💻 Screenshots

**Home Page:**
![Home Page](https://github.com/Gurjazz18/company-assignment/assets/96822665/5a7b3a17-d3ca-4011-bdaf-94096919eee6)


**Login Page:**
![Login Page](https://github.com/Gurjazz18/company-assignment/assets/96822665/bc7cefa9-845b-4683-ab88-9372a9e55132)



**SignUp Page:**
![SignUp](https://github.com/Gurjazz18/company-assignment/assets/96822665/5408e38c-f3eb-436e-8318-f00e511610a4)

**Task Form:**
![Task Page](https://github.com/Gurjazz18/company-assignment/assets/96822665/4f703e5e-e788-47cd-958e-24a8fcc563e4)






## 🚀 Demo

**Front-end deployed URL:**

https://frontend-two-ruddy-99.vercel.app/

**Back-end deployed URL:**

https://newtask-v32e.onrender.com

##  📁 Folder structure
#### `Frontend` - Holds the client application
- #### `public` - This holds all of our static files
- #### `src`
    -
    - #### `components` - This folder holds all of the different components that will make up our pages
    - #### `pages` - These represent a unique page on the website i.e. Home or About. 
  
    - #### `App.js` - This is what renders all of our browser routes and different pages
    - #### `index.js` - This is what renders the react app by rendering App.js.
- #### `package.json` - Defines npm behaviors and packages for the client
#### `Backend` - Holds the server application
- #### `config` - This holds our configuration files, like mongoDB uri
- #### `middlewares` - This holds our middlewares used in our application
- #### `models` - This holds all of our data models 
- #### `routes/controllers` - This holds all of our HTTP to URL path associations for each unique url
- #### `server.js` - An entry file for our Node JS application
#### `package.json` - Defines npm behaviors like the scripts defined in the next section of the README
#### `.gitignore` - Tells git which files to ignore
#### `README` - This file!
# Installation


## Client-side usage

Go to the project directory

```bash
$ cd frontend          // go to client folder
$ yarn # or npm i    // npm install packages
$ npm run start        // run it locally

// deployment for client app
$ npm run build // this will compile the react code using webpack and generate a folder called docs in the root level
```
## Server-side usage

**Environment Variables:-**

To run this project, you will need to add the following environment variables to your .env file

```
port                    // the port on which the server will run
mongoDbUrl              // your mongoDB URI to connect to the mongoDB atlas

```

**Start**

```bash
$ cd backend            // go to Backend folder
$ npm i                 // npm install packages
$ npm run server        // run it locally
```
