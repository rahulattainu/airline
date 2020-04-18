const cookieSession = require("cookie-session");
const express = require("express")
const app = express()
const port = 4000
const bodyParser = require('body-parser')

const userRoutes = require("./src/routes/user");

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// set up routes
app.use("/v1/users", userRoutes)

// connect react to nodejs express server
app.listen(port, () => console.log(`Server is running on port ${port}!`));