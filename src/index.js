const express =require("express");



// memanggil userRoutes
const UserRoutes = require('./routes/Users')
// memanggil middleware dari file logs.js
const MiddlewareLogRequest = require("./middleware/logs")


// memanggil express
const app = express();

// membuat routing 
// app method(path, handler)

// merouting dari struktur project dari middleware
app.use( MiddlewareLogRequest )

// menginzinkan request body berupa JSON
app.use(express.json())

// memanggil UserRoutes
app.use("/users", UserRoutes)




// membuat port 
app.listen(4000,()=>{
    console.log('Server berhasil di running')
})

