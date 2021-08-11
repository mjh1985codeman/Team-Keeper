const Employee = require("../lib/Employee.js");

test("creates a employee object", () => {
  const employee = new Employee("Michael");

  expect(employee.name).toBe("Michael");
  expect(employee.id).toBe("123");
  expect(employee.Email).toBe("me@email.com");
});
