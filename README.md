# Chinese Learning API

This is an API run on the localhost:3000 that provides users with the ability to create word lists, choose words to add to the wordsets and add labels to the wordsets. Users can also edit, update, delete wordsets,labels and wors if needed. 

## Table of content  
- [**Getting Started**](#getting-started)
   - [**Installing**](#installing)
   - [**Start the app in the dev mode**](#dev-mode)
   - [**Start the app without dev mode**](#no-dev-mode)
- [**Running the test**](#running-the-test)
  - [**Postman Testing Table**](#postman-testing-table)
     - [**User routes Table**](#user-routes-table)
     - [**Word routes Table**](#word-routes-table)
     - [**Label routes Table**](#label-routes-table)
     - [**Wordset routes Table**](#wordset-routes-table)
  - [**User routes**](#user-routes)
     - [**/users (get)**](#show-all-users)
     - [**/users/login**](#users-login)
     - [**/users/signup**](#users-signup)
     - [**/users/:id (get))**](#show-a-user)
     - [**/users/:id (put))**](#update-a-user)
     - [**/users/:id  (delete)**](#delete-a-user)
   - [**Word routes**](#word-routes)
     - [**/words (get)**](#show-all-words)
     - [**/words (post)**](#create-a-word)
     - [**/words/:id (get))**](#show-a-word)
     - [**/words/:id (put))**](#update-a-word)
     - [**/words/:id  (delete)**](#delete-a-word)
     - [**/words/level/:number (get)**](#show-all-words-in-level)
     - [**/words/topic/:theme (get)**](#show-all-words-in-topic)
  - [**Label routes**](#label-routes)
     - [**/labels (post)**](#create-a-label)
     - [**/labels/:id (get))**](#show-a-label)
     - [**/labels/:id (put))**](#update-a-label)
     - [**/labels/:id  (delete)**](#delete-a-label)
   - [**Wordset routes**](#wordset-routes)
     - [**/wordsets (get)**](#show-all-wordsets)
     - [**/wordsets (post)**](#create-a-wordset)
     - [**/wordsets/:id (get))**](#show-a-wordset)
     - [**/wordsets/:id (put))**](#update-a-wordset)
     - [**/wordsets/:id  (delete)**](#delete-a-wordset)
     - [**/wordsets/:wordsetId/words/:wordId**](#add-words)
     - [**/wordsets/:wordsetId/labels/:labelId**](#add-labels)
- [**User Story**](#user-story)
 
  
  
## Getting Started 
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

### Installing

1. copy the url: `git@github.com:EmmaQjf/Chinese-learning-4models.git` 
   <img width="715" alt="Screen Shot 2024-01-27 at 10 55 15 AM" src="https://github.com/EmmaQjf/Chinese-learning-4models/assets/122846366/cb0e5e18-dcaa-42b5-8ea2-26540492dfab">
2. Open Terminal and change the current working directory to the location where you want the cloned directory.
3. clone the repo to the local directory: `git clone git@github.com:EmmaQjf/Chinese-learning-4models.git`
4. cd into the clone directionary.
5. Open the code in VS `code .`  
6. Install all the packages: express, mongoose, dotenv, nodemon, bcrypt, jsonwebtoken, mongodb-memory-server,morgan, jest, supertest:  `npm i`
7. Create a file .env and put in your MONGO_URI and SECRET
8. 
## Steps

**Install Gulp Globally**
```bash
npm i -g gulp-cli
```

**Start the dev server**
```bash
npm run dev
```
### or
```bash
yarn dev
```

**Start the dev server with proxy**
```bash
npm run proxy
```

**Build files for production**
```bash
yarn build
```
### or

```bash
npm run build
```

**Deploy for production script**
```bash
npm start
```
### or
```bash
yarn start
```

### [:arrow_up: Back to Top](#table-of-content)

### <a name="dev-mode"></a>Start the app in the dev mode 
`npm run dev`

### <a name="no-dev-mode"></a>Start the app without dev mode 
`npm run start`

### [:arrow_up: Back to Top](#table-of-content)

## Running the test
1. Check jest and supertest is installed, if not:`npm -i D jest supertest`.
2. Check jest and supertest is set up on the package.json.  
    ```diff
    "scripts": {
    "test": "jest --watchAll --detectOpenHandles",
    "start": "node server.js",
    "dev": "nodemon"
    },
    "jest": {
    "testEnvironment": "node"
    },
    ```
3. Run the test: `npm run test`

### [:arrow_up: Back to Top](#table-of-content)
