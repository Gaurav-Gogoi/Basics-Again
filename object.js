// singleton
// object literals

// Object.create

const mysym = Symbol("key1")
// declare a symbol

const jsuser = {
    name:"Taurus",
    "full name": "taurussilver",
    [mysym]:"key1",
    // storing a symbol we use []
    age:13,
    location:"japan",
    lastdays:["monday","saturday"]
}

// console.log(jsuser.name);
// console.log(jsuser["name"]);
// console.log(jsuser["full name"]);

// console.log(typeof jsuser[mysym]);
// access a symbol


jsuser.age = 15
// Object.freeze(jsuser)
// freeze an object no changes takes place after that
jsuser.age = 18

// console.log(jsuser);

jsuser.greeting = function(){
    console.log("hello js user");
    
}
jsuser.greeting2 = function(){
    console.log(`hello js ${this.name}`);
   
    
}

console.log(jsuser.greeting2());






