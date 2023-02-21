const express = require('express'); 
const mongodb = require('mongodb');
const cors = require('cors');
const path = require('path');
const router = express.Router()


const app = express(); 

// Enable CORS security headers
app.use(cors())

//add middlewares
// Have Node serve the files for our built React app
const production = process.env.NODE_ENV === 'production'
if (production) {
    app.use(express.static(path.join(__dirname, '../frontend/build')))
} else {
    app.use(express.static(path.join(__dirname, '../frontend')))
}

// const root = path.join(__dirname, '../frontend');
// app.use(express.static(root));

// // to parse POST method
// app.use(express.json())
// app.use(express.urlencoded({ extended: true }));

//set server port
const port = process.env.PORT || 5000; // or 3001

// create a GET route
app.get('/api', (req, res) => { 
  res.json({
     message: "Hello from Express!" 
    });
}); 

// server index.html for unknown paths
// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../frontend/public', 'index.html'));
});


// This displays message that the server running and listening to specified port
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
});

//creating a simple database in MongoDB
//create a mongoDB Client object, then specify a connecting url

// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/mydb";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   console.log("Database created!");
//   db.close();
// });