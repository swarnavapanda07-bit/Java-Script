const tinderuser = {}

tinderuser.id = "123ab"
tinderuser.name = "Swarnava"
tinderuser.isLoggedin = false

//console.log(tinderuser)

const regularuser = {
    email : "swarnavapanda@gmail.com" ,
    fullname: {
        userfullname:{
            firstname: "swarnava",
            lastname: "panda"
        }
    }
}
//console.log(regularuser.fullname.userfullname.firstname)

const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "c" , 4: "d"}
//const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1 , ...obj2}
//console.log(obj3)

const users = [
    {
    id: 1,
    email: "swarnavapanda@gmail.com"
    }
]

users[1].email
console.log(tinderuser)

console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));

consolr.log(tinderuser.hasOwnProperty('isLoggedin'));