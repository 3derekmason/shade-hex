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

const shadeHex = (color, int) => {
  let hexArray = color.split("");
  if (hexArray.length < 6) {
    console.error("Value must be 6 digits");
  }
  if (hexArray.length === 7) {
    hexArray.shift();
  }

  hexArray.forEach((digit) => {
    let i =
  })
  return hexArray;
};

console.log(shadeHex("d50000"));

console.log(shadeHex("#d50000"));
