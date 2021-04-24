const { describe } = require('yargs')
const yargs = require('yargs')

yargs.version('1.0.1')

//added to person
yargs.command({
    command: 'add',
    describe : 'added to new person',
    builder: {
        isim: {
            describe: 'add person name',
            demandOption: true,
            type: 'string'
        },
        tel: {
            describe: 'add person tel',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        console.log("name:"+argv.isim + "phone:"+argv.tel)
    }
})


//deleted to person
yargs.command({
    command: 'delete',
    describe : 'deleted to new person',
    handler(argv){
        console.log("name:"+argv.isim + "phone:"+argv.tel)
    }
})

//console.log(yargs.argv)
yargs.parse()