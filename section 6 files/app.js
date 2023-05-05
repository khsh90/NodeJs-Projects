const express = require("express");
const bodyParser = require("body-parser");
const adminData = require("./routes/admin");
const shopeRouter = require("./routes/shop");
const path = require("path");
const app = express();



app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public"))); // in order to access the main.css


app.use("/admin", adminData.router);
app.use(shopeRouter);
app.set('view engine','pug')
app.set('views','views')  //the first view is reserved , the second view the point to views folder
app.use((req, res, next) => {
  // res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
    res.status(404).render('404',{pageTitle:'page not found'});

 
});

app.listen(3000);
