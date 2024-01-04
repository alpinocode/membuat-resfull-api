const express =require("express");
// memanggil userRoutes
const UserRoutes = require('./routes/Users')
// memanggil middleware dari file logs.js
const MiddlewareLogRequest = require("./middleware/logs")

// memanggil express
const app = express();

// membuat routing 
// app method(path, handler)

// membuat middleware
app.use("/", MiddlewareLogRequest.logRequest)


// memanggil UserRoutes
app.use("/users", UserRoutes)

// mendapatkan data
app.get("/", (req,res) => {
    res.json({
        nama: 'alfino hasan',
        email: 'pojano@gmail.com'
    })
})

// mengcreate data baru
app.post("/", (req,res) => {
    res.send('hello alpin')
})




// membuat port 
app.listen(4000,()=>{
    console.log('Server berhasil di running')
})

