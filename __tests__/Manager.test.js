const Manager = require("../lib/Manager.js");

//test to see if class returns object
test("creates a Manager object", () => {
  const mgr = new Manager();
  expect(typeof mgr).toBe("object");
});

//test for arguments
test("Grabs Office Number from Argument", () => {
  const ofcnum = "777-777-7777";
  const mgr = new Manager("Michael", "123", "test@email.com", ofcnum);
  expect(mgr.officeNumber).toBe(ofcnum);
});

//test for getOfficeNumber Method
test("Office Number argument passed successfully", () => {
  const ofcnum = "777-777-7777";
  const mgr = new Manager("Michael", "123", "test@email.com", ofcnum);
  expect(mgr.getOfficeNumber()).toBe(ofcnum);
});

//test for getRole Method.
test("Role argument passed successfully", () => {
  const role = "Manager";
  const mgr = new Manager("Michael", "123", "test@email.com", role);
  expect(mgr.getRole()).toBe(role);
});
