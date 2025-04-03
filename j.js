/*
******
*****
****
***
**
*
*/


// let a = 6;
// for(i = a; i > 0; i--){
//     let str = '';
//     for(gap = a; gap > 0; gap--){
//         str += ''
//     }
//     for(j = 0; j < i; j++){
//         str += '*'
//     }
//     console.log(str);
// }

 /*
*
**
***
****
*****
*/


// let s = 5;
// for(i = 0; i < s; i++){
//     let str = '';
//     for(j = 0; j <= i; j++){           // first
//         str += '*'
//     }
//     console.log(str);
// }

/*
      *
     **
    ***
   ****
  *****
*/



// let s = 5;
// for(i = 0; i < s; i++){
//     let str = '';  
//     for(gap = 5; gap >= i; gap--){       //second
//         str += ' '
//     }
//     for(j = 0; j <= i; j++){
//         str += '*'
//     }
//     console.log(str);
// }

/*
 *
      * *
     * * *
    * * * *
   * * * * *
  * * * * * *
   * * * * *
    * * * *
     * * *
      * *
       *
*/


// let s = 5;
// for(i = 0; i < s; i++){
//     let str = '';
//     for(gap = 5; gap >= i; gap--){
//         str += ' '
//     }
//     for(j = 0; j <= i; j++){            // two trangle down up
//         str += ' *'
//     }
//     console.log(str);
// }
// for(i = s; i >= 0; i--){
//     let str = '';
//     for(gap = 5; gap >= i; gap--){
//         str += ' '
//     }
//     for(j = 0; j <= i; j++){
//         str += ' *'
//     }
//     console.log(str);
// }


/*
*        *
**      **
***    ***
****  ****
**********
*/

// let s = 5;
// for (i = 0; i < s; i++) {
//     let str = '';
//     for (j = 0; j <= i; j++) {
//         str += '*'
//     }
//     for (gap = s-1; gap > i; gap--) {     // third
//         str += '  '
//     }
//     for (j = 0; j <= i; j++) {
//         str += '*';
//     }
//     console.log(str);
// }










function hexavalue(a) {

    if (a[0] == '#') {
        if (a.length == 7) {
            let str = '';
            for (i = 1; i < a.length; i++) {
                if (((a[i] >= '0' && a[i] <= '9') || (a[i] >= 'A' && a[i] <= 'F') || (a[i] >= 'a' && a[i] <= 'f'))) {
                    str += a[i];
                } else {
                    return 'false'
                }

            }
            if (str.length == 6) {
                return 'true';
            }
        } else {
            return "false length";
        }
    } else {
        return 'hex is not here';
    }
}
// console.log(hexavalue('#abcdfa'))  //true
// console.log(hexavalue('#EAECEE'))   //true
// console.log(hexavalue('#eaecee'))   //true
// console.log(hexavalue('#CD5C58C'))  //false                //hexa value
// console.log(hexavalue('#CD5C5Z'))    //false
// console.log(hexavalue('#CD5C&C'))    //false
// console.log(hexavalue('#CD5C5C'))    //false

/*
      *
     ***
    *****
   *******
  *********


*/

// let a = 5;
// for(i = 0; i < a; i++){
//     let str = '';
//     for(gap = a; gap >= i; gap--){       //double star
//         str += ' ';
//     }
//     for(j = 0; j <= i*2; j++){
//         str += '*';
//     }
//     console.log(str);
// }




// let ar = [1, 2, 71, 4, 6];
// let count = 0
// for (i = 0; i < ar.length; i++) {
//     if (ar[i] === 7) {
//         count += 1;
//     } else {
//         while (ar[i] > 0) {
//             r = ar[i] % 10;
//             if (r == 7) {
//                 count++;
//             }
//             ar[i] = Math.floor(ar[i] / 10);         // second dis array quess
//         }
//     }
// }
// if (count >= 1) {
//     console.log('Boom..');

// }else{
//     console.log('not found 7');
// }



/*
       *
      **
     ***
    ****
   *****
  ******
 *******
  ******
   *****
    ****
     ***
      **
       *
*/

// let m = 7;
// for(i = 0; i < m; i++){
//     st = '';
//     for(gap = m; gap >=i; gap--){
//         st += ' '
//     }
//     for(j = 0; j < i; j++){
//         st += '*'
//     }
//     console.log(st);
// }
// for(i = m; i > 0; i--){
//     st = '';
//     for(gap = m; gap >=i; gap--){
//         st += ' '
//     }
//     for(j = 0; j < i; j++){
//         st += '*'
//     }
//     console.log(st);
// }


/*
1
0 1
1 0 1
0 1 0 1
*/


// let a = 5;
// for (i = 1; i <= a; i++) {
//     let str = ''
//     for (j = 1; j <= i; j++) {
//         if (i % 2 == 0) {
//             if (j % 2 == 0) {
//                 str += '1 '
//             } else {
//                 str += '0 '
//             }
//         } else {
//             if (j % 2 == 0) {
//                 str += '0 '
//             } else {
//                 str += '1 '
//             }
//         }
//     }

//     console.log(str);
// }







/*
*
**
***
****
*****
******
*******
******
*****
****
***
**
*
*/


// let m = 7;
// for(i = 0; i < m; i++){
//     st = '';
//     for(j = 0; j < i; j++){
//         st += '*'

//     }
//     console.log(st);
// }
// for(i = m; i > 0; i--){
//     st = '';
//     for(j = 0; j < i; j++){
//         st += '*'
//     }
//     console.log(st);
// }


/*
1      1
12    21
123  321
12344321
*/

// let a = 6;
// let all = ''
// for(i = 1; i <= a; i++){
//     let str = ''
//     for(j = 1; j <= i; j++){    
//         str += j
//     }
//     for(gap = a-1; gap >= i; gap--){
//         str += '  '
//     }
//     for(j = i; j >= 1; j--){
//         str += j
//     }

//     console.log(str);
// }




/*
1
2 3
4 5 6
7 8 9 10
11 12 13 14 
*/
// let n = 5;
// let m = 1
// for(i = 1; i <= n; i++){
//     let str = ''
//     for(j = 1; j <= i; j++){
//         str += m + ' '
//         m++
//     }
//     console.log(str);
// }




// let str = 'one two three four';
// let sp = str.split(' ')

// for(i = 0; i < sp.length; i++){
//     let war = sp[i];
//     if(war.length %2 !== 0){
//         let p = war.split("").reverse().join("");      // reverse odd length string
//         sp[i]=p;
//     }
// }
// console.log(sp);






/*
********
***  ***
**    **
*      *
*      *
**    **
***  ***
********
*/


// let s = 5;
// for (i = 0; i < s; i++) {
//     let str = '';
//     for (j = s; j > i; j--) {
//         str += '*'
//     }
//     for (gap = 0; gap < i; gap++) {    
//         str += '  '
//     }
//     for (j = s; j > i; j--) {
//         str += '*';
//     }
//     console.log(str);
// }
// for (i = 1; i < s; i++) {
//     let str = '';
//     for (j = 0; j <= i; j++) {
//         str += '*'
//     }
//     for (gap = s-1; gap > i; gap--) {     
//         str += '  '
//     }
//     for (j = 0; j <= i; j++) {
//         str += '*';
//     }
//     console.log(str);
// }


/*
*      *
**    **
***  ***
********
***  ***
**    **
*      *
*/

// let s = 5;
// for (i = 0; i < s; i++) {
//     let str = '';
//     for (j = 0; j <= i; j++) {
//         str += '*'
//     }
//     for (gap = s-1; gap > i; gap--) {      
//         str += '  '
//     }
//     for (j = 0; j <= i; j++) {
//         str += '*';
//     }
//     console.log(str);
// }
// for (i = 1; i < s; i++) {
//     let str = '';
//     for (j = s; j > i; j--) {
//         str += '*'
//     }
//     for (gap = 0; gap < i; gap++) {    
//         str += '  '
//     }
//     for (j = s; j > i; j--) {
//         str += '*';
//     }
//     console.log(str);
// }


// function reverse(a) {
//     let str = ''
//     let index = 0;
//     for (let i = 0; i < a.length; i++) {
//         if (a[i] == ' ' && a[i] < a.length) {
//             console.log(str);            
//             let rem = str;
//         }
//         str += a[i]

//         if (str.length % 2 !== 0) {
//             let rev = ''
//             for (let j = rem.length - 1; j >= 0; j--) {
//                 rev += rem[j]
//             }
//             console.log(rev);
//         } else {
//             console.log(rem);
//         }
//     }
// }
// reverse('reshm Yadav');
// reverse('three')



