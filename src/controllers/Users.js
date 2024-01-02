const getAllUsers = (req, res) => {
    res.json({
        message: 'Get all users success'
    })
}

const createNewUser = (req, res) => {
    res.json({
        message: 'Create new user success'
    })
}

module.exports = {
    getAllUsers,
    createNewUser
}