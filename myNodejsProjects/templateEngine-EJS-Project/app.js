const express = require('express')
const app = express()
const path = require('path')

const ejs = require('ejs')

app.set('view engine', 'ejs')

app.get('/', (req,res) =>{
    //res.sendFile(path.resolve(__dirname,'index.html'))


    const usersArray = [
        {name:'halil', id:1},
        {name:'halil1', id:2},
        {name:'halil2', id:3},
        {name:'halil3', id:4},
    ]
    const age = 23

    res.render('index',{
        users: usersArray,
        age
    })
})



app.listen(3003, () => {
    console.log("Server is Living!");
})