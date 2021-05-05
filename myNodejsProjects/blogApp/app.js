const express = require('express')
const app = express()
const path = require('path')
const expressLayout = require('express-ejs-layouts')
const ejs = require('ejs')
const blogRouter = require('./src/routers/blogRouter')

app.use(express.static('public'))
app.use(expressLayout)
app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname,'./src/views'))

//Allows node.js to understand the data sent from the form (search)
app.use(express.urlencoded({extended:true}))

app.use('/', blogRouter)
app.use('/blog', blogRouter)




app.listen(3003, () => {
    console.log("Server is living!");
})