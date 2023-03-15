const express = require('express'); 
const cors = require('cors');
const path = require('path');
const router = express.Router()

const { Pool, Client } = require('pg');

//set server port
// CONSTANTS
const port = process.env.PORT || 5000; 

const app = express(); 

// Enable CORS security headers
app.use(cors())

// telling ExpressJS to look up static files in the react app build folder.
const production = process.env.NODE_ENV === 'production'
if (production) {
    app.use(express.static(path.join(__dirname, '../frontend/build')))
} else {
    app.use(express.static(path.join(__dirname, '../frontend')))
}
// // to parse POST method
// app.use(express.json())
// app.use(express.urlencoded({ extended: true }));


// create a GET route
app.get('/api', (req, res) => { 
  res.json({
     message: "Hello from Express!" 
    });
}); 

// server index.html for unknown paths
// All other GET requests not handled before will return our React app
// may need to move index.html out of public folder since thats default react code!!
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../frontend/public', 'index.html'));
});
// app.use('/*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });


const client = new Client({
  user: 'user',
  host: 'postgres',
  database: 'db',
  password: 'pass',
  port: 5432,
});
client.connect()
client.query('SELECT NOW()', (err, res) => {
  console.log("Error or response:: ", err, res)
  client.end()
});

// This displays message that the server running and listening to specified port
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
});