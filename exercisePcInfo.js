const os = require('os')

let freeRam = byteToGB(os.freemem)
let totalRam = byteToGB(os.totalmem())
let usedRam = totalRam-freeRam

function byteToGB(totalByte){
    return (totalByte / 1024/ 1024/ 1024).toFixed(2)
}
function showPcInfo(){
    console.log(`total ram : ${totalRam}`)  // `` = altGr + , + ,
}

showPcInfo()