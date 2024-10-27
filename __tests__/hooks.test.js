// Setup and cleaning methods

/**
There are four hooks that Jest provides to help you manage the setup and teardown of resources in your tests:

beforeAll: a function to run once before all the tests in a test suite
afterAll: a function to run once after all the tests in a test suite
beforeEach: a function to run before each test in a test suite
afterEach: a function to run after each test in a test suite

 */

/**
 -------- WE CAN ALSO GET THE TEST REPORT IN HTML FORMAT USING JEST HTML REPORTER --------

 package name : jest-html-reporter
 configuration in package.json: 
  "jest": {
      "collectCoverage": true,
      "reporters": [
        "default",
        [
          "jest-html-reporters",
          {
            "publicPath": "./html-report",
            "filename": "report.html",
            "expand": true
          }
        ]
      ]
    }

    collectCoverage: true -> to get the coverage report
    reporters: to get the report in html format
    publicPath: path where the report will be stored
 
  */

// Example of using hooks in Jest
describe("Calculator Tests", () => {
  let mathOps;

  beforeAll(() => {
    mathOps = require("../calculator");
  });

  beforeEach(() => {
    console.log("Before each test");
  });

  afterEach(() => {
    console.log("After each test");
  });

  afterAll(() => {
    console.log("After all tests");
  });

  test("Add 1 + 2 to equal 3", () => {
    expect(mathOps.add(1, 2)).toBe(3);
    expect(mathOps.add(1, 2)).not.toBe(4);
  });

  test("Subtract 2 - 1 to equal 1", () => {
    expect(mathOps.subtract(2, 1)).toBe(1);
  });

  test("Multiply 2 * 3 to equal 6", () => {
    expect(mathOps.multiply(2, 3)).toBe(6);
  });

  test("Divide 6 / 2 to equal 3", () => {
    expect(mathOps.divide(6, 2)).toBe(3);
  });
});
