const express = require("express");
const path = require("path");
const router = express.Router();

const product = [];

router.get("/add-product", (req, res, next) => {
  res.render("add-product", {
    pageTitle: "add-product",
    path: "/admin/add-product",
    // the path will be used for making the add-product active that used in add-product.ejs
  });
});

//admin/add-product=>with post
router.post("/add-product", (req, res, next) => {
  res.redirect("/");

 // console.log(req.body);

  product.push({ title: req.body.title });
});
exports.router = router;
exports.product = product;
