// let companey = [
//     {
//         'name': 'kyle',
//         'favNum': 3,
//         'isprogrammer': true,
//         'hobbys': ['wait liftening', 'bowling'],
//     },
//     {
//         'name': 'johan',
//         'favNum': 5,
//         'isprogrammer': false,
//         'hobbys': ['wait liftening', 'bowling'],
//     }
// ]
// console.log(JSON.parse(companey)[1].name);



function ram(w, rem){
    console.log('this is rama '+ rem) ;
    rem(rem);
}
function w(){
   console.log('this is ram');
}
ram('v', w);


