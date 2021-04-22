const express=require("express");
const bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){
    res.sendFile(__dirname + "/index3.html");
 });
 app.post("/",function(req,res){
     var n1=Number(req.body.num1);
     var n2=Number(req.body.num2);
     var result=n1 + n2;
     res.send("The result of the calculation is "+result);
 });

 app.get("/bmicalculator",function(req,res){
     res.sendFile(__dirname + "/bmicalculator.html");
 });
 app.post("/bmicalculator",function(req,res){
     var wt=Number(req.body.weight);
     var ht=Number(req.body.height);
     var bmi=wt/(ht*ht);
     res.send("BMI is "+ bmi);
 });
 app.listen(3000,function(){
    console.log("server started at port 3000");
});