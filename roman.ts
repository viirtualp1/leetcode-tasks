import { runTestCases } from "./answers";

const symbols = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function romanToInt(s: string): number {
  if (!s) {
    return 0;
  }

  let number = 0;

  for (let i = 0; i < s.length; i++) {
    const previousNumber = symbols[s[i - 1]];
    const currentNumber = symbols[s[i]];

    if (i === 1 && previousNumber > currentNumber) {
      number += previousNumber + currentNumber;
      continue;
    }

    number += currentNumber;
  }

  return number;
}

const cases = [
  {
    input: "III",
    output: 3,
  },
  {
    input: "LVIII",
    output: 58,
  },
  {
    input: "MCMXCIV",
    output: 1994,
  },
];

runTestCases<string, number>(romanToInt, cases);
