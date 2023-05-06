const express = require("express");
const path = require("path");
const router = express.Router();
const adminData = require("./admin");
const product = adminData.product;

router.get("/", (req, res, next) => {
  // res.sendFile(path.join(__dirname,'../','views','shop.html')); //this will point shop.html
  console.log("Shopjs", product);

  res.render("shop", {
    prods: product,
    pageTitle: "shop",
    path: "/",
        // the path will be used for making the shop active that used in shop

    hasProducts: product.length > 0,
    activeShop: true,
    productCSS: true,
    // the above three used for handle bars
  }); //this will point to shop.pug   so that we use render
});

module.exports = router;
