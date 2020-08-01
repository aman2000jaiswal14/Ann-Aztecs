var express = require('express');
var app = express();
const path =require('path');
var conn =require('./dib/dbsql');
var bodyParser = require('body-parser');
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
app.use(express.static(__dirname + "/public"));
app.set('views',path.join(__dirname,'/views/'));
app.set("view engine","ejs");

//database connection
conn.connect(function(error){
  if(error){
      console.log('error');
  }else{
      console.log('connected');
  }
});

//render home page
app.get('/',(req,res)=>{
    res.render("home",{message:''});
});













app.use('/',require('./router/pages'));
app.use('/auth',require('./router/auth'));

//create app server
var server = app.listen(4010,  "127.0.0.1", function () {
 
    var host = server.address().address
    var port = server.address().port
   
    console.log("Example app listening at http://%s:%s", host, port)
   
  });