// const myPromise = new Promise((resolve, reject) => {
//     let success = true;  
//     setTimeout(() => {
//         if (success) {

//             resolve("Promise resolved successfully!");
//             console.log('ram');
            
//         } else {
//             reject("Promise rejected!");
//         }
//     }, 2000);  
// });


// const obg = {
//     "name" : "reshma",
//     "age": 45,
//     "village": "bagicha"
// }
// console.log(obg.hasOwnProperty("village"));
// console.log("class" in obg);


fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: "Hello", body: "World", userId: 1 })
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
