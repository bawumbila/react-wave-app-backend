// require our modules
const express = require("express");
const morgan = require("morgan");
//TODO: require cors module
const cors = require("cors");
// initiate the express app
const app = express();
//Allow multiple origins
const allowedOrigins = [
  "http://localhost:3000",
  "https://react-wave-app-frontend2.netlify.app",
];
require("dotenv").config();
// configure settings app.set()
//TODO: require and configure our dotenv module
require("./config/database");
//TODO: require our database config file
// mount middleware with app.use()
app.use(morgan("dev"));
app.use(express.json()); //converts incoming json into req.body
app.use(cors());
// mount our route with app.use()
app.use("/api/tracks", require("./routes/api/tracks"));
// tell the app listen to port 3001
const port = process.env.PORT || 3001;

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like mobile apps or curl)
      if (!origin) return callback(null, true);

      if (allowedOrigins.indexOf(origin) === -1) {
        return callback(new Error("Not allowed by CORS"), false);
      }
      return callback(null, true);
    },
    credentials: true,
  }),
);

app.use(express.json());

app.listen(port, function () {
  console.log(`Express is listening for AJAX request on port ${port}`);
});
