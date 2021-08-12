const Intern = require("../lib/Intern.js");

//test to see if class returns object
test("creates a Intern object", () => {
  const int = new Intern();
  expect(typeof int).toBe("object");
});

//test for arguments
test("Grabs School from Argument", () => {
  const sch = "Vandy";
  const int = new Intern("Michael", "123", "test@email.com", sch);
  expect(int.school).toBe(sch);
});
