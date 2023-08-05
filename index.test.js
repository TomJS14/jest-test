/** @format */

const {
  analyseArray,
  caesarCipher,
  calculate,
  capitalise,
  reversed,
} = require("./index.js");

test("Returns first character capitalised", () => {
  expect(capitalise("string")).toBe("String");
});

test("Returns the string reversed", () => {
  expect(reversed("word")).toBe("drow");
});

test("adds 1 + 2 to equal 3", () => {
  expect(calculate(1, "+", 2)).toBe(3);
});

test("multiplies 4 * 2 to equal 8", () => {
  expect(calculate(4, "*", 2)).toBe(8);
});

test("subtracts 5 - 2 to equal 3", () => {
  expect(calculate(5, "-", 2)).toBe(3);
});

test("Divides 10 / 2 to equal 5", () => {
  expect(calculate(10, "/", 2)).toBe(5);
});

test("returns the string with each character shifted by the key", () => {
  expect(caesarCipher("Attack at dawn!!", 5)).toBe("Fyyfhp fy ifbs!!");
});

test("Takes an array and checks the object contains the average", () => {
  expect(analyseArray([1, 8, 3, 4, 2, 6])).toEqual(
    expect.objectContaining({ average: 4 })
  );
});

test("Takes an array and returns object containing the minimum value", () => {
  expect(analyseArray([1, 8, 3, 4, 2, 6])).toEqual(
    expect.objectContaining({ min: 1 })
  );
});

test("Takes an array and returns object containing the max value", () => {
  expect(analyseArray([1, 8, 3, 4, 2, 6])).toEqual(
    expect.objectContaining({ max: 8 })
  );
});

test("Takes an array and returns object containing the length of the array", () => {
  expect(analyseArray([1, 8, 3, 4, 2, 6])).toEqual(
    expect.objectContaining({ length: 6 })
  );
});
