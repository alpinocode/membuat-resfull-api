const express = require("express")
const UserController = require('../controllers/Users')

const router = express.Router();

// memanggil struktur project dari controllers
// create -POST
router.post('/', UserController.createNewUser)

// Read -GET
router.get('/', UserController.getAllUsers)

// Update -PATCH
// kita harus mengquery idUser
router.patch('/:idUser', UserController.updateUser)

// Delete -DELETE
// kita harus mengquery idUser
router.delete('/:idUser', UserController.deleteUser)

module.exports = router