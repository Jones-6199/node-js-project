const express = require("express")
const app = express()
const port = 4000


app.get("/home" , (req,res) => {
    res.sendFile(__dirname + "/views/home.html")
})

app.listen(port, () => {
    console.log(`I'm listening on port ${port}`)
})
