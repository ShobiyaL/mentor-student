const express = require("express");
const router = express.Router();

const { mentor } = require("../config/database");

router.get("/", async (req, res) => {
//   console.log(" to get all mentors");
  try {
    const data = await mentor.find();
    res.json(data);
  } catch (e) {
    console.log(e, "error");
    res.status(400).json(e);
  }
});

router.post("/", async (req, res) => {
//   console.log("mentor create route");
  try {
    const data = await mentor.create({
      name: req.body.name,
      email: req.body.email,
      expertise: req.body.expertise,
      studentsAssigned: req.body.studentsAssigned,
    });
    res.json(data);
  } catch (e) {
    console.log(e, "error");
    res.status(400).json("Error");
  }
});

router.get("/:id", async (req, res) => {
//   console.log("show all students for particular mentor");
  try {
    const ment = await mentor
      .findById(req.params.id)
      .populate("studentsAssigned", "name");
    res.json(ment);
  } catch (e) {
    console.log(e, "error");
    res.status(500).json("error in for 1 mentor get all students");
  }
});
module.exports = router;