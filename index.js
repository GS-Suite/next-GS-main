const express=  require('express');
const path= require('path');

const app= express();
const staticPath = path.join(__dirname,'/public');


app.use(express.static(staticPath));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// app.get("/", function(req,res){
//   res.sendFile(__dirname+"/public/index.html") ;
// });

app.get("/", function(req,res){
    res.sendFile(__dirname+"/public/sign-in/signin.html")
});

app.get("/sign-up", function(req,res){
    res.sendFile(__dirname+"/public/sign-up/signup.html")
});

app.get("/ask", function(req,res){
    res.sendFile(__dirname+"/public/ask.html")
});

app.get("/student-dashboard", function(req,res){
    res.sendFile(__dirname+"/public/student-dashboard/dashboard.html")
});

app.get("/student-dashboard/user", function(req,res){
    res.sendFile(__dirname+"/public/student-dashboard/user.html")
});

app.get("/student-dashboard/attendance", function(req,res){
    res.sendFile(__dirname+"/public/student-dashboard/attendance.html")
});

// app.get("/about", function(req,res){
//     res.sendFile(__dirname+"/public/about.html")
// });

// app.get("/contact", function(req,res){
//     res.sendFile(__dirname+"/public/contact.html")
// });




app.post('/', function(req,res){
    res.sendFile(__dirname+"/public/ask.html")
       
});

app.post('/sign-up', function(req,res){   
    res.sendFile(__dirname+"/public/ask.html")
});

app.post('/ask', function(req,res){
    console.log(req.body);    
});

app.listen(3000, function(){
    console.log('Server started at port 3000');
});