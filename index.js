import express, { application, Router } from "express";
import bodyParser from "body-parser";
import routes from "./router/index.js";
import mongoose from "mongoose";
import jsonwebtoken from "jsonwebtoken";

const app = express();
const PORT = process.env.PORT || 4000;
const URL = "------------------------------";

mongoose.Promise = global.Promise;
mongoose.set("strictQuery", false);
mongoose
  .connect(URL)
  .then(() => {
    console.log(`DataBase Successfully Connected`);
  })
  .catch((err) => `Databse Error...`);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//JWT Setup
app.use((req, res, next) => {
  // const secKey = req.headers['authorization'].split(" ")[0]||""
  // console.log(secKey)
  if (req.headers["authorization"]) {
    jsonwebtoken.verify(
      req.headers["authorization"],
      "RESTFULAPIs",
      (err, decode) => {
        if (err) {
          req.user = undefined;
          console.log("Key Error Inside");
        }
        req.user = decode;
        next();
      }
    );
  } else {
    req.user = undefined;
    next();
  }
});

routes(app);

app.listen(PORT, (req, res) => {
  console.log(`Server is Listening At Port ${PORT} `);
});
