const express = require("express");

const app = express();
const port = 3000;

//   Q4
//app.use(express.json())

const users = ["John", "Mark"];
//Q1
const logUsers = (req, res, next) => {
  console.log(users);
  next();
};

//Q2
app.use(logUsers);

//Q3

const logMethod = (req, res, next) => {
    console.log(req.method);
    next();
};
  
  //Q5
//   app.use((req, res, next)=>{
//       if (users.length === 0) {
//           const err = new Error("No users");
//           err.status = 404;
//           next(err)
//         }
//   })
  
  
  
app.get("/users", logMethod, (req, res, next) => {
    if (users.length === 0) {
        const err = new Error("No users");
        err.status = 500;
        next(err)
    }
    res.json(users);
});
  
 


app.use((err, req, res, next) => {
// set the status code
    res.status(err.status);
// send the response in JSON format
    res.json({
        error: {
        status: err.status,
        message: err.message,
        },
    });
});

//----------------------------------------------------------------------------//
//Practice 
//Q1
const express1=express.Router();
express1.use((req, res,next)=>{
    console.log("all users")
    res.json(users)
    next();
}
)

app.use("/users",express1)



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});



