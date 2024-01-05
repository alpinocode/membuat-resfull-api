// connection to mysql
const mysql = require('mysql2')

// mengkoneksikan mysql dengan pool
const dbPool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'membuatrestapi'
})

// karena dbPool bersifat asychronous maka menggunakan method promise()
module.exports= dbPool.promise()