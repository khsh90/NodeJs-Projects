const express = require("express");
const path=require('path')
const router = express.Router();



//admin/add-product=>with get
//dir name mean the dirctory of files which here means routes , we bput ../ to get out one level
router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(__dirname,'..','views','add-product.html'))
});


//admin/add-product=>with post
router.post("/add-product", (req, res, next) => {
  res.redirect("/");
  console.log(req.body);
});
module.exports = router;
