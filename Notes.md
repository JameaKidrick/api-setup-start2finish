# Creating a PostgreSQL Backend

## Why PostgreSQL?
SQLite erases ALL data every 24 hours. Using PostgreSQL allows for truly persistent data to make apps that are better for production. An example app would be a social media website. With SQLite, user accounts would be deleted from the database after 24 hours, thereby forcing users to remake their accounts.

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
  - add api folder
    - add server.js [`'/api/server'`]
    - add helpers folder
    - add routers folder
  - run `knex init` to get knexfile at src
  - add .env [`'/.env'`]
  - add data folder
    - add database config file [`'/data/dbConfig.js'`]
    - add migrations file [automatic (knex)]
    - add seeds file [automatic (knex)]

#### _Package.json_
  - add `"server": "nodemon index.js"` to scripts
  - add `"start": "node index.js"` to scripts (if deploying to heroku)

#### _index.js_
  - import server
  - set up dynamic port
  - connect server to port

#### _server.js_
  - import express
  - import helmet
  - import morgan
  - import cors
  - create/start server using express
  - use helmet
  - allow express to parse json
  - use cors
  - use morgan version `dev`
  - add a sanity check
  - export server

#### _knexfile.js_
  - remove staging
  - add `client: 'pg'` to both development and production
  - add connection to database in place of `filename`
  - add `useNullAsDefault: true`
  - add migrations [`'./data/migrations'`] and seeds [`'./data/seeds'`] directories to both development and production
  - add `process.env.DATABASE_URL` to production.connection
  - import dotenv => `require('dotenv').config()`

#### _.env_
  <!-- username and password can be changed in pgAdmin if a new servergroup is created, otherwise password is stored  already and username is in PostgreSQL 12 properties -->
  - add username 
  - add database name (created in pgadmin)
  - add password

#### _dbConfig.js_
  - import knex
  - import knexfile
  - export 

### DB Schema
  - location: `/design-files/schema_design.jpg`

### Migrations
  - create migration => run `knex migrate:make <name>`
    - here, a different migration is created per table