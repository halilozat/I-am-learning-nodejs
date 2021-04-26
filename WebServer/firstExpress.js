const express = require('express')
const app = express()
const joi = require('@hapi/joi')

app.use(express.json());
app.use(express.urlencoded({extended : true}));

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

    const {error} = confirmUserİnfo(req.body)

    if(error){
        res.status(400).send(error.details[0].message)
    }else{
        const newUser = {
            id: users.length +1,
            name: req.body.name,
            age: req.body.age
        }
    
        users.push(newUser)
        res.send(newUser)
    }
})

app.put('/users/:id',(req,res) => {

    const fundUser = users.find(user => user.id === parseInt(req.params.id))
   
    if(!fundUser){
        return res.status(404).send(`${req.params.id}'s user is not defined`)
    }

    const {error} = confirmUserİnfo(req.body);
    
    if(error){
        res.status(400).send(error.details[0].message)
    }else{
        fundUser.name = req.body.name,
        fundUser.age = req.body.age
    
        res.send(fundUser)
    }
})

app.delete('/users/:id',(req,res) => {
    const fundUser = users.find(user => user.id === parseInt(req.params.id))
    if(fundUser) {
        const index = users.indexOf(fundUser)
        users.splice(index, 1)
        res.send(fundUser)
    }else {
        res.status(404).send('user is not found')
    }
})




function confirmUserİnfo(user){
    const schema = joi.object({
        name: joi.string().min(3).max(30).required(),
        age:joi.number().integer().min(1).max(99).required()
    })
    return schema.validate(user)
}



app.listen(3000)