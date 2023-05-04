const express = require("express");
const bodyParser = require("body-parser");
const adminRouter = require("./routes/admin");
const shopeRouter = require("./routes/shop");
const path = require("path");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public"))); // in order to access the main.css

app.use("/admin", adminRouter);
app.use(shopeRouter);
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000);
