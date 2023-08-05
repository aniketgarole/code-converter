const express = require("express")
const cors = require("cors")
const { convertRouter } = require("./routes/convert.route")
const { debugRouter } = require("./routes/debug.route")
const { qualityRouter } = require("./routes/quality.route")
require("dotenv").config()

const app = express()

app.use(express.json())
app.use(cors())


app.use("/", convertRouter)
app.use("/", debugRouter)
app.use("/", qualityRouter)

app.listen(process.env.PORT, ()=> {
    console.log(`server is running on port ${process.env.PORT}`)
})