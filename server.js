var express=require('express');
var app=express();

app.set('view engine','jade');
var port = process.env.PORT || 3000;

var publicDir = require('path').join(__dirname,'/public');
app.use(express.static(publicDir));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/",(req,res)=>{
    res.render('index');
})

app.get("/home",(req,res)=>{
    res.render('home');
})

app.post("/home",(req,res)=>{
    const yourName= req.body.yourName;
    res.render('home',{name:yourName})
})

app.get('/login',(req,res)=>{
    res.render('login');
})

app.get("/category",(req,res)=>{
    res.render('category');
})

var server=app.listen(port,function() {});

