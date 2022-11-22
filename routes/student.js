const express = require("express");
const router = express.Router();

const { student, mentor } = require("../config/database");

router.get("/", async (req, res) => {
  // console.log("get all Students");
  try {
    const data = await student.find();
    res.json(data);
  } catch (e) {
    res.status(401).json(e);
  }
});

router.post("/", async (req, res) => {
  // console.log("Student create route");
  try {
    const data = await student.create({
      name: req.body.name,
      email: req.body.email,
      course: req.body.course,
      mentorAssigned: req.body.mentorAssigned,
    });
    res.json(
        {
            message:"Created Student",
            data
    }
        );
  } catch (e) {
    // console.log(e.message, "error");
    res.status(500).json("Error in student POST");
  }
});

module.exports = router;