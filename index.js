const express = require('express')
const cors = require("cors");
require("dotenv").config();
const port = 4000;

const { dbConnect } = require("./config/database");
const studentRoute = require("./routes/student");
const mentorRoute = require("./routes/mentor");
const assignMentor = require("./routes/assignMentor");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//test api
app.get("/", (req, res) => {
    res.json({
        message:"Test Success",
    });
  });
  app.use("/student", studentRoute);
  app.use("/mentor", mentorRoute);
  app.use("/assignmentor", assignMentor);

app.listen(process.env.PORT || port , async (err) => {
    await dbConnect();
    console.log("App is running on the port "+port);
    if (err) {
      console.log(err, "error in starting server");
    }
  });