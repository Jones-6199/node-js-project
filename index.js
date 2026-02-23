const express = require("express");
const app = express();
const port = 4000;
const mongoose = require("mongoose");
app.use(express.urlencoded({ extended: true }));
app.set("view engine" , "ejs")
app.use(express.static("public"))
var moment = require('moment'); // require





 

const Customer = require("./models/addCustomer")























mongoose
  .connect(
    "mongodb+srv://jones6199:6jQQMRfu0ZZWkjDe@cluster0.nev1f0f.mongodb.net/all-data?appName=Cluster0",
  )
  .then(() => {  
    console.log("Connected to database succesfully");
    app.listen(port, () => {
      console.log(`I'm listening on port ${port}`);
      console.log("You can Find me here http://localhost:4000/")
    });
  })
  .catch(() => {
    console.log("Error connecting to database");
  });

app.post("/", (req, res) => {
  const newUser = new User(req.body);

  console.log(req.body);
  res.sendFile("/views/succes.html", { root: __dirname });

  newUser
    .save()
    .then(() => {
      console.log("User saved to database");
    })
    .catch(() => {
      console.log("Error saving user to database");
    });
});




/* home */
app.get("/", (req, res) => {
 

  Customer.find().then((result) => {
    res.render("index" , {data: result, moment: moment })
  }).catch((err) => {
    console.log(`operation failed due ${err}`)
  })
});   
/* home */


/*  view user */
app.get("/user/view.html", (req, res) => {
  

  Customer.find().then((result) => {
    res.render("view", {data: result, moment: moment} )
  }).catch((err) => {
    console.log(`operation failed due ${err}`)
  })
});   
/*  view user */


/* edit user  */
app.get("/user/edit.html", (req, res) => {
  res.render("edit" )
});   

/*  edit user */


/* add customer */
app.get("/user/add.html", (req, res) => {
  res.render("add" )


  
});   
app.post("/user/add.html", (req,res) => {
  const newCustomer = new Customer (req.body)
  console.log(req.body)
  newCustomer.save().then(() => {
    console.log("customer added to db succesfully")
  }).catch(() => {
    console.log("failed saving customer")
  })
  res.redirect("/user/add.html")
})
/* add customer */





app.get("/user/:id",(req,res) => {
 
  Customer.findById(req.params.id).then((result) => {
     res.render("view", {data: result, moment: moment })
    console.log(result)
  }).catch((err) => {
    console.log(err)
  })
} )

























