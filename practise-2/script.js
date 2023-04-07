
import * as importedData from './js/vars.js';

import './js/async.js';


// console.log('my API', importedData);
const btn = document.querySelector('button');


btn.addEventListener('click', function(){
    console.log('click')
    btn.classList.add('bnt-selected')
})

for(let i = 0; i <100000; i++){
console.log(i)
}

const newDiv = document.createElement('div');

newDiv.textContent = 'Hello form JS';


document.body.append(newDiv);
// while(true){
//     console.log(1)
// }



