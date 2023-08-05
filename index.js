/** @format */

function capitalise(string) {
  return string[0].toUpperCase() + string.slice(1);
}

function reversed(string) {
  let splitString = string.split("");
  let reverseArray = splitString.reverse();
  let joinArray = reverseArray.join("");
  return joinArray;
}

function calculate(a, operand, b) {
  if (operand === "+") result = a + b;
  if (operand === "-") result = a - b;
  if (operand === "*") result = a * b;
  if (operand === "/") result = a / b;
  return result;
}

function caesarCipher(message, key) {
  let cipherText = "";

  for (let i = 0; i < message.length; i++) {
    const char = message[i];
    if (/[a-zA-Z]/.test(char)) {
      const base =
        char.toLowerCase() === char ? "a".charCodeAt(0) : "A".charCodeAt(0);
      const shift = (char.charCodeAt(0) - base + key) % 26;
      cipherText += String.fromCharCode(base + shift);
    } else {
      cipherText += char;
    }
  }
  return cipherText;
}

function analyseArray(array) {
  const average = findAverage(array);
  let min = Math.min(...array);
  let max = Math.max(...array);
  let length = array.length;
  object = {
    average: average,
    min: min,
    max: max,
    length: length,
  };
  console.log(object);
  return object;
}

function findAverage(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return (average = sum / array.length);
}

module.exports = {
  analyseArray,
  calculate,
  capitalise,
  reversed,
  caesarCipher,
};
