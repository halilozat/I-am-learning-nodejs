const express = require('express')
const router = express.Router()
const joi = require('@hapi/joi')



const users = [
    {id:1,name:'halil',age:23},
    {id:2,name:'halilx',age:21},
    {id:3,name:'halily',age:24},
    {id:4,name:'halilz',age:25},
    {id:5,name:'halilr',age:20}
]

router.get('/',(req,res) => {

    if(req.query.reverse){
        res.send(users.reverse)
    }else {
        res.send(users)
    }

})
router.get('/:id',(req,res) => {

    const fundUser = users.find(user => user.id === parseInt(req.params.id))
    if(fundUser) {
        res.send(fundUser)
    }else {
        res.status(404).send('user is not found')
    }

})

router.post('/',(req,res) => {

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

router.put('/:id',(req,res) => {

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

router.delete('/:id',(req,res) => {
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

module.exports = router