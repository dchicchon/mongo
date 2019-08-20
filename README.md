# Mongo

## Site Gif
- 

## Summary
This repo is dedicated to explaining basic interactions with a Mongo Database using Express.js and Mongoose. This app also uses React.js as the user interface. 

## NPM 
- mongoose: used to connect to MongoDB database 
- express: a web-framework that quickly setup servers that can listen for requests.
- create-react-app: sets up a single-page react app that requires no configuration
- surge: quick deployment method for client
- concurrently: used to run both the server and the client at the same time.

## Steps
1. Create directory and add server.js and folders for routes, models, and controllers.

2. Within the root directory, use create-react-app and name the directory 'client'.

3. Install npm packages in both the client and root directories.

4. Setup MongoDB in server.js by adding your database uri and using mongoose to create the connection. Here we use global.db to have the database be used anywhere in our app.


