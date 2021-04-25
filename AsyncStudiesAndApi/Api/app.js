const https = require('https')

https.get('https://restcountries.eu/rest/v2/name/turkey',(response) =>{

    let data = ''
    response.on('data',chunk => {
        data = data + chunk
    })

    response.on('end',()=>{
        const jsonData = JSON.parse(data)
        if(jsonData[0] != null){
            console.log(jsonData[0].name)
            console.log(jsonData[0].timezones[0])
        }
        else console.log("error")
    })

}).on('error',err => {console.log("Error is :" + err.message)})