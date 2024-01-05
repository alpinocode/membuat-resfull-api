// mengimport dari data dari config Database dbPool
const dbPool = require('../config/Database')

// membuat variabel untuk mengquery dari database
const getAllUsers = () =>{
    // mengambil tabel dari database
    const sqlQuery= 'SELECT * FROM users' 


    return dbPool.execute(sqlQuery)
}

module.exports = {
    getAllUsers
}