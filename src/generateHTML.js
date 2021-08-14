const fs = require("fs");
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
    } else if (element instanceof Engineer) {
      htmlString += `<div class="card" style="width: 18rem;">
         <div class="card-header">
         ${element.name}
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${element.getRole()}</li>
    <li class="list-group-item">${element.id}</li>
    <li class="list-group-item">${element.getGitHub()}</li>
  </ul>
</div>`;
    } else if (element instanceof Intern) {
      htmlString += `<div class="card" style="width: 18rem;">
         <div class="card-header">
         ${element.name}
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${element.getRole()}</li>
    <li class="list-group-item">${element.id}</li>
    <li class="list-group-item">${element.getSchool()}</li>
  </ul>
</div>`;
    } else {
      console.log("I got nothin");
    }
    //writes the the htmlString variable (the cards) to as the "new-team.html file" in the Dist Folder
    fs.writeFile("./dist/new-team.html", htmlString, function (err) {
      if (err) {
        return console.log(err);
      }
      console.log(
        "Success!!!  Checkout the Dist folder to see you team's HTML!"
      );
    });
  });
};

module.exports = generateHTML;
