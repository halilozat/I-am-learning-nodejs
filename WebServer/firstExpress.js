const express = require('express')
const morgan = require('morgan')
const userRouter = require('./router/usersRouter')
const homeRouter = require('./router/homeRouter')
const notfoundRouter = require('./router/404Router')
const app = express()

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(express.static("public")) //"public" folder is public
app.use(morgan("tiny"))

app.use('/users', userRouter)
app.use('/', homeRouter)
app.use(notfoundRouter)






app.listen(3000)