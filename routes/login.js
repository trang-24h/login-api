var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/login", function (req, res, next) {
  const user = req.body;
  const user2 = users.find((us) => us.username === user.username);

  if (
    user.password === "" ||
    user.username === "" ||
    !user.password ||
    !user.username
  ) {
    res.status(400).send({
      status: 400,
      message: "Bad request.",
    });
  } else {
    if (
      user2 &&
      user.password === user2.password &&
      user.username === user2.username
    ) {
      res.status(200).send({
        status: 200,
        message: "Login success.",
      });
    } else {
      res.status(404).send({
        status: 404,
        error: "Invalid user.",
      });
    }
  }
});

const users = [
  {
    username: "thuhang",
    password: "thuhang123",
  },
  {
    username: "kimtinh",
    password: "kimtinh123",
  },
  {
    username: "quangvan",
    password: "quangvan123",
  },
];
module.exports = router;
