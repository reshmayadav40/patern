// let counter = 0;

// let unique = setInterval(function() {
//     if(counter < 10){
//   console.log(counter);              //setIntarval()
//   counter = counter+1;
//     }
// }, 1000);


// clearInterval(unique)




// let con = 0;
// setTimeout(function(){
//     if(con < 5){
//         console.log(con);     
//         con += 1;
//     }
// }, 2000);

// clearTimeout(un);

// let timerId = 0;
// setTimeout(function () {
//     if (timerId <= 10) {
//         timerId += 1;
//         console.log(timerId);
//     }
// }, 1000);


// clearTimeout(timerId);


// let co = 0;
// setInterval (function(){
//     if(co < 19){
//         console.log(co);
//         co += 1

//     }
// }, 1000)


// function one() {
//     setTimeout(function () {
//         console.log('function 1');
//         two();
//     }, 3000);
// }
// function two() {
//     console.log('function 2');
// }
// one();




// function one(){
//     (function (){
//         console.log('one 1');
//         two()

//     });
// }
// function two(){
//     console.log('two 1');

// }
// function three(){
//     console.log('three 1');

// }
// one();


// function createQuote(quote, callback) {
//     var myQuote = " origenal order, " + quote;
//     callback(myQuote); 
// }

// function logQuote(quote) {
//     console.log(quote);
// }

// createQuote(" ", logQuote);


function ram(r,p){
     setInterval(function(){
      var res = r+' full!';
      p(res)
    }, 2000);
}
function result(resul){
    console.log('response from the server: '+ resul);
}
ram(' the glass is half', result)


// User.json

