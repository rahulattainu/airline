const UserService = require("../services/user")
const router = require("express").Router()

router.post("/register", (req, res) => {
    let data = req.body

    UserService().register(data)
    .then((response) => {
        res.status(response.statusCode).send({
            success: response.success,
            data: response.data,
            message: response.message
        })
        res.end()
    })
    .catch((error) => {
        res.status(error.statusCode).send({
            success: false,
            data: null,
            message: error.message
        })
        res.end()
    })
})

module.exports = router;