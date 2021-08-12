const Employee = require("../lib/Employee");

//test to see if class returns object
test("creates a employee object", () => {
  const emp = new Employee();
  expect(typeof emp).toBe("object");
});

// tests for arguments

test("Grabs Name from Argument", () => {
  const n = "Michael";
  const emp = new Employee(n);
  expect(emp.name).toBe(n);
});

test("Grabs Id from Argument", () => {
  const id = "123";
  const emp = new Employee("Michael", id);
  expect(emp.id).toBe(id);
});

test("Grabs Email from Argument", () => {
  const email = "test@email.com";
  const emp = new Employee("Michael", "123", email);
  expect(emp.email).toBe(email);
});

// tests for methods

test("Grabs Name from getName()", () => {
  const n = "Michael";
  const emp = new Employee(n);
  expect(emp.getName()).toBe(n);
});

test("Grabs Id from getId()", () => {
  const id = "123";
  const emp = new Employee("Michael", id);
  expect(emp.getId()).toBe(id);
});

test("Grabs Email from getEmail()", () => {
  const email = "test@email.com";
  const emp = new Employee("Michael", "123", email);
  expect(emp.getEmail()).toBe(email);
});

test("Grabs Role from getRole()", () => {
  const role = "Employee";
  const emp = new Employee("Michael", "123", "test@email.com", role);
  expect(emp.getRole()).toBe(role);
});
