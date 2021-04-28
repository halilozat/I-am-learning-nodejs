const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true, }).then(_ => {
    console.log("Database connection is succesful");
}).catch(err => console.log('BDatabase connection error:' + err));

const UserSchema = new Schema({}, {collection:'user'})
const User = mongoose.model('user', UserSchema)


//Find methods
User.find({age:23}, {name:1,address:1, _id:0}, {skip:3, limit:3}).then(allUsers => console.log(allUsers)).catch(err=>console.log(err))
//or
User.find({age:23}).limit(3).sort({name:1}).select({name:1,address:1}).then(allUsers => console.log(allUsers))