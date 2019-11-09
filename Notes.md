# Creating a PostgreSQL Backend

## Setting up API

### **Initiate git repo**
  - run `git init` => to start git repo 
  - run `npm i` => install npm
  - run `npm init -y` => to bring in package.json with defaults
  - run `npx gitignore node` => to add gitignore file compatible with node
  - run `git add .`
  - run `git commit -m 'initial commit'`
  - go on GitHub and create an EMPTY repo (meaning no README, License, or gitignore)
  - run `git remote add origin <url>` => connecting empty repo to code
  - run `git push -u origin master` => pushing up changes to github
  - run `git checkout -b '<branch-name>'`

### **Add dependencies**
  - run `npm i express helmet knex pg morgan dotenv cors` 
    - express
      - web framework
      - [https://www.npmjs.com/package/express]
    - helmet
      - helps you secure your Express apps by setting various HTTP headers
      - [https://www.npmjs.com/package/helmet]
    - knex
      - multi-dialect (MSSQL, MySQL, PostgreSQL, SQLite3, Oracle (including Oracle Wallet Authentication)) query builder for Node.js
      - [https://www.npmjs.com/package/knex]
    - pg (postgresql)
      - PostgreSQL client for Node.js
      - [https://www.npmjs.com/package/pg]
    - morgan
      - HTTP request logger middleware for node.js
      - [https://www.npmjs.com/package/morgan]
    - dotenv
      - loads environment variables from a .env file into process.env 
      - [https://www.npmjs.com/package/dotenv]
    - cors 
      - provides a Connect/Express middleware that can be used to enable CORS with various options
      - [https://www.npmjs.com/package/cors]
  - run `npm i -D nodemon`
    - nodemon
      - nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected
      - [https://www.npmjs.com/package/nodemon]

### **Set up file structure**
  - add index.js [`'/index.js'`]
  - add server.js [`'/server.js'`]


#### _Package.json_
  - add `"server": "nodemon index.js"` to scripts
    