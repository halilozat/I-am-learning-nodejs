const express = require('express')
const app = express()

function firstMiddleware(req,res,next) {
    console.log("I'm in m1")
    next()
}
app.use(firstMiddleware)
app.use((req,res,next) => {
    console.log("I'm in m2")
    //res.send("m2 is complete")

    req.time = Date.now()

    next()
})
console.log("here")

app.get('/', (req,res) => {
    console.log("m3 = req time!"+req.time)
    res.send(""+req.time)
})

app.post('/user', (req,res) => {
    console.log("m4")
})



app.listen(3000)