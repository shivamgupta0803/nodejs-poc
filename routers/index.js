const router = require("express").Router();

const path = require("path");
const product = require("../Productdata/product");
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

router.get("/api/product", (req, res) => {
  res.json({product});
});

module.exports = router;
