// mengampil data dari user crud menggunakan method get
const getAllUsers = (req, res) => {
    const data = {
        idUser: '1',
        nama: "Alfino Hasan",
        email: "AlfinoHasan@gmail.com",
        address: "Batam"
    }
    
    res.json({
        message: 'Get all users success',
        data: data
    })
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