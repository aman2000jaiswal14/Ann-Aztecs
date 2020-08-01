const mysql =require('mysql');
const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'sih'
});
exports.farmerlogin =async(req,res)=>{
    var x =req.body.myaadhar;
    var sql=`SELECT * FROM farmertable WHERE ID =`+x;
  conn.query(sql ,function (error, results, fields){
   if (error) throw error;
   var x ={
    farmer:results[0]
   }
   res.render('farmer',x);
   console.log(x.farmer);
 });
}