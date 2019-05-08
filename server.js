
const dbconfig = require('./dbconfig');
const http = require('http');
const express  = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const mysql = require('mysql');
const fs  = require('fs');
const app = express();
const data = fs.readFileSync('./dbconfig.json');
const conf = JSON.parse(data);
const connection = mysql.createConnection({
    host : conf.host,
    user : conf.user,
    password : conf.password,
    port : conf.port,
    database : conf.database
});
connection.connect();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));


app.get('/api/users', (req, res)=>{
    connection.query(
        "SELECT movietitle,moviecost,genrename FROM movie JOIN genre USING(genrecode);",
        (err,rows,rields) =>{
            res.send(rows);
        }
    )
});

app.get('/api/hosts', (req, res)=>{
    connection.query(
        "SELECT hostname, hosthome, hostphone, gradename FROM hosts JOIN hostgrade USING(gradecode);",
    (err,rows,fields)=>{
        res.send(rows);
    })
})
app.listen(port, () => console.log(`check ${port}`));
