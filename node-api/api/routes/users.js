const express = require('express');
const router = express.Router();

router.get('/', (req, res, next)=>{
    res.status(200).json({
        message: 'handiling get'
    })
})

router.post('/', (req, res, next)=>{
    res.status(200).json({
        message: 'handiling post'
    })
})

module.exports = router;