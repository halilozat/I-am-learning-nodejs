const path = require('path')
const fs = require('fs')

const pathObject = path.parse(__dirname)
console.log(pathObject.dir)

fs.readdir('./',{withFileTypes:false},function(err,files){
    if(err) console.log("error:"+err)
    console.log(files)
})