//GLOBAL


// const a = 4;

//FUNCTION
function showA(){

    // const a = 10;

    // BLOCK
{

    // const a = 89;
    //CODE
    console.log('a -> ', a);
}


}

// showA()


function closure(){

    const param = 'param1';

    function insideClosure(){
        console.log('Form closure ->', param)
    }

    return insideClosure;

}

const closuredFunction = closure();

const param = 'global param!';


// closuredFunction();

let createdFunctions = 0;


function getCountFunction(){

    let calls = 0;

    ++createdFunctions;

    return () => console.log(`This function ${createdFunctions} was called ${++calls} times`);
    
}


// const firstFunction  = getCountFunction();

// firstFunction();

// firstFunction();

// firstFunction();

// console.log('-----------------');

// const secondFunction  = getCountFunction();

// secondFunction();

// secondFunction();

// secondFunction();



// function sum(firstParam){
//     return (secondParam) => firstParam + secondParam;
// }


// console.log('First sum', sum(-12)(54));
// console.log('Second sum', sum(0)(8));





function sumAdvanced(initialParam){
    let sum = initialParam;

    function sumNumbers(newParam){
        
        if(arguments.length === 0){
            return sum;
        }

        sum += newParam;

        return sumNumbers;
    }

    return sumNumbers;
}

// function makeSR(...args){
//     let sum = args.reduce((total, num) => total + num);
//     return function(...args){
//         if (args.length === 0){
//             return sum;
//         }
//         return makeSR(args[0], sum);    
//     };      
// }

// console.log(makeSR(2)(2)(2)(2)());

// console.log('Advanced', sumAdvanced(2)(2)(2)(2)())

// sumAdvanced(2)(2)(2)(2)() = 8;


// function makeArmy() {
//     let shooters = [];
  
   
//     for (let i = 1; i <= 10; i++) {
//       let shooter = function() { // створюємо функцію стрільця,
//         return i; // що має показувати свій номер
//       };

//       shooters.push(shooter); // додаємо її до масиву
      
//     }
  
//     // ...і повертаємо масив стрільців
//     return shooters;
//   }
  
//   let army = makeArmy();

// army.forEach(shooter => console.log(shooter()))



function helloDeclaration(){
    console.log('Hello from declaration', this.a);
}



const helloExpression = function(param1, param2){
    console.log('params', param1, param2)
    console.log('Hello from expression', this.b);
}


const functionObject = {
    a: 1,
    b: 'hello form obj',
    // toString(){
    //     return 'Hello'
    // }
}

// helloDeclaration.apply(functionObject);

// helloExpression.apply(functionObject, [2 , 3]);

// const newFunc = helloExpression.bind(functionObject, 1, 2);)


// const newFunc = helloExpression.bind(functionObject, 1, 2);)



















