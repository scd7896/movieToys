
const dbconfig = require('./dbconfig');
const http = require('http');
const express  = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const oracledb = require('../node_modules/oracledb');
oracledb.autoCommit = true;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

oracledb.getConnection({
    user : dbconfig.user,
    password : dbconfig.password,
    connectString : dbconfig.connectString
}, function(err, connection){
    if(err){
        console.error(err.message);
        return;
    }
    console.log("연결됨");

})

app.get('/api/users', (req, res)=>{
    
    
});
app.listen(port, () => console.log(`check ${port}`));
