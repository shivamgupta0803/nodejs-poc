const router = require("express").Router();

const path = require("path");
const apiMiddleware = require("../middleware/apikey");

router.get("/", (req, res) => {
  res.render("index", {
    title: "My Home Page",
  });
});

router.get("/about", (req, res) => {
  res.render("about", {
    title: "My About Page",
  });
});

router.get("/api/product", apiMiddleware, (req, res) => {
  res.json([
    {
      id: "10",
      name: "chrome",
    },
    {
      id: "12",
      name: "firefox",
    },
  ]);
});

module.exports = router;
