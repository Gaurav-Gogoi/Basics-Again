// const tinderuser = new Object()
// this is singleton

const tinderuser = {}

tinderuser.id = "123abc"
tinderuser.name = "sam"
tinderuser.isloggedin = false

// console.log(tinderuser);


const regularuser = {
    email:"silvr@gmail.com",
    fullname: {
        userfullname: {
            firstname: "gogoi",
            lastname: "silver"
        }
    }
}

// console.log(regularuser.fullname.userfullname.firstname);


const obj1 = { 1:"a", 2:"b"}
const obj2 = { 3:"a",4:"b"}
const obj4 = { 5:"a",6:"b"}

// const obj3 = {obj1 , obj2}

// const obj3 = Object.assign({}, obj1, obj2, obj4)
// rare case
// important creating an empty object so all the rest soruce objects goes inside the empty target so it is full proof that it is going inside the empty object
// if no empty object it will go inside the first one obj1

const obj3 = {...obj1,...obj2,...obj4}
// console.log(obj3);



// from db
const users = [
   
    {
        id:1,
        email:"g@gmail.com"
    },
    {
        id:1,
        email:"g@gmail.com"
    },
    {
        id:1,
        email:"g@gmail.com"
    },
   
]

// console.log(users[1].email)

// console.log(tinderuser);

// console.log(Object.keys(tinderuser));
// now it gets turned into array later we can map loop
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));

// console.log(tinderuser.hasOwnProperty('name'));


const course ={
    coursename: "js",
    price:99,
    courseinstructore:"jon"
}

const {courseinstructore : instructor} = course
// destructure
// console.log(instructor);


