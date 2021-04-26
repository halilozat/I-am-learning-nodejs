const express = require('express')
const app = express()

app.use(express.json());

const users = [
    {id:1,name:'halil',age:23},
    {id:2,name:'halilx',age:21},
    {id:3,name:'halily',age:24},
    {id:4,name:'halilz',age:25},
    {id:5,name:'halilr',age:20}
]

app.get('/',(req,res) => {

    res.send("Hello from Index")

})
app.get('/users',(req,res) => {

    if(req.query.reverse){
        res.send(users.reverse)
    }else {
        res.send(users)
    }

})
app.get('/users/:id',(req,res) => {

    const fundUser = users.find(user => user.id === parseInt(req.params.id))
    if(fundUser) {
        res.send(fundUser)
    }else {
        res.status(404).send('user is not found')
    }

})

app.post('/users',(req,res) => {

    const newUser = {

        id: users.length +1,
        name: req.body.name,
        age: req.body.age

    }

    users.push(newUser)
    res.send(newUser)

} )




app.listen(3000)