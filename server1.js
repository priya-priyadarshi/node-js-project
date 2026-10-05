app.get("/teacher/profile",(req, res) =>{
    return res.send("its response from teacher profile")
})

app.get("/books/profile", (req, res) =>{
return res.send("its response from books profile")
})

app.get("/class/profile", (req, res) =>{
    return res.send("its response from class profile")
})

app.get("/mobiles/profile",(req, res)=> {
    return res.send("its reponse from mobiles profile")
})