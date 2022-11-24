// shades ordered from black to white

const shadeArray = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];

// find value in shade array and return index to use below

const getIndex = (n) => {
  return shadeArray.indexOf(n.toString());
};

// takes in a hexidecimal value and a value to increase or decreace

const shadeHex = (color, int) => {
  let hexArray = color.split("");

  // Check length of color input
  if (hexArray.length < 6 || hexArray.length > 7) {
    return new Error("Must be 6 digits");
  }
  // If inputed with #, remove it to calculate result
  if (hexArray.length === 7) {
    hexArray.shift();
  }

  // return new value based on corrosponding index in shadeArray
  const result = hexArray.map((digit) => {
    let index = getIndex(digit) + int;

    // If index will return undefined in result, handle edge cases
    if (index < 0) {
      index = 0;
    }
    if (index > 15) {
      index = 15;
    }
    return shadeArray[index];
  });

  // return result array as a css ready string
  return "#" + result.join("");
};

export default shadeHex;
