const express =require("express");

// memanggil userRoutes
const UserRoutes = require('./routes/Users')

// memanggil express
const app = express();

// membuat routing 
// app method(path, handler)
// app.use("/", (req, res, next)=> {
//     res.send('hello user')
// })

// memanggil UserRoutes
app.use("/users", UserRoutes)

// mendapatkan data
app.get("/", (req,res) => {
    res.send('hello pojan')
})

// mengcreate data baru
app.post("/", (req,res) => {
    res.send('hello alpin')
})




// membuat port 
app.listen(4000,()=>{
    console.log('Server berhasil di running')
})

