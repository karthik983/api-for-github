var express = require("express");
var router = express.Router();
var User = require("../models/users");
var Indi = require("../models/user");
var Repos = require("../models/repos");
/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

//All Users
router.get("/users", (req, res) => {
  User.find({}, (err, data) => {
    if (err) {
      throw err;
    } else {
      res.json(data);
    }
  });
});

router.get("/search/:user", async (req, res) => {
  try {
    const user = req.params.user;
    const result = await User.find({ login: user });
    res.send(result);
  } catch (err) {
    throw err;
  }
});

router.get("/user/:username", async (req, res) => {
  const indi = req.params.username;
  const result = await Indi.findOne({ login: indi });
  res.send(result);
});

router.get("/repos/:username", async (req, res) => {
  const { username } = req.params;
  const result = await Repos.find({ "owner.login": username });
  res.send(result);
});

module.exports = router;
