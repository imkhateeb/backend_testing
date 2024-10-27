test("Truthy Operators", () => {
  var name = "Khateeb";
  var num = 10;
  var nullObj = null;

  expect(name).toBeTruthy();
  expect(num).toBeTruthy();
  expect(nullObj).not.toBeTruthy();
  expect(nullObj).toBeFalsy();

  // comparison
  let num1 = 10;
  let num2 = 20;

  expect(num1).toBeGreaterThan(5);
  expect(num2).toBeLessThan(30);
  expect(num1).toBeGreaterThanOrEqual(10);
  expect(num2).toBeLessThanOrEqual(20);
});
