// enviroment variabel
require('dotenv').config();
// memanggil enviroment
const PORT = process.env.PORT || 5000;

const express =require("express");

// memanggil userRoutes
const UserRoutes = require('./routes/Users');
// memanggil middleware dari file logs.js
const MiddlewareLogRequest = require("./middleware/logs");


// memanggil express
const app = express();

// membuat routing 
// app method(path, handler)

// merouting dari struktur project dari middleware
app.use( MiddlewareLogRequest );

// menginzinkan request body berupa JSON
app.use(express.json());

// memanggil UserRoutes
app.use("/users", UserRoutes)




// membuat port 
app.listen(PORT,()=>{
    console.log(`Server berhasil di running di ${PORT}`)
})

