const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true, }).then(_ => {
    console.log("Database connection is succesful");
}).catch(err => console.log('BDatabase connection error:' + err));

var blogSchema = new Schema({
    title: String, // String is shorthand for {type: String}
    author: String,
    body: String,
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    meta: {
        votes: Number,
        favs: Number
    }
},{collection: 'my articles', minimize:false, bufferCommands:true})

blogSchema.methods.showTitle = function(){
    return this.title
}

blogSchema.virtual('summary').get(function () {
    return "this blog's title is "+this.title + " and blog's author is "+this.author
})

const Blog = mongoose.model('blog', blogSchema)
const myBlog = new Blog({title: 'first Blog'})

myBlog.save().then(blog=>console.log(blog)).catch(err=>console.log(err))

//Blog.create({title: 'second Blog'})

console.log(myBlog.showTitle());

const myBlog2 = new Blog({title: 'virtual Blog', author: 'halil ozat'})
console.log(myBlog2.summary);
console.log(myBlog2.toJSON({virtuals:true}));