const Hello = function(){
    console.log("Hello")
}
Hello()

const HelloArrowFunc = () => {
    console.log("Hello Arrow Function")
}
HelloArrowFunc()

const HelloShortVersion = _ => console.log("Hello Arrow Short Function")
HelloShortVersion()

const squareArrowFunc = (number) => {return number * number}
console.log(squareArrowFunc(5))


const person = {
    name: "halil",
    favoriteColors: ['blue','black'],
    showInfo(){
        this.favoriteColors.forEach((color) => {
            console.log(this.name +"'s favorite colors are "+""+ color)
        })
    }
}
person.showInfo()