// let counter = 0;

// function Funcounter(){
// counter++;
// return counter;
// }

// console.log(Funcounter());



function counter(){
    let count=0;
    return function(){
        count++;
        return count;
    }
}

let c = counter()
console.log(c());
console.log(c());
console.log(c());