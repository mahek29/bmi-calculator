const express=require("express");
const app=express();
app.get("/",function(request,response){
   response.send("hello!");
});
app.get("/about",function(req,res){
    res.send("mahek 2nd year ece engineering student")
});
app.listen(3000,function(){
    console.log("server started at port 3000");
});