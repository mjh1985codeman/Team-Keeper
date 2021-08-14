const fs = require("fs");
const Engineer = require("../lib/Engineer.js");
const Intern = require("../lib/Intern.js");
const Manager = require("../lib/Manager.js");
let htmlString = "";

//function to generate the HTML using the teamArray as the argument
const generateTeam = (teamArray) => {
  console.log("This is on the generate HTML!" + teamArray);
  console.log("We made it to the generate HTML Page!");
  // Pulling out each elements' (Manager, Intern, Engineer that is in the teamArray) key values.
  // This data will be used to create the cards to write to the HTML!!!
  // loops through the team Array and pulls out each Element () and makes them
  // into a card.
  teamArray.forEach((element) => {
    if (element instanceof Manager) {
      htmlString += `
      <div class="card" style="width: 18rem;">
         <div class="card-header">
         ${element.name}
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${element.getRole()}</li>
    <li class="list-group-item">${element.id}</li>
    <li class="list-group-item">${element.email}</li>
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
    <li class="list-group-item">${element.email}</li>
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
    <li class="list-group-item">${element.email}</li>
    <li class="list-group-item">${element.getSchool()}</li>
  </ul>
</div>`;
    } else {
      console.log("I got nothin");
    }
    //writes the the htmlString variable (the cards) to as the "new-team.html file" in the Dist Folder

    const htmlTemplate = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Team-Keeper</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"
        />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />
      </head>
      <header>
        <div class="container">
          <h1 class="text-center">Team Profile</h1>
        </div>
      </header>
      <body>
        <div class="card-deck d-flex justify-content-center">
          <div class="row">
            ${htmlString}
          </div>
        </div>
      </body>
    </html>`;

    fs.writeFile("./dist/new-team.html", htmlTemplate, function (err) {
      if (err) {
        return console.log(err);
      }
      console.log(
        "Success!!!  Checkout the Dist folder to see you team's HTML!"
      );
    });
  });
};

module.exports = generateTeam;
