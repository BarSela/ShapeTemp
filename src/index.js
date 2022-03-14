
const express = require("express");
const port = process.env.PORT || 3000;
const app = express();

//load and cache JavaScript modules. 
const ejs = require('ejs');

// Set EJS as templating engine
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(express.urlencoded({
  extended: true
}));

app.get('/', (req, res)=>{
 

  //res.render('pages/index');
   
  });

  app.listen(port, () => {
    console.log("server is up and running");
  });