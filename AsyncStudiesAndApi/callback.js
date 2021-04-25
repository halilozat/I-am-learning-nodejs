console.log("Program is Start")

getUser(12345, (userObject) =>{
    console.log("User: "+userObject.name)
    getCourse(userObject.name, (courseArray)=>{
        console.log("Course Array: "+courseArray)
    })
})

console.log("Program is End")

function getUser(id,callback){
    console.log(id + " id's User will be brought..")
    setTimeout(() => {        
        callback({id: id, name: "halil"})
    }, 1500);
}

function getCourse(userName, callback){
    console.log(userName+ "'s courses will be brought..")
    setTimeout(() => {
        callback(['javascript','c#','python'])
    }, 2000);
}