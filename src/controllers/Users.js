const userModels = require('../models/users')

// mengampil data dari user crud menggunakan method get
const getAllUsers = async (req, res) => {
    // ekspetasi yang benar
    try {
        // pemanggilan databases harus menggunakan asynchronous 
        // kita harus desctructiring
        const [data] = await userModels.getAllUsers()

        res.status(200).json({
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
const createNewUser = async (req, res) => {
    // kita akan mendapatkan body dari models createUsers
    const { body } = req

    if(!body.email || !body.nama || !body.address){
        res.status(400).json({
            message: 'Anda kirim data yang salah',
            data: null
        })
    }

    try {
        await userModels.createNewUser(body)
        res.status(201).json({
            message: 'Create new user success',
            data: body
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server is error',
            serverMessage: error
        })
    }
}

// update sebuah user crud menggunakan method Path 
const updateUser = async (req, res) => {
    // mendapatkan id menggunakan params
    const {idUser} = req.params
    // kita akan mendapatkan body dari models UpdateUsers
    const {body} = req
    try {
        await userModels.updateUser(body, idUser)
        res.status(201).json({
            message: 'Update data user',
            data: {
                id: idUser,
                ...body
            }
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server is error',
            serverMessage: error
        })
    }
}

// mendelete sebuah user crud menggunakan method delete
const deleteUser = async(req, res) => {
    // mendapatkan id menggunakan params
    const {idUser} = req.params
    try {
        await userModels.deleteUser(idUser)
        res.status(200).json({
            message: 'Delete user success',
            // mengirimkan data keuser
            data: null
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server is error',
            serverMessage: error
        })
    }
}

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser
}