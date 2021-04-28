const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true, }).then(_ => {
    console.log("Database connection is succesful");
}).catch(err => console.log('BDatabase connection error:' + err));

const UserSchema = new Schema({_id:String}, {collection:'user'})
const User = mongoose.model('user', UserSchema)


//Find methods
User.find({age:23}, {name:1,address:1, _id:0}, {skip:3, limit:3}).then(allUsers => console.log(allUsers)).catch(err=>console.log(err))
//or
User.find({age:23}).limit(3).sort({name:1}).select({name:1,address:1}).then(allUsers => console.log(allUsers))


User.findById('60898ec75ccc9e9eee0d8612').then(user=>console.log(user))
User.findOne({age:23}).then(user=>console.log(user))

//comparison operators

//eq: equal
//ne: not equal
//gt: greater than
//gte: greater  equal
//lt: less than
//lte: less equal
//in
//nin: not in


//greater than 25, less than 35
User.find({age: {$gte:25,$lte:35}}, {name:1,age:1}).then(users=>console.log(users))
//age is 23 and 32
User.find({age: {$in: [23,32]}}, {name:1,age:1}).then(users=>console.log(users))


//and & or

User.find()
    .and([ {age:29},{eyeColo:'blue'} ])
    .then(users=>console.log(users))

    User.find()
    .or([ {age:29},{eyeColo:'blue'} ])
    .then(users=>console.log(users))

//Pagination

const pageNumber = 4
const postPerPage = 10

User.find()
    .skip((pageNumber-1)*pageNumber)
    .limit(postPerPage)
    .then(result=>console.log(result))