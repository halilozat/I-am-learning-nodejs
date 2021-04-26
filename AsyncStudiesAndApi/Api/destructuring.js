//array descructuring

let name = ['halil','ozat']
const firstname = name[0] 
const surname = name[1] 

console.log(firstname + " " + surname)


let [firstName, lastName] = name
console.log(firstName + " " + lastName)

let [a, b] = 'halil ozat'.split(' ')
console.log(a + " " + b)

let [name1,name2,...name3] = ['halil','melih','mehmet','ayse']
console.log(name3)

//object destructuring 

let options = {
    title: "menu",
    width: 100,
    height: 200
}

let{title:baslik,width=50,height} = options
console.log(baslik + width + height)

//--------------------------------------------------------

let person = {
    name: {
        firstName1 : "halil"
    }
}
const {
    name: {
        firstName1
    }
} = person