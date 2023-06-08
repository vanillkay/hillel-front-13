const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const asyncSimulate = async data => {
  const delay = ms =>
    new Promise((res, rej) =>{
        const random = getRandomInt(1, 5)
        console.log('random', random)
        setTimeout(random > 2 ? res : rej, ms)
     } );
  await delay(getRandomInt(500, 2000));

  return data;
};

export default asyncSimulate;
