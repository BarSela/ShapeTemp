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

// // Signup Route
// app.post('/signup', (req, res) => {
//   const { firstName, lastName, email } = req.body;

//   // Make sure fields are filled
//   if (!firstName || !lastName || !email) {
//     res.redirect('/fail');
//     return;
//   }

//   // Construct req data
//   const data = {
//     members: [
//       {
//         email_address: email,
//         status: 'subscribed',
//         merge_fields: {
//           FNAME: firstName,
//           LNAME: lastName
//         }
//       }
//     ]
//   };

//   const postData = JSON.stringify(data);

//   fetch('https://usX.api.mailchimp.com/3.0/lists/<YOUR_AUDIENCE_ID>', {
//     method: 'POST',
//     headers: {
//       Authorization: 'auth <YOUR_API_KEY>'
//     },
//     body: postData
//   })
//     .then(res.statusCode === 200 ?
//       res.redirect('pages/success') :
//       res.redirect('pages/fail'))
//     .catch(err => console.log(err))
// })





