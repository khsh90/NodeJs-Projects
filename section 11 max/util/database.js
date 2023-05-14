// const mysql=require('mysql2')

// // we will use multiple connection instead of one connection so that will use pool;

// const pool=mysql.createPool({
//     host:'localhost',
//     user:'root',
//     database:'node-complete',
//     password:'K$H$S$H$westwood900'
// })

// module.exports=pool.promise(); //we use promise as we will use async

// const Sequelize = require("sequelize");
const Sequelize=require('sequelize').Sequelize;
//sequelize used to write a java script code instead writing sql code and then transfer it to sql code internally
const sequelize = new Sequelize(
  "node-complete",
  "root",
  "K$H$S$H$westwood900",
  {
    dialect: "mysql",
    host: "localhost",
  }
);


module.exports = sequelize;
