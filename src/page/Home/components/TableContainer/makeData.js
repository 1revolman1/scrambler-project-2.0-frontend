import namor from "namor";

const range = (len) => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newPerson = () => {
  return {
    name: namor.generate({ words: 1, numbers: 0 }),
    w: Math.floor(Math.random() * 100),
    d: Math.floor(Math.random() * 100),
    l: Math.floor(Math.random() * 100),
    gd: Math.floor(Math.random() * 100),
    p: Math.floor(Math.random() * 100),
    history: namor.generate({ words: 4, numbers: 0 }),
    manager: namor.generate({ words: 1, numbers: 0 }),
    last5scores: [
      namor.generate({ words: 1, numbers: 0 }),
      namor.generate({ words: 1, numbers: 0 }),
      namor.generate({ words: 1, numbers: 0 }),
      namor.generate({ words: 1, numbers: 0 }),
      namor.generate({ words: 1, numbers: 0 }),
    ],
    last5players: [
      namor.generate({ words: 1, numbers: 0 }),
      namor.generate({ words: 1, numbers: 0 }),
      namor.generate({ words: 1, numbers: 0 }),
      namor.generate({ words: 1, numbers: 0 }),
      namor.generate({ words: 1, numbers: 0 }),
    ],
    last5sales: [
      namor.generate({ words: 1, numbers: 0 }),
      namor.generate({ words: 1, numbers: 0 }),
      namor.generate({ words: 1, numbers: 0 }),
      namor.generate({ words: 1, numbers: 0 }),
      namor.generate({ words: 1, numbers: 0 }),
    ],
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
      };
    });
  };

  return makeDataLevel();
}
