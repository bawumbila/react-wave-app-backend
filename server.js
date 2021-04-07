// require our modules
const express = require('express');
const morgan = require('morgan');
//TODO: require cors module
const cors = require('cors');
// initiate the express app
const app = express();
require('dotenv').config();
// configure settings app.set()
//TODO: require and configure our dotenv module
require('./config/database');
//TODO: require our database config file
// mount middleware with app.use()
app.use(morgan('dev'));
app.use(express.json()); //converts incoming json into req.body
app.use(cors());
// mount our route with app.use()
app.use('/api/waves', require('./routes/api/waves'));
// tell the app listen to port 3001
const port = process.env.port || 3001;
app.listen(port, function () {
  console.log(`Express is listening for AJAX request on port ${port}`);
});