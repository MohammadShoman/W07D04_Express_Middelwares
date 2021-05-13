const express = require("express");

const app = express();
const port = 3000;

app.use(express.json());
//Q1
const logUsers=(req, res, next)=>{
    console.log(users)
    next();
}





const users = ["John", "Mark"];

app.get("/users",logMethod, (req, res, next) => {
  res.json(users);
});




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});