

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
        `SELECT hostname, hostphone, movietitle, DATE_FORMAT(borrowday, '%Y-%m-%d') borrowday, borrownumber
        FROM borrowlist bol 
                JOIN ( SELECT hostphone, hostname, hostnumber
                     FROM hosts) ho ON bol.hostnumber = ho.hostnumber
                JOIN (SELECT moviecode, tapecode
                        FROM tape) tp ON bol.tapecode = tp.tapecode
                JOIN (SELECT movietitle, moviecode
                        FROM movie) mv  ON tp.moviecode = mv.moviecode;
        `,
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

app.post('/api/hostadd', function(req, res){
  let sql = 'INSERT INTO hosts(hostname,hosthome,hostphone,gradecode) VALUES(?,?,?,1)';
  
  const hostname = req.body.hostname;
  const hostphone = req.body.hostphone;
  const hosthome = req.body.hosthome;
  console.log(hostname);
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

app.delete('/api/returnvedio/:id', (req,res)=>{
    let sql = `UPDATE borrowlist 
    SET returnday = DATE_FORMAT(NOW(),'%Y-%m-%d') 
    WHERE borrownumber = 1; `;
    let params = [req.param.id]
    connection.query(sql,params,
        (err,rows,fileds)=>{
            res.send(rows);
        })
})
app.listen(port, () => console.log(`check ${port}`));
