1. Create a new repository for your server project
2. ```touch``` a server.js, .env, and .gitignore file
3. ```npm init``` to create a package.json file
4. ```npm install``` all the necessary packages you will need i.e. express, superagent, cors etc.
5. Ensure you have the dotenv package installed and include your PORT variable as well as any secret keys you will be using in your .env file
6. add node_modules and .env to your .gitignore file
7. ```require``` express, cors, and superagent into your server.js
8. ensure your environment variables are being used by including ```require('dotenv').config()``` in your server.js
9. instatiate an instance of express with ```const app = express()```
10. ensure you have a PORT variable set up listening to ```process.env.PORT || 3000```
11. tell express to listen on your port with ```app.listen(PORT, callback)```
12. check your terminal to ensure it's running with no errors
13. Set up a root route with ```app.get('/', (req, res) => res.send([some data]))```
14. add a catch all route with ```app.get('*', (req, res) => res.send([500 error message]))```
15. you now have an operational server! Get hacking!

p.s. if applicable, don't forget to set up cors by importing and telling express to use it with ```app.use(cors())```