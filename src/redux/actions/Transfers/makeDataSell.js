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
//TODO: Уточнить, что мне необходимо попросить бекендера сразу выдавать кроме типа - информацию о том, карточка информационная или нет

const newPerson = (index) => {
  const status = randomInteger(1, 10);
  return {
    player: `${index} ${namor.generate({ words: 1, numbers: 0 })}`,
    team: namor.generate({ words: 1, numbers: 0 }),
    age: randomInteger(18, 50),
    position: namor.generate({ words: 1, numbers: 0 }),
    rating: randomInteger(0, 100),
    potential: randomInteger(0, 100),
    form: namor.generate({ words: 1, numbers: 0 }),
    est: namor.generate({ words: 1, numbers: 0 }),
    salary: randomInteger(1000, 1000000),
    status,
    club: namor.generate({ words: 1, numbers: 0 }),
    transfer_fee_offer: randomInteger(100, 1000),
    counter_offer: randomInteger(100, 1000),
    player_salary_offer: randomInteger(100, 1000),
    type: status === 3 || status === 8 || status === 9 || status === 10 ? 1 : 0,
  };
};

export default function makeData(...lens) {
  const makeDataLevel = (depth = 0) => {
    const len = lens[depth];
    return range(len).map((d, index) => {
      return {
        ...newPerson(index),
        number: index,
        // subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      };
    });
  };

  return makeDataLevel();
}
