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
    pos: namor.generate({ words: 1, numbers: 0 }),
    age: Math.floor(Math.random() * 100),
    rating: Math.floor(Math.random() * 100),
    potential: Math.floor(Math.random() * 100),
    form: namor.generate({ words: 1, numbers: 0 }),
    club: namor.generate({ words: 1, numbers: 0 }),
    status: 1,
    sallary: Math.floor(Math.random() * 100),
    est: Math.floor(Math.random() * 100),
  };
};

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
