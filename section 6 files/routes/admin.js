const express = require("express");
const path = require("path");
const router = express.Router();

const product = [];

//admin/add-product=>with get
//dir name mean the dirctory of files which here means routes , we bput ../ to get out one level
router.get("/add-product", (req, res, next) => {
  // res.sendFile(path.join(__dirname,'..','views','add-product.html'))
  res.render("add-product", {
    pageTitle: "add-product",
    path: "/admin/add-product",
    // the path will be used for making the add-product active that used in add-product.ejs
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,  
    // the above three used for handle bars.
  });
});

//admin/add-product=>with post
router.post("/add-product", (req, res, next) => {
  res.redirect("/");

  console.log(req.body);

  product.push({ title: req.body.title });
});
exports.router = router;
exports.product = product;
