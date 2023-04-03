
const array = [1,2,3,4,5];

const newArray = array.map((number) => {
    // console.log('From callback', number)
    return number ** 2;
});


// console.log('array new', newArray);


// const filteredArray = array.filter(number => number % 2 != 0);

// console.log('filtered', filteredArray);

// const sumObject = {
//     sum: 0,
// }

// array.forEach(number => sumObject.sum += number);


const firstArray = [1,2,3,4];

const secondArray = firstArray;

firstArray[0] = 45;

// secondArray[5] = 98;




const firstObj = {
    a: 1,
    array: [1,2,3,4]
};


// const secondObj = {
//     b: 2,
//     array: [5,6,7,8]
// }

// const arrayObj = [
//     firstObj,
//     secondObj
// ]

// const sum = arrayObj.flatMap((obj) => obj.array)
//         .reduce((acum, number) => acum + number, 0);

// console.log('mapped', sum)

// const reduceSum = array.reduce((acum, number) => {
//     console.log('Acum -> ', acum);
//     console.log('Value -> ', number);
//     return acum + number;
// }, 0

// const firstNumber = 3;

// const secondNumber = 5;

// const obj = {
//     a: 1,
// }

// const { a } = obj;

// console.log('param', a)

// if(firstNumber > 1){
//     obj.number_1 = firstNumber;
// }

// if(secondNumber % 5 === 0){
//     obj.number_2 = secondNumber;
// }


// const newExtraInfo = [
//     {
//         condition: firstNumber > 1,
//         number_1: firstNumber
//     }, 
//     {
//         condition: secondNumber % 5 !== 0,
//         number_2: secondNumber
//     }, 
//   ].reduce((newData, { condition, ...dataToAdd}) => 
//     condition ? {...dataToAdd, ...newData} : {...newData} ,
//   {})


//   console.log('data for server', {...obj, ...newExtraInfo})




// const seocndSum = secondObj.array.reduce((acum, number) => acum + number, 0);



// console.log('sum', firstSum);




