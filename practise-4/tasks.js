// 1) Використовуйте Promise.resolve(value), щоб створити Promise, який успішно виконається зі значенням 3.

function makePromiseResolveWith3(){
   return Promise.resolve(3)
}

// makePromiseResolveWith3().then(console.log);

//----------------

// 2) Використовуйте Promise.reject(error), щоб створити Promise, яки відхилятиметься зі значенням "Boo!"

function makePromiseRejectWithBoo(){
    return Promise.reject('Boo!')

    // return new Promise((_, reject) => reject('Boo!'))
}

// makePromiseRejectWithBoo().catch(console.log)

//----------------

// 3) Допишіть функцію нижче. Використовуйте конструктор Promise, щоб створити Promise, який:
//      виконається, якщо itShouldResolve є true
//      відхилятиметься, якщо itShouldResolve є false

// function shouldResolve(){
//     return Math.random() > 0.5;
// }


// function makePromiseWithConstructor(itShouldResolve) {
//     return new Promise((resolve, reject) => {
//         return itShouldResolve ? resolve() : reject();
//     })
// }

// // () => {}
// makePromiseWithConstructor(false ).then(() => {
//     console.log('Promises');
// }).catch(() => {
//     console.log('Error!!!');
// })

// makePromiseWithConstructor(false).catch(()=> {
// console.log('Error!!!');
// })



//----------------

// 4) Написати функцію delay. Вона повинна повертати проміс,
// який перейде в стан "виконаний" через ms мілісекунд, так щоб ми могли додати до нього .then:

// function delay(ms) {
//    return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(ms)
//         }, ms)    
//    })
// }



// delay(3000).then((seconds) => alert(`done after ${seconds / 1000} seconds`));

//-----------------

// 5) Написати функцію яка буде отримувати в параметрах проміс та колбек. Запустити колбек після виконання промісу за допомогою then

async function waitForPromise(promise, action){
    const data = await promise;
    action(data)

    // promise.then(action);
}

// // const callback = (seconds) => alert(`done after ${seconds} seconds`)

const promise = new Promise((resolve) => { resolve('Hello world') });
const callback = (str) => {console.log(str)}

// waitForPromise(promise, callback)
//-----------------

// 6) Написати функцію яка буде отримувати в параметрах проміс та два колбеки. Запустити перший колбек після успішного виконання промісу за допомогою then
// або ж запустити другий колбек якщо при виконанні промісу виникла помилка



// function consumePromise(promise, action, handler){
//     promise.then(action).catch(handler)
// }

// consumePromise(makePromiseResolveWith3(), () => console.log('Success'),  () => console.log('Error'))

//-----------------

// 7) Модифікуйте функцію з 4-го завдання щоб вона отримувала в параметри також булеве значення
// ( виповниться проміс чи відхилиться ) та значення яке потрібно повернути якщо проміс виконається успішно


// function delay(ms, shouldResolve) {
//    return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             shouldResolve ? resolve(ms) : reject(ms)
//         }, ms)    
//    })
// }

// // //
// delay(1000, true)
//     .then(seconds => alert(`done after ${seconds} seconds`))
//     .catch(err => console.log(`ось наш ${err}`));
    
//-----------------

// 8) Напишіть функцію яка генерує потрібну кількість промісів та записує їх у масив який потім повертає.
// Функція буде мати два аргументи - кількість промісів та першочергову затримку.
// Проміс буду виконуватись успішно за умови якщо його порядковий номер непарний, а якщо парний - проміс буде хибним
// Для кожного промісу пілся першого додавати до затримки пів секунди


// function delay(ms, boolean) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (boolean) { 
//                 resolve(ms / 1000); 
//             }
            
//             else { reject(`erorr boolean is ${boolean} -> after ${ms / 1000}`) }
        
//        }, ms)
//    })
// }


// Promise.all(promises).then((result) => console.log(result)).catch((result) => console.log(result));

// promises.forEach((promise) => {
//     promise.then(console.log).catch(console.log);
// })

// console.log(promises)
//-----------------

// 9) Напишіть функцію яка очікує необмежену кількість промісів, чекає коли вони усі виповняться
// та виводить їх значення у консоль у форматі 'Promise 1 was resolved with value 5'



