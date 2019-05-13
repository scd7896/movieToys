

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

const multer = require('multer');
const upload = multer({dest : './upload'});
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
        "SELECT hostnumber, hostname, hosthome, hostphone, gradename FROM hosts JOIN hostgrade USING(gradecode);",
    (err,rows,fields)=>{
        res.send(rows);
    })
})

app.post('/api/hostadd', upload.single('image'),(req, res)=>{
  let sql = 'INSERT INTO hosts VALUES(null,?,?,?,1)';
  console.log(req.body.hostnumber + "상태확인");
  const hostname = req.body.hostname;
  const hostphone = req.body.hostphone;
  const hosthome = req.body.hosthome;
  let params = [hostname,hosthome,hostphone];
  connection.query(sql,params,
    (err,rows,fileds) =>{
      res.send(rows);  
    }
  );
})

app.post('/api/vedioadd', upload.single(),(req,res)=>{
    const movietitle = req.body.movietitle;
    const copytype = req.body.copytype;
    let sql = `INSERT INTO tape VALUES(null,( SELECT moviecode  FROM movie WHERE movietitle = '${movietitle}'),(SELECT typecode FROM copytype WHERE typename = '${copytype}'));`;
    let params = [movietitle, copytype];
    connection.query(sql,params,
        (err,rows,fileds)=>{
            res.send(rows);
        })
})
app.listen(port, () => console.log(`check ${port}`));
