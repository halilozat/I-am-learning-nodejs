const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true  }).then(() => {
    console.log("database connection is succesful")
}).catch(err => console.log('connection is failed' + err))

const userSchema = new mongoose.Schema({
    name: String
})

const User = mongoose.model('user',userSchema)

const halil = User({name:'Halil'})

halil.save().then(result => console.log(result)).catch(err => console.log(err))