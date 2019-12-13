const express = require('express')

var app = express()

var router = express.Router()
router.get('/ok', function (req, res) {
    res.json({
        code: 200,
        msg: "isOK"
    })
})

router.get('/ok/son', function (req, res) {
    res.json({
        code: 200,
        msg: "isOKSon"
    })
})

router.get('/ok2', function (req, res) {
    res.json({
        code: 200,
        msg: "isOK2"
    })
})

router.get('/no', function (req, res) {
    res.json({
        code: 200,
        msg: "isNO"
    })
})

router.get('/no/son', function (req, res) {
    res.json({
        code: 200,
        msg: "isNOSON"
    })
})

router.get('/no/son2', function (req, res) {
    res.json({
        code: 200,
        msg: "isNOSON2"
    })
})

app.use(router)
app.listen(3500, function () {
    console.log('listen in 3500')
})