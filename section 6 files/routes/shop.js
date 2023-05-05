const express = require("express");
const path=require('path');
const router = express.Router();
const adminData=require('./admin')
const product=adminData.product



router.get("/", (req, res, next) => {
 // res.sendFile(path.join(__dirname,'../','views','shop.html')); //this will point shop.html 
 console.log('Shopjs',product)

 res.render('shop',{prods:product ,pageTitle:'shop' ,path: '/'}) //this will point to shop.pug   so that we use render

});


 module.exports=router;
  