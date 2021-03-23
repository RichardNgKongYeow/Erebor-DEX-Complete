const express = require("express");         // For building the Rest apis
const bodyParser = require("body-parser");  // Help to parse the request and create the req.body object
const cors = require("cors");               // To provide Express middleware to enable CORS

const app = express();

var corsOptions = {origin: "http://localhost:3001"};  // For development testing

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// database
const db = require("./models");
const Role = db.role;


// force: true will discard the new table if it already exists
db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync Db');
  initial();
});

// For Production - replace above with db.sequelize.sync()
//db.sequelize.sync()

// Initial() will create 2 roles (user & Admin) in the "roles" database
function initial() {
  Role.create({
    id: 1,
    name: "user"
  });
   
  Role.create({
    id: 2,
    name: "admin"
  });
}

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Erebor." });
});


// To provide the routes for user's authenticationand authorisation
require('./routes/auth.routes')(app);

// set port to listen for requests (If for development, listening on port 3001)
// For Production Build, it will address the 'PORT' parameter below
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


