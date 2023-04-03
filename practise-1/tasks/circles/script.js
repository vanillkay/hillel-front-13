

const ROOT = document.querySelector('#root');

const CIRCLE_CLASS = 'round';

function createCircle(){
    const divCircle = document.createElement('div');

    divCircle.classList.add(CIRCLE_CLASS);
    divCircle.style.width = '100px';
    divCircle.style.height = '100px';
    divCircle.style.borderRadius = '50%';
    divCircle.style.backgroundColor = getRandomHexColor();

    return divCircle;
}


// console.log('new div elemens',  createCircle());

const circlesCollection = document.createDocumentFragment();

for(let i = 0; i < 100; i++){
    const circle = createCircle();
    // WRONG !!!!
    // circle.addEventListener('click', function(){
    //     circle.remove();
    // })
    circlesCollection.append(circle)
}

ROOT.addEventListener('click', function(event){
    console.log('event', event)
    const clickedTarget = event.target;

    if(!clickedTarget.classList.contains(CIRCLE_CLASS)){
        return;
    }

    clickedTarget.remove();

})

// console.dir(circlesCollection)

ROOT.append(circlesCollection);

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
};