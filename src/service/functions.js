export const digitFormater = function (num, digits = 1) {
  let si = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "k" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "G" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" },
  ];
  let rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  let i;
  for (i = si.length - 1; i > 0; i--) {
    if (num >= si[i].value) {
      break;
    }
  }
  return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;
};
export const randomInteger = function (min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};
export const cashFormat = function (cash) {
  //THIS FUNCTION FORMAT CASH IN TEXT FORMAT AND ADD "," SYMBOL
  let target = String(cash);
  let newStr = target.replace(/[^0-9]/g, "");
  let finStr = "";
  let count = -1;
  for (let i = newStr.length - 1; i >= 0; i--) {
    if (count++ === 2) {
      count = 0;
      finStr = newStr[i] + "," + finStr;
    } else {
      finStr = newStr[i] + finStr;
    }
  }
  return finStr;
};
