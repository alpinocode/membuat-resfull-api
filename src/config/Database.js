// connection to mysql
const mysql = require('mysql2')

// mengkoneksikan mysql dengan pool
const dbPool = mysql.createPool({
    // pemanggilan menggunakan envirotment
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

// karena dbPool bersifat asychronous maka menggunakan method promise()
module.exports= dbPool.promise()