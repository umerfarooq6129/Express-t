const express = require("express");

const app = express();
const path = require("path");
const hbs = require("hbs");

// buildin middleware
const staticPath = path.join(__dirname, "./public")
const templetePath = path.join(__dirname, "./templates/views");
const partialsPath = path.join(__dirname, "./templates/partials");

// to set template engine
app.set("view engine","hbs");
app.set("views",templetePath);
hbs.registerPartials(partialsPath)

app.use(express.static(staticPath));

app.get("/",(req,res)=>{
    res.render("index");
})

app.get("/contact",(req,res)=>{
    res.render("contact");
})

// app.get("/",(req,res)=>{
//     res.send("home page");
// })

app.listen(3000,()=>{
    console.log("listening to port 3000");
})