

const logThis = () => {
    console.log('Cuurent this', this);
}

logThis();


const obj = {
    a: 1,
    test(){
        console.log('A ', this.a)
    },
}


obj.test()

// const value = obj.test;

// const string = 'test';


// const object = new Object();

console.log('obj', object)





Array.prototype.dublicate = function(){
    return [...this, ...this]
}


console.log([1,2,3,4].dublicate())





// number.






// value.bind(obj).call({ a: 4 }); // 



// console.log('Obj value', value)