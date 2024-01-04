const express =require("express");
// connection to mysql
const mysql = require('mysql2')


// memanggil userRoutes
const UserRoutes = require('./routes/Users')
// memanggil middleware dari file logs.js
const MiddlewareLogRequest = require("./middleware/logs")

// mengkoneksikan mysql dengan pool
const dbPool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'membuatrestapi'
})

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

app.use('/', ( req, res ) => {
    dbPool.execute('SELECT * FROM users', (err, rows) => {
        if(err){
            res.json({
                message: 'Connection to failed'
            })
        }

        res.json({
            message: 'Connection success',
            data: rows
        })
    })
})


// membuat port 
app.listen(4000,()=>{
    console.log('Server berhasil di running')
})

