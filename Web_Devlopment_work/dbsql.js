var mysql        = require('mysql');
var connection   = mysql.createConnection({
  supportBigNumbers: true,
  bigNumberStrings: true,
  host     : "localhost",
  user     : "root",
  password : "",
  database : "sih"
});
connection.connect(function(error){
  if(error){
      console.log('error');
  }else{
      console.log('connected');
  }
});


module.exports = connection;
