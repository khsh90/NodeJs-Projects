const mysql=require('mysql2')

// we will use multiple connection instead of one connection so that will use pool;

const pool=mysql.createPool({
    host:'localhost', 
    user:'root',
    database:'node-complete',
    password:'K$H$S$H$westwood900'
})


module.exports=pool.promise(); //we use promise as we will use async