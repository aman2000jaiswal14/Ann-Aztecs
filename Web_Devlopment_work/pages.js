const express= require("express");
var router =express.Router();
const mysql =require('mysql');
var authconroller =require('../controller/auth')
//const connection =require('../dib/dbsql');
const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'sih'
});
connection.connect(function(error){
  if(error){
      console.log('error');
  }else{
      console.log('connected');
  }
});

//former registration form
router.get("/farmerregistration",function(req,res){
    res.render("farmerregform");
});
router.post("/farmerregistration",function(req,res){
  let data ={ ID:req.body.myaadhar,Name:req.body.myname,BANKACCOUNT:req.body.mybank,LANDRECORD:req.body.myland,CROP1:req.body.crop1,CROP2:req.body.crop2,CROP3:req.body.crop3,CROP4:req.body.crop4};
  var sql ="INSERT INTO farmertable  SET ?";
   connection.query(sql,data,function(error,results,fields){
   console.log(results);
   res.send('registered');
 });
});
//former registration/*
/*
router.post('/farmerregistration',(req,res)=>{
    var x = math.random();
    let data = {Name:req.body.name,Aadhar:req.body.Aadhar,LandRecord_no:req.body.Aadhar,Bank_account_no:req.body.Aadhar,
        Area_of_land:req.body.Aadhar, Latitude:req.body.Aadhar,Longitude:req.body.Aadhar,SoilType:req.body.Aadhar,	Mobile_no:req.body.Aadhar,
        Address:req.body.Aadhar	};
  let sql ="INSERT INTO farmers  SET ?";
  connection.query(sql, data,function (error, results, fields) {
    if (error) throw error;
    //req.flash('message', 'Success!!');
    res.redirect("/",{message:"farmer registered"});
	});
});/
//former login
router.get("/farmerlogin",function(req,res){
    res.render("login");
  });*/
router.post("/farmerlogin",authconroller.farmerlogin);

router.get('/admin',(req,res)=>{
    res.render("adminlogin");
});
//for shop registration
router.get('/shops',(req,res)=>{
  connection.query('select * from shops', function (error, results, fields) {
	  if (error) throw error;
    res.render("shops",{shops:results});
});
});
router.get("/shops/new",(req,res)=>{
    res.render("shopreg");
});

router.get('/shops/:id', function (req, res) {
    console.log(req);
    var ShopId= req.params.id;
    var sql=`SELECT * FROM shops WHERE id =`+ShopId;
    connection.query(sql ,function (error, results, fields){
     if (error) throw error;
     var x ={
      shops:results[0]
     }
     res.render('shop',x);
   });
  });
  
  //rest api to create a new record into mysql database
  router.post('/shops', function (req, res) {
    // var name  = req.body.employee_name;
    // var sallery  = req.body.employee_salary;
    // var age = req.body.employee_age;
    // var sql ='INSERT INTO `employees` (`id`, `employee_name`, `employee_salary`, `employee_age`) VALUES (NULL, name, sallery, age);
    let data = {ShopName:req.body.ShopName,Address:req.body.Address,Contact_No:req.body.Contact};
    let sql ="INSERT INTO shops  SET ?";
    connection.query(sql, data,function (error, results, fields) {
      if (error) throw error;
      //req.flash('message', 'Success!!');
      res.redirect("/");
      });
  });
//seed booking
router.get('/seedbooking',(req,res)=>{
  res.render("seedbooking");
});
router.post("/seedbooking",(req,res)=>{
  let data = {FarmerId:req.body.id,	FarmerName:req.body.name,Address:req.body.add,CropName:req.body.Crop,Aadhar:req.body.aadhar};
  let sql ="INSERT INTO seedbooking  SET ?";
    connection.query(sql, data,function (error, results, fields) {
      if (error) throw error;
      //req.flash('message', 'Success!!');
      res.redirect("/");
      });
});

router.get("/help",(req,res)=>{
  res.render('help');
})
module.exports =router;