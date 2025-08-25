const marvel = ["thor", "ironman", "spiderman"]
const dc = ["superman","batman","spiderman"]

// marvel.push(dc)

// console.log(marvel[3][0]);

// const all = marvel.concat(dc)

// console.log(all);

const all_new_heroes = [...marvel,...dc]

//  to combine to array either concat or spread


// console.log(all_new_heroes);

const another = [1,2,3,[4,5,[7,8,[9]]]]
const real_array = another.flat(Infinity)

// rare case converts all in single array
console.log(real_array);



console.log(Array.isArray("googi"))

console.log(Array.from("googi"))
// to convert into an array
console.log(Array.from({name:"gooooo"}))
// if you dont specify it returns a empty array important

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
// to convert multiple elemnets in an array
