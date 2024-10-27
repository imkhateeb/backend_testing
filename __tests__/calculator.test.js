const mathOps = require("../calculator");

// describe -> Outer description for the test suite OR we can say a group of similar tests

describe("Calculator Tests", () => {
  // toBe -> Expected output block
  // expect -> Actual output block
  // Inside a test block all test cases should pass to pass the test

  // Test the add function
  test("Add 1 + 2 to equal 3", () => {
    expect(mathOps.add(1, 2)).toBe(3);
    expect(mathOps.add(1, 2)).not.toBe(4);
  });

  // Test the subtract function
  test("Subtract 2 - 1 to equal 1", () => {
    expect(mathOps.subtract(2, 1)).toBe(1);
  });

  // Test the multiply function
  test("Multiply 2 * 3 to equal 6", () => {
    expect(mathOps.multiply(2, 3)).toBe(6);
  });

  // Test the divide function
  test("Divide 6 / 2 to equal 3", () => {
    expect(mathOps.divide(6, 2)).toBe(3);
  });
});
