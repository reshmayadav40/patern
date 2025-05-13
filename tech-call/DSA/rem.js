// let q = '8'+ 8;
// let num = String(q);
// console.log(typeof num);


// let n = 8;
// let m = 9;
// let result = (n > m)?true:false;     //ternary operator



// let a = null
// let c = 'mi'; 
// let b = 'missing';
// console.log(a?? b??c);       //nullish operator



//switch case
// let rem = '2';
// switch (rem) {
//     case 1:
//         console.log('Sunday');
//         break;
//     case 2:
//         console.log('Monday');
//         break;
//     case 3:
//         console.log('Tuesday');
//         break;
//     case 4:
//         console.log('Wednesday');
//         break;
//     default:
//         console.log('reshma');

// }



// function reverse(a) {
//     let result = '';
//     let word = '';

//     for (let i = 0; i < a.length; i++) {
//         if(a[i] !== ' '){
//             word += a[i];
//         }else{
//             if(word.length % 2 !== 0){
//                 let rem = '';
//                 for(j = word.length; j > 0; j--){
//                     rem += word.slice(j - 1, j);
//                                     }
//                 result += rem + ' ';
//             }else{
//                 result += word + ' ';
//             }
//             word = '';
//         }
//     }
//     if(word.length % 2 !== 0){
//         let rem = '';
//         for(j = word.length; j > 0; j--){
//             rem += word.slice(j - 1, j);

//         }
//         result += rem;

//     }else{
//         result += word;

//     }
//     return result;
// }
// console.log(reverse('one two three four five'));








// let n = 6; 
// for (i = n; i > 0; i--) {
//     let st = '';
//     for (gap = n; gap > i; gap--) {
//         st += ' ';
//     }
//     for (j = 0; j <= i; j++) {             
//         st += ' *';
//     }
//     console.log(st);
// }
// for(i = 0; i < n; i++){
//     let st = ''
//     for(gap = n; gap > i; gap--){
//         st += ' ';
//     }
//     for(j = 0; j <= i; j++){
//         st += ' *'
//     }
//     console.log(st);
// }





// let n = 4;
// for (i = 0; i <= n; i++) {
//     let st = '';
//     for (j = 0; j <= n; j++) {
//         if (i === 4 || j === 4 || i === 0 || j === 0) {          
//             st += ' *'
//         } else {
//             st += '  '
//         }
//     }
//     console.log(st);
// }



// let str = 'care';
// let st = 'race';
// let s = 0;
// for (let i = 0; i < str.length; i++) {
//         for (let j = 0; j < st.length; j++) {
//             if (str[i] === st[j]) {
//                 s++;
//                 console.log(i,j);              
//             }else{
//                 j++
//             }
//         }
// }
// if (s == str.length && s == st.length) {
//     console.log('yes its a anagram', s, str.length);

// } else {
//     console.log('no anagram', s, st.length);
// }



// function anagram(a,b){
//     let c = 0

//     let i = 0;

//     while(i < a.length){
//         if(a[i] != -1){
//             let j = 0;
//             while(j < b.length){
//                 if(a[i] == b[j]){
//                     c++;
//                     b[j] = -1;
//                     break;
//                 }else{
//                     j++;

//                 }
//             }
//             i++;
//         } 
//     }
//     if(a.length == c && b.length == c){
//         console.log('yes this is a anagram');
//     }else{
//         console.log('no this is not a anagram');

//     }
// }
// anagram('hello', 'ohell')

/*

* * * * * * 
 *       *
  *     *
   *   *
    * * 
     *
*/

// let n = 5;
// for(i = 0; i <= n; i++){
//     let st = ''
//     for(gap = 0; gap < i; gap++){
//         st += ' ';
//     }
//     for(j = n; j >= i; j--){
//         if(i == 0 || j == i || j == n){
//         st += ' *'
//         }else{
//             st += '  '
//         }
//     }
//     console.log(st);
// }









// let str  = 'MyIsReshma';
// let st = ''
// for(let i = 0; i < str.length; i++){
//     if(str[i] === str[i].toUpperCase()){         //if cappital letter will get give space
//         st += ' ' + str[i]
//     }else{
//         st += str[i]
//     }

// }
// console.log(st);





// let str  = 'MyIsReshma';
// let st = ''
// for(let i = 0; i < str.length; i++){
//     if((str[i] >= "A") && (str[i] <= "Z")){     //if cappital letter will get give space
//         st += ' ' + str[i]
//     }else{
//         st += str[i]
//     }

// }
// console.log(st);





// let str  = 'mYnAMEiSpRIYA';
// let st = ''
// for(let i = 0; i < str.length; i++){
//     if((str[i] >= "a") && (str[i] <= "z")){         //if small letter will get give space
//         st += ' ' + str[i]
//     }else{
//         st += str[i]
//     }

// }
// console.log(st);


// let a = 'ABCDEFGKLMNPQRSTUVWX';
// let n = 5
// for(i = 0; i <= n; i++){
//      let st = ''
//      for(j = 0; j < n; j++){

//           st += a[j];
//      }
//  console.log(st);     
// }






//string.fromcharcode

// let a = 5;
// let n = 1;
// for(i = 0; i < a; i++){
//      let str = '';
//      for(j = 1; j <= 5; j++){
//           str += ' '+n;
//          n++;
//      }

//      console.log(str);

// }



/*1 2 3 4 5
 10 9 8 7 6
 11 12 13 14 15
 20 19 18 17 16
 21 22 23 24 25

 */

// let row = 4;
// let n = 1;
// let col = row;
// for (i = 0; i < row; i++) {
//      let str = '';
//      if (i % 2 == 0) {
//           for (j = 1; j <= col; j++) {
//                str += ' ' + n;
//                n++;
//           }
//      } else {                                                           
//           let rev = n + col - 1;
//           for (j = 0; j < col; j++) {
//                str += ' ' + rev;
//                rev--;
//                n++;
//           }
//      }
//      console.log(str);
// }




// const arr = [2,3,1,4,5,6];
// let t = 4;
// let array = []

// for(j = 0; j < t; j++){
//      array[j] = arr[arr.length-t+j];

// }
// for(i = t; i < arr.length; i++){
//      array[i] = arr[i-t];
// }
// console.log(array);




// let a = 5;
// let l = 1
// for(let i = l; i <= a; i++){
//      let str = '';
//      for(let j = a; j >= i; j--){
//           str += j;
//      }
//      console.log(str);

// }




/*
*     *
 *   * 
  * *  
   *   
  * *  
 *   * 
*     *

*/



// let n = 5;
// for(i = 1; i <= n; i++){
//      let str = '';
//      for(j = 1; j <= n; j++){
//           if(j === i|| j === (n-i+1)){
//                str += '*'
//           }else{
//                str += ' ';
//           }
//      }
//      console.log(str);

// }




// let p = 1000;
// let r = 5;
// let t = 2;

// let a = p;

// a = p*(1+r/100)**t;
// console.log(a);




//    let a = 5;
//    let sum = 0;
//    for(i = 1; i <= a; i++){
//      sum = sum+1/i;
//    }
//    console.log(sum);



// let n = 5;
// let c = 0;
// for( let i = 1; i <= n; i++){

//      c = c * 10 +2
//      console.log(c);
// }

// let n = 6;
// let c = 0;
// let m;
// for( let i = n; i >= 0; i--){
//      c = c * 10 + 2;
// }
// while(c > 2){
//      c = Math.floor(c/10)
//      console.log(c);
// }




//Armstrong

// let n = 1634;
// let m = n;
// let k = n;
// let c = 0;
// let d = 0;
// while(n > 0){
//      a = n %10;
//      c++;
//      n = Math.floor(n / 10);
// }
// while(m > 0){
//      a = m % 10;
//      d += a**c;
//      m = Math.floor(m / 10);
// }
// if(d === k){
//      console.log('armstrong');

// }else{
//      console.log('not'); 
// }



//Fibonachchi

// let n = 1;
// let a = 0;
// let b = 1;
// let c = 0;
// for(i = 0; i < n; i++){
//      console.log(c);
//      a = b; 
//      b = c;
//      c = a+ b;
// }





/*
      1
     121
    12321
   1234321
  123454321
*/


// let n = 5;
// let c = 0;
// for (let i = 1; i <= n; i++) {
//      let str = '';
//      for (j = 5; j >= i; j--) {
//           str += ' ';
//      }
//      c = (c * 10 + 1);
//      b = c * c;
//      console.log(str,b);
// }




//find max and min from nested array


// let arr = [
//      [2,3,4,5],
//      [23,45,12,1,8],
//      [9,6,78,-1,23,6],
//      [3,45,67,90,100]
// ];
// let max = arr[0][0]
// let min = arr[0][0]
// for(let i = 1; i < arr.length;i++){
//      for(j = 0; j < arr[i].length; j++){
//             if(max < arr[i][j]){
//                max = arr[i][j];
//             }
//             if(min > arr[i][j]){
//                min = arr[i][j];
//             }   
//      }
// }
// console.log(max)
// console.log(min);



// let a = 5;
// let c = 0;
// for(i = 0; i < a; i++){
//      c = (c*10+1)
//      d = c*c
//      console.log(d); 
// }



// const arr = [[1, 2, 3],
// [4, 3, 5],
// [7, 8, 5, 9]];

// console.log('big',arr.length);
// for (i = 0; i < arr.length; i++) {
//   for (j = 0; j < arr[i].length; j++) {      // print 2D array
//     console.log(arr[i][j]);  
//   }
// console.log('small', arr[i].length);
// }



// const arr = [[1, 2, 3],
// [4, 3, 5],
// [7, 8, 5, 9]];

// console.log('big',arr.length);
// for (i = arr.length-1; i >= 0; i--) {
//   for (j = arr[i].length-1; j >= 0; j--) {   // print reverse 2D array
//     console.log(arr[i][j]);  
//   }
// }




// let arr = [
//   [1, 2],
//   [3, 4],
//   [5, 6]
// ];
// let count = 0;
// for(i = 0; i < arr.length; i++){
//   for(j = 0; j < arr[i].length; j++){      // sum of the 2D array
//     count += arr[i][j]
//   }
// }
// console.log(count);




// let arr = [
//   [1, 8],
//   [3, 4],
//   [5, 6]
// ];

// let max = 0;
// for(i = 0; i < arr.length; i++){
//   for(j = 0; j < arr[i].length; j++){      // Maximum num in 2D array
//     if(max < arr[i][j]){
//       max =  arr[i][j];
//     }

//   }
// }
// console.log(max);





// const arr = [[2,31,19,54], [6,7,9,12], [8,4,15]];
// arr[2][1] = 99;
// console.log(arr);

// let arr = [[2,3,4,[5,6,[56,9,[6],8]]]];
// console.log(arr[0][3][2][2][0]);

// const arr = [[2,31,19,54], [6,7,9,12], [8,4,15]];
// let even = [];
// let odd = [];
// for(i = 0; i < arr.length; i++){
//   for(j = 0; j < arr[i].length; j++){    
//     if(arr[i][j] % 2 == 0){
//       even[i] = arr[i][j]
//     }else{
//       odd[i] = arr[i][j]
//     }

//   }
// }
// console.log(even, odd);







// const arr = [[1,2,3,4,9],
//              [5,6,7,8,8],
//              [6,7,8,2,4]]


// for(let i = 0; i < arr.length; i++){
//   let rowsum = 0;
//   for(let j = 1; j < arr[i].length; j++){
//     rowsum += arr[i][j];
//   }
//   console.log('rowSum ', rowsum);
// }
// let count = arr[0].length;
// for( let i = 0; i < count; i++){
//   let colsum = 0;
//   for(let j = 0; j < arr.length; j++){
//     colsum +=  arr[j][i]
//   }
//   console.log('colsum ', colsum);
// }





// let str = "javascript";

// let btr ="aeiouAEIOU";
// for(let i = 0; i<str.length; i++){
//  for(let j = 0; j < btr.length; j++){
//    if(str[i] == btr[j]){
//     console.log(str[i]);

//    }
//  }
// }


// let a =10;
// let b = 8;
// let c =14;

// if(a == b && b == c && a == c){
//   console.log('tree equal');
// }else if(a == b || b == c || c == a){
//   console.log('two equal');
// }else if(a > b){
//   if(a > c){
//     if(a % 2 == 0){
//       console.log(a, 'is a even num');     
//     }else{
//       console.log(a, 'is a odd num');
//     }
//   }else if(b > c){
//     if(b % 2 == 0){
//       console.log(b, 'is a even num');     
//     }else{
//       console.log(b, 'is a odd num');
//     }
//   }else{   
//     if(c % 2 == 0){
//       console.log(c, 'is a even num');    
//     }else{
//       console.log(c, 'is a odd num');
//     } 
//   }
// }










// const str = "reshma";
// let num = str;
// let rem = typeof (str)
// console.log(rem);
// let c = 0;

// if (rem !== Number) {
//   let c = 0;

// while (num > 0) {
//   n = num % 10;
//   c = c * 10 + n;
//   num = Math.floor(num / 10);
// }
// if(c==str){
//   console.log("yes");

// }
// else{
//   console.log("no");

// }
// console.log(c);

// } else {
//   let st = '';
//   for (let i = str.length - 1; i >= 0; i--) {
//     st += str[i]
//   }
//   if (st == str) {
//     console.log('palindrom');

//   } else {
//     console.log('not');
//   }
// }





// let str = 'rer';
// let num = str;
// let c = 0
// while (num > 0) {
//   n = num % 10;
//   c = c * 10 + n;
//   num = Math.floor(num / 10);
// }
// if(c==str){
//   console.log("yes");
// }
// else{
//   console.log("no");

// }

// let str = 'rer';
// let num = str;
// let st = '';
// for (let i = str.length - 1; i >= 0; i--) {
//   st += str[i]
// }
// if (st == str) {
//   console.log('palindrom');

// } else {
//   console.log('not');
// }



// let num = 101;
// let sum = 0;
// let base = 2;
// let i = 0;
// while(num > 0){
//   r = num % 10;
//   sum = r + base**i;
//  num = Math.floor(num/10);
//  i++;
// }
// console.log(sum);







// let arr = [1, 2, 4, 2, 1, 3, 4, 5];
// let obj = {};
// for (let i = 0; i < arr.length; i++) {

//   if (obj[arr[i]] == 1) {

//     obj[arr[i]]++;
//   } else {
//     obj[arr[i]] = 1;
//   }
// }
// console.log(obj);

// console.log(Object.entries(obj));




// let arr = [1, 2, 4, 2, 1, 3, 4, 5];
// let newArr = [];
// for(i = 0; i < arr.length; i++){
//   if(newArr[arr[i]]){
//     newArr[arr[i]]++;
//   }else{
//     newArr[arr[i]] = 1;
//   }
// }
// console.log(newArr);

// for(let i = 1; i <= arr.length; i++){
//   if(newArr[i] <= 1){
//     console.log(arr[i]);
//   }

// }






// let a = 0;
// let b = 9;
// for (let i = a; i <= b; i++) {
//   let c = 0;
//   for (let j = 0; j <= i; j++) {
//     if (i % j == 0) {
//       c++;
//     }
//   }
//   if (c == 2) {
//     console.log(i);

//   }
// }


//automarphic num

// let num = 3;
// let k = num
// let b = num**2;
// let c = 0;
// while(num > 0){
//   n = num % 10;
//   c++;
//   num = Math.floor(num / 10)
// }
// if(c == 1){
//   m = b % 10;  
//   if(k == m){
//     console.log('yes it is automaphic num');
    
//   }else{
//     console.log('it is not a automarphic num');
    
//   }
// }else if(c == 2){
  // m = b % 100;  
  // if(k == m){
  //   console.log('yes it is automaphic num');
    
  // }else{
  //   console.log('it is not a automarphic num');
    
  // }
// }




// let num = 25;
// let k = num
// let b = num**2;
// let c = 0;
// while(num > 0){
//   n = num % 10;
//   c++;
//   num = Math.floor(num / 10)
// }
// for(i = 1; i <= c; i++){
//   let t = 10;
//   m = b % t;
//   if(k == m){
//     console.log('yes it is automaphic num');
    
//   }else{
//     console.log('it is not a automarphic num');
//     m = 
//     t = t * 10;
//   }
// t = t * 10;
// }












// let arr = [2,3,4,6,7,3,2];
// let ar = [];
// for(let i = 0; i < arr.length; i++){
//   let c = 0;
//   for(let j = 0; j < arr.length; j++){
//     if(arr[i] == arr[j]){
//       c++;
//     }
//   }
//   if(c == 1){
//     ar.push(arr[i])
//   }
  
// }
// console.log(ar);




// let a = 376;
// let b = a;
// let c = 0; 
// while(a>0){
//   let r = a%10;
//   c++;
//   a = Math.floor(a/10);
// }
// let M = b*b;
// let N = M%10**c;
// if(b == N){
//   console.log(b,'yes');
  
// }else{
//   console.log("No");
// }



// const s = [5, 6, 7];
// s = [1, 2, 3];
// s[2] = 45;
// s[0] = 9
// console.log(s);












// let ar = [3,4,5,6,7];
// let sr = {
//     name: "shma",
//     age: 18
// }
// for(let i in ar){
//     console.log(ar[i]);

// }










// Find total price of the products

// const arr = [
//     {
//         product: 'milk',
//         quantity: 1,
//         price: 1.50
//     },
//     {
//         product: 'dairy',
//         quantity: 2,
//         price: 1.90
//     },
//     {
//        product: 'milk',
//         quantity: 1,
//         price: 1.50  
//     }
// ];

// let total = 0;
// for (let i = 0; i < arr.length; i++) {
//     price = arr[i].quantity * arr[i].price;
//     total += price;

// }
// console.log(total);




// check array num is step by step or not
// const arr = [[44, 49], [45,46,47,48]];
// let er = []

// for (let i = 0; i < arr.length; i++) {
//     for (j = 0; j < arr[i].length; j++) {
//         er.push((arr[i][j]));
//     }
// }
// er.sort();
// console.log(er);

// let c = 0;
// let m = 0;
// for (let i = 0; i < er.length-1; i++) {
//     if (er[i] + 1 == er[i+1] ) {
//         c++;
//     } else{
//         m++;
//     }
// }

// console.log(m);
// if (m == 0) {
//     console.log('true');
// } else {
//     console.log('false');

// }



//without using loop we can count till where do you want 
// let n = 23;
// let m = 50;
//     // let m = 1
//     k = n * (n+ 1) / 2;
//     console.log(k);




/*
[
  [ 1 ],
  [ 2, 2 ],
  [ 3, 3, 3 ],
  [ 4, 4, 4, 4 ],
  [ 5, 5, 5, 5, 5 ],
  [ 4, 4, 4, 4 ],
  [ 3, 3, 3 ],
  [ 2, 2 ],
  [ 1 ]
]
*/
let n = 5;
let arr = [];
for (let i = 1; i <= n; i++) {  
    let ar = [];
    for(let m = 0; m < i; m++){
        ar.push(i);
    }     
 arr.push(ar)
}
for (let i = n-1; i > 0; i--) {  
    let ar = [];
    for(let m = 0; m < i; m++){
        ar.push(i);
    }  
 arr.push(ar)
}
console.log(arr);







