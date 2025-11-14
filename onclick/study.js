// const doSomthing1 = function(){    //function expretion


//     //befor initialization cant acces

// }
// doSomthing1();


// function doSomthing2(){        //function declaration
//      // can acces 
// }



// let arr = [2,3,4,5,6,7];        
// arr.unshift(2,3,4);
// console.log(arr);




// let arr = [2,3,4,5,6,7];        
// arr.splice(2,1);
// console.log(arr);





// let arr = [2,3,4,5,6,7];        
// arr.splice(2,1,9);
// console.log(arr);



// let a = [5,6,4];
// for(let i of a){
//     console.log(i);

// }


// let a = [4,5,7,9];
// for(let i in a){
//     console.log(i);

// }


// let a = {name:'reshma', class: 23, add: 'bagicha'};
// for(let i in a){
//  console.log(`${i} = ${a[i]}`);

// }


// let arr = [2,5,6,7,8];
// let a = arr.includes(2, 0)
// console.log(a);



// let numbers = [1, 2, 3, 4, 5];
// let sum = numbers.reduce((c, urr)=> c + urr, 0);
// console.log(sum); 





// let arr = [3,5,6,7,8];
// arr.forEach(function log(item){
//     console.log(item);

// });


// const arrowFunction = (arg) => {
//     console.log('arrow function');

// }
// arrowFunction();





// const a = function(y){                 //function expresion
//  return y +3;
// }
// console.log(a(4));



// function rem(y){
//     return y +3;                  //functiion declaration
// }
// console.log(rem(4));


// let arr = [2,3,4,5,6];
// let max = 0;
// let smax = 0;
// for(i = 0; i < arr.length; i++){             //max in array
//     if(max < arr[i]){
//         max = arr[i];

//     }

// }
// console.log(max);





// const a = [2,5,6,3,9];
// let m = a.length;

// let min = a[0];
// for(i = m - 1; i >= 0; i--){
//     if(min > a[i]){
//         min = a[i];
//     }
// }
// console.log(min);


// const arr = [8, 7, 5, 6, 3, 9];
// let min = arr[0];
// let smax = arr[0];
// for (i = 0; i < arr.length; i++) {
//     if (min > arr[i]) {
//         min = arr[i];
//     }
// }
// console.log(smax);



// let age = 23;
// let name = "reshma"
// let isStudent = true
// let marks = [23,4,5,8];
// let adress = {city: "new yark", zip: "10001"};
// console.log(typeof age);


// let age = "23";
// let str = Number(age);
// console.log(typeof age);


let a = [2, 4, 6, 8];
for (let i = 0; i < 8; i++) {
    if (a[i] !== undefined && a[i] !== i) { 
        console.log(i);
    }
    
}
