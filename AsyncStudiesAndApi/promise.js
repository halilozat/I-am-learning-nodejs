const myPromise = new Promise((resolve, reject) => {
    console.log("3 seconds operation started")
    setTimeout(() => {
        console.log("operation is over");
        resolve("operation's result is here")
        //reject("error")
    }, 3000);

})

myPromise.then((result) => {
    console.log(result)
}).catch((err)=>{
    console.log("error",err)
})