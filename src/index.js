const express = require("express");
const port = process.env.PORT || 3000;
const app = express();
const fetch = require('node-fetch');

//load and cache JavaScript modules. 
const ejs = require('ejs');
const { response } = require("express");

// Set EJS as templating engine
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(express.urlencoded({
  extended: true
}));

app.get('/', (req, res)=>{
 
  // The render method takes the name of the HTML
  // page to be rendered as input
  // This page should be in the views folder
  // in the root directory.
  res.render('pages/homePage');
   
  });


app.get('/login', (req, res)=>{

  res.render('pages/login');

     
});

app.get('/signUp', (req, res)=>{

  res.render('pages/signUp');
     
});



app.listen(port, () => {
  console.log("server is up and running");
});

app.post('/signUp', function (req, res) {  
  // Prepare output in JSON format  
  res.redirect('/');
})  

app.post('/registration', function (req, res) {  
  // Prepare output in JSON format  
  var userDetails = {  
      fullName:req.body.fullName,  
      email:req.body.email  
  };  
  console.log(userDetails);
  res.redirect('/');
  
})  




