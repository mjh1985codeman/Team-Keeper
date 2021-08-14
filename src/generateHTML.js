const fs = require("fs");
const teamArray = require("../index.js");
const Engineer = require("../lib/Engineer.js");
const Intern = require("../lib/Intern.js");
const Manager = require("../lib/Manager.js");

//function to generate the HTML using the teamArray as the argument
const generateHTML = (teamArray) => {
  console.log("This is on the generate HTML!" + teamArray);
  console.log("We made it to the generate HTML Page!");
  // Pulling out each elements' (Manager, Intern, Engineer that is in the teamArray) key values.
  // This data will be used to create the cards to write to the HTML!!!
  teamArray.forEach((element) => {
    if (element instanceof Manager) {
      console.log("Hello Manager");
      console.log("This is the Managers name: " + `${element.name}`);
      console.log("This is the Manager's Role: " + `${element.getRole()}`);
      console.log("This is the Manager's Id: " + `${element.id}`);
      console.log(
        "This is the Manager's Phone Number: " + `${element.getOfficeNumber()}`
      );
    } else if (element instanceof Engineer) {
      console.log("Hello Engineer");
      console.log("This is the Engineer's name: " + `${element.name}`);
      console.log("This is the Engineer's Role: " + `${element.getRole()}`);
      console.log("This is the Engineer's Id: " + `${element.id}`);
      console.log("This is the Engineer's GitHub: " + `${element.getGitHub()}`);
    } else if (element instanceof Intern) {
      console.log("Hello Intern");
      console.log("This is the Intern's name: " + `${element.name}`);
      console.log("This is the Intern's Role: " + `${element.getRole()}`);
      console.log("This is the Intern's Id: " + `${element.id}`);
      console.log("This is the Intern's School: " + `${element.getSchool()}`);
    } else {
      console.log("I got nothin");
    }
  });
};

module.exports = generateHTML;
