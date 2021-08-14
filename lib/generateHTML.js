const fs = require("fs");
const teamArray = require("../index.js");
const Engineer = require("./Engineer.js");
const Intern = require("./Intern.js");
const Manager = require("./Manager.js");

//function to generate the HTML using the teamArray as the argument
const generateHTML = (teamArray) => {
  console.log("This is on the generate HTML!" + teamArray);
  console.log("We made it to the generate HTML Page!");
};

module.exports = generateHTML;
