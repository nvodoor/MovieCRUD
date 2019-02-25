### React Native MovieCRUD

This is a simple React Native CRUD app designed to allow a user to search for movies and then add them to a favorite movies list. They also have the options to delete these movies from said list if they would like.

How to run application:
- Navigate to project folder
- Open terminal
- Copy config.example.jsx file in settings. Rename as config.js. Edit the apiKey within config.js to correspond to your TMDB api Key.
- Look in package.json. If you do not have a mysql root username or you want to use a different username to load this database, edit the db command to use a username other than root.
- Open servers/index.js. Edit the username variable, and add a password if necessary to connect to your mysql database. To add a password, just add a password property to the object.
- First command to use - "npm run db" - This should load the mysql database on your computer. 
- Next command to use - "npm run server". This command is necessary to start up the server which we will use to connect to the database.
- Final command to use from terminal - "npm start". This command should boot up expo.
- Within expo, you will want to click on the Run on iOS simulator tab. This should open a debugging page along with the iOS simulator on your computer.
- Enjoy. The app should be running on your computer. 