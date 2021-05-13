const express = require("express");

const app = express();
const port = 3000;


//Q1
const logUsers=(req, res, next)=>{
    console.log(users)
    next();
}

//Q2
app.use(logUsers)

//Q3

const logMethod=(req, res, next)=>{
console.log(req.method)
next();
}
//Q4
app.use(express.json());

//Q5


const users = ["John", "Mark"];

app.get("/users",logMethod, (req, res, next) => {
  res.json(users);
});




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});