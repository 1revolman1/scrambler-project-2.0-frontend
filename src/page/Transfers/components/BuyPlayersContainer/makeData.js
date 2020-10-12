import namor from "namor";

function randomInteger(min, max) {
  // случайное число от min до (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

const range = (len) => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newPerson = () => {
  const status = randomInteger(1, 10);
  return {
    player: namor.generate({ words: 1, numbers: 0 }),
    club: namor.generate({ words: 1, numbers: 0 }),
    age: randomInteger(18, 50),
    transfer_fee_offer: randomInteger(100, 1000),
    type: status === 3 || status === 8 || status === 9 || status === 10 ? 1 : 0,
    status,
  };
};

// const newPerson = () => {
//   const statusChance = Math.random();
//   return {
//     name: namor.generate({ words: 1, numbers: 0 }),
//     w: Math.floor(Math.random() * 30),
//     d: Math.floor(Math.random() * 100),
//     l: Math.floor(Math.random() * 100),
//     gd: Math.floor(Math.random() * 100),
//     p: Math.floor(Math.random() * 100),
//   };
// };

export default function makeData(...lens) {
  const makeDataLevel = (depth = 0) => {
    const len = lens[depth];
    return range(len).map((d, index) => {
      return {
        ...newPerson(),
        number: index,
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      };
    });
  };

  return makeDataLevel();
}
