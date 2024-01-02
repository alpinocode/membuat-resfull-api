const express = require("express")

const router = express.Router();

router.get('/users', (req, res) => {
    res.json({
        message: 'Get users success'
    })
})

router.post('/users', ( req, res) =>{
    res.json({
        message: 'Post users success'
    })
})

module.exports = router