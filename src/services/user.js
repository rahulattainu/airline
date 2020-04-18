const UserModel = require('../models/user')

module.exports = function () {
    return {
        register: function (data) {
            
        let error = "Something went wrong"
        error.data = null
        error.statusCode = 500

        return new Promise((resolve, reject) => {
            var newUser = new UserModel()
            newUser.name = data.name

            newUser.save().then(usersData => {
                console.log(usersData)
                let response = {
                    success: true, 
                    statusCode: 200,
                    message: "Successfully registrered."
                }
                resolve(response)
            })
            .catch((err) => {
                console.log(err)
                reject(error)
            })
        })
        }
    }
}
