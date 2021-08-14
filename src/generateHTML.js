const fs = require("fs");
const teamArray = require("../index.js");
const Engineer = require("../lib/Engineer.js");
const Intern = require("../lib/Intern.js");
const Manager = require("../lib/Manager.js");
let htmlString = "";

//function to generate the HTML using the teamArray as the argument
const generateHTML = (teamArray) => {
  console.log("This is on the generate HTML!" + teamArray);
  console.log("We made it to the generate HTML Page!");
  // Pulling out each elements' (Manager, Intern, Engineer that is in the teamArray) key values.
  // This data will be used to create the cards to write to the HTML!!!
  // loops through the team Array and pulls out each Element () and makes them
  // into a card.
  teamArray.forEach((element) => {
    if (element instanceof Manager) {
      //lets try this
      // console.log("Hello Manager");
      // console.log("This is the Managers name: " + `${element.name}`);
      // console.log("This is the Manager's Role: " + `${element.getRole()}`);
      // console.log("This is the Manager's Id: " + `${element.id}`);
      // console.log(
      //   "This is the Manager's Phone Number: " + `${element.getOfficeNumber()}`
      // );
      htmlString += `<div class="card" style="width: 18rem;">
         <div class="card-header">
         ${element.name}
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${element.getRole()}</li>
    <li class="list-group-item">${element.id}</li>
    <li class="list-group-item">${element.getOfficeNumber()}</li>
  </ul>
</div>`;
      // } else if (element instanceof Engineer) {
      //   console.log("Hello Engineer");
      //   console.log("This is the Engineer's name: " + `${element.name}`);
      //   console.log("This is the Engineer's Role: " + `${element.getRole()}`);
      //   console.log("This is the Engineer's Id: " + `${element.id}`);
      //   console.log("This is the Engineer's GitHub: " + `${element.getGitHub()}`);
      // } else if (element instanceof Intern) {
      //   console.log("Hello Intern");
      //   console.log("This is the Intern's name: " + `${element.name}`);
      //   console.log("This is the Intern's Role: " + `${element.getRole()}`);
      //   console.log("This is the Intern's Id: " + `${element.id}`);
      //   console.log("This is the Intern's School: " + `${element.getSchool()}`);
    } else {
      console.log("I got nothin");
    }
  });
};
//saves the generateHTML data (cards) to a variabled htmlCards

//writs the the generateHTML variable (the cards) to as the "new-team.html file" and saves
fs.writeFile("./dist/new-team.html", htmlString, function (err) {
  if (err) {
    return console.log(err);
  }
  console.log("Success!!!  Checkout the Dist folder to see you team's HTML!");
  //telling the system to wait until the file is created before attempting to open it.
  open("new-team.html", { wait: true });
});
//it to the dist folder.
//SOMETHING IS MESSING UP HERE.

module.exports = generateHTML;
