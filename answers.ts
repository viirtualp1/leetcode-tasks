enum COLORS {
  RED = "\x1b[31m",
  GREEN = "\x1b[32m",
  BLUE = "\x1b[34m",
}

function print(text: string, color: COLORS) {
  if (!color) {
    console.log(text);

    return;
  }

  console.log(color, text);
}

export function runTestCases<T, K>(
  func: (...args: any) => K,
  cases: { input: T; output: K }[]
) {
  if (!func || cases.length === 0) {
    console.error("Please check the arguments");

    return;
  }

  cases.forEach((testCase, idx) => {
    const result = func(testCase.input);
    const testCaseIdx = idx + 1;

    if (result === testCase.output) {
      print(`Test ${testCaseIdx} success`, COLORS.GREEN);

      return;
    }

    print(`Test ${testCaseIdx} failure`, COLORS.RED);
    console.log(`  - Expected: ${testCase.output}`);
    console.log(`  - Actual: ${result}`);
  });
}
