// server.js

import express from 'express';
 // Import express
const app = express();              // Initialize the app
const PORT = 8003;                  // Define your port

//method GET
//URL /employee/profile
//return response text:  "its reponse from employee profile api"
app.get("/employee/profile", (req, res) => {
    return res.send("its response from profile API")
})

app.get("/student/profile",(req, res) => {
    return res.send("its response from student profile ")
})

app.get("/teacher/profile", (req, res) => {
    return res.send("its reponse from teacher profile")

})

app.listen(PORT, () => {
    console.log("server started 8003")
});
