const userModels = require('../models/users')

// mengampil data dari user crud menggunakan method get
const getAllUsers = async (req, res) => {
    // ekspetasi yang benar
    try {
        // pemanggilan databases harus menggunakan asynchronous 
        // kita haru desctructiring
        const [data] = await userModels.getAllUsers()

        res.json({
            message: 'Get all users success',
            data: data
    })
    // ini yang error
    } catch (error) {
        res.status(500).json({
            message: 'Server is error',
            serverMessage: error
        })
    }
    
}

// memposting sebuah user crud menggunakan method post
const createNewUser = (req, res) => {
    console.log(req.body)
    res.json({
        message: 'Create new user success',
        data: req.body
    })
}

// update sebuah user crud menggunakan method Path 
const updateUser = (req, res) => {
    // mendapatkan id menggunakan params
    const {idUser} = req.params
    console.log('idUser :', idUser)
    res.json({
        message: 'Update data user',
        data: req.body
    })
}

// mendelete sebuah user crud menggunakan method delete
const deleteUser = (req, res) => {
    // mendapatkan id menggunakan params
    const {idUser} = req.params
    console.log('idUser delete :', idUser)
    res.json({
        message: 'Delete user success',
        // mengirimkan data keuser
        data: {
            id: idUser,
            nama: 'alfino Hasan',
            email: 'alfinohasan@gmail.com',
            address: 'Batam' 
        }
    })
}

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser
}