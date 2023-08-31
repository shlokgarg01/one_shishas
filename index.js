const express = require('express')
const router = require('./routes')
const app = express()
const PORT = 8080

app.use(express.json())
app.listen(PORT, () => console.log('Connected to server'))

app.use("/", router)