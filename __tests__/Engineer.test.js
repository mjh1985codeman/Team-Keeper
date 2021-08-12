const Engineer = require("../lib/Engineer.js");

//test to see if class returns object
test("creates a intern object", () => {
  const eng = new Engineer();
  expect(typeof eng).toBe("object");
});

//test for arguments
test("Grabs GitHub from Argument", () => {
  const gh = "mjhCodeMan1985";
  const eng = new Engineer(gh);
  expect(eng.gitHub).toBe(gh);
});
