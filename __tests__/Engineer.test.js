const Engineer = require("../lib/Engineer.js");

//test to see if class returns object
test("creates a Engineer object", () => {
  const eng = new Engineer();
  expect(typeof eng).toBe("object");
});

//test for arguments
test("Grabs GitHub from Argument", () => {
  const gh = "mjhCodeMan1985";
  const eng = new Engineer("Michael", "123", "test@email.com", gh);
  expect(eng.gitHub).toBe(gh);
});

//test for getGitHub Method
test("getGitHub argument passed successfully", () => {
  const gh = "mjhCodeMan1985";
  const eng = new Engineer("Michael", "123", "test@email.com", gh);
  expect(eng.getGitHub()).toBe(gh);
});

//test for getRole Method.
test("Role argument passed successfully", () => {
  const role = "Engineer";
  const eng = new Engineer("Michael", "123", "test@email.com", role);
  expect(eng.getRole()).toBe(role);
});
