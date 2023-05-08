// console.log(1);

// const promise = new Promise((reslove, reject) => {
//     console.log('From promise');

//     const number = Math.floor(Math.random() * 10);

//     setTimeout(() => {
//         if(number > 5){
//             reslove(3)
//         }else{
//             reject('Error in promise')
//         }

//     }, 1000)
   
    
// })
// .then(data => {
//     console.log('promise result', data)
//     return data;
// })
// // .then(data => console.log('Another result', data))
// .catch(error => {
//     console.log('Promise error -> ', error)
//     throw new Error(error);
// })
// .catch(error => console.dir('Another error', error.message))
// .finally(() => console.log('Promise end'))
// .finally(() => console.log('Another finally'))
// .finally(() => console.log('Another finally'))
// .finally(() => console.log('Another finally'))
// .finally(() => console.log('Another finally'))


// console.log('My promise', promise)


// console.log(2);



// ASYNC


// async function getDataFromPromise(){


//     try{

//     const data = await new Promise((reslove, reject) => {
//         console.log('From promise');
    
//         const number = Math.floor(Math.random() * 10);
    
//         setTimeout(() => {
//             if(true || number > 5){
//                 reslove(3)
//             }else{
//                 reject('Error in promise')
//             }
    
//         }, 1000)
       
        
//     })

//     console.log('Data', data)

//     }catch(error){
//         console.log('Another error', error)
//     }finally{
//         console.log('Promise end')
//     }


// }

// getDataFromPromise()

(async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')

    const data = await response.json();
    // .then(data => data.json())
    // .then(result => console.log('result', result))

    console.log('data', data)
})()



