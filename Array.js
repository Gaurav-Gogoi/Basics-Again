const myarr = [1,2,3,4,5]
// console.log(myarr[1]);

const myarr2 = new Array(1,2,3)

const myarr3 = myarr2.join()
// console.log(typeof  myarr3);

// myarr.push(6)
// myarr.pop()

// myarr.shift()

// console.log(myarr);
console.log("A", myarr);

const myn1 = myarr.slice(1,3)
// so slice take the value here it is (1,3) so it took out from index 1 to index2 last one excluded
console.log(myn1);
console.log("B", myarr);
// the original array reamins same

const myn2 = myarr.splice(1,3)
console.log(" C ",myarr);
console.log(myn2);
// in case of splice it takes index(1,3) it displays the deleetd values but if you print the original array the orginal array is manipulated 


