const myArray = [01,1,2,3,4,5];
console.log(myArray[0]);
myArray.push(6);
//myArray.pop();
console.log(myArray)

const myn1 = myArray.slice(1,3)
console.log(myn1)
console.log("A ", myArray)

const myn2 = myArray.splice(1,3);
console.log(myn2)
console.log("B ", myArray)


