const fs = require("fs");
const Engineer = require("../lib/Engineer.js");
const Intern = require("../lib/Intern.js");
const Manager = require("../lib/Manager.js");
let htmlString = "";

//function to generate the HTML using the teamArray as the argument
const generateTeam = (teamArray) => {
  // Pulling out each elements' (Manager, Intern, Engineer that is in the teamArray) key values.
  // This data will be used to create the cards to write to the HTML!!!
  // loops through the team Array and pulls out each Element () and makes them
  // into a card.
  teamArray.forEach((element) => {
    if (element instanceof Manager) {
      //Pushing this data to the htmlString global variable.
      htmlString += `
      <div class="card m-2 border border-dark" style="width: 18rem">
         <div class="card-header font-weight-bold">
         ${element.name}
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Role: ${element.getRole()} <i class="fa fa-coffee" aria-hidden="true"></i>
    </li>
    <li class="list-group-item">ID: ${element.id}</li>
    <li class="list-group-item"><a href="mailto:${element.email}">${
        element.email
      }</a></li>
    <li class="list-group-item">Office Number: ${element.getOfficeNumber()}</li>
  </ul>
</div>`;
    } else if (element instanceof Engineer) {
      //Pushing this data to the htmlString global variable.
      htmlString += `<div class="card m-2 border border-dark" style="width: 18rem">
      <div class="card-header font-weight-bold">
      ${element.name}
</div>
<ul class="list-group list-group-flush">
 <li class="list-group-item">Role: ${element.getRole()} <i class="fa fa-desktop" aria-hidden="true"></i>
 </li>
 <li class="list-group-item">ID: ${element.id}</li>
 <li class="list-group-item"><a href="mailto:${element.email}">${
        element.email
      }</a></li>
      <li class="list-group-item">
      GitHub: <a href="https://github.com/${element.getGitHub()}">${element.getGitHub()}</a>
    </li>
</ul>
</div>`;
    } else if (element instanceof Intern) {
      //Pushing this data to the htmlString global variable.
      htmlString += `<div class="card m-2 border border-dark" style="width: 18rem">
      <div class="card-header font-weight-bold">
         ${element.name}
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Role: ${element.getRole()} <i class="fa fa-university" aria-hidden="true"></i>
    </li>
    <li class="list-group-item">ID: ${element.id}</li>
    <li class="list-group-item"><a href="mailto:${element.email}">${
        element.email
      }</a></li>
    <li class="list-group-item">School: ${element.getSchool()}</li>
  </ul>
</div>`;
    } else {
      console.log("I got nothin");
    }
  });
  //pushing the htmlString to the createHTMLFile Function as the arugment while calling the function
  //So that it can use that in the htmlTemplate variable.
  createHTMLFile(htmlString);
};
//Function to create the site using the htmlString that was passed from the generateTeam function.
createHTMLFile = function (htmlString) {
  //template literal which recieves the htmlString after it's been updated through the generateTeam function.
  let htmlTemplate = `<!DOCTYPE html>
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
    <nav
      class="
        navbar navbar-light
        bg-info
        text-uppercase
        font-weight-bolder
        border border-dark
      "
    >
      <a class="navbar-brand">
        <i class="fa fa-users" aria-hidden="true"></i>
        Team Profile
      </a>
    </nav>
  </header>
    <body class="bg-warning">
      <div class="container-fluid">
        <div class="justify-content-center">
          <div class="row d-flex flex-wrap justify-content-center">
            ${htmlString}
          </div>
        </div>
      </div>
    </body>
  </html>`;
  //Writing the htmlTemplate to the dist folder as the new-team.html file.
  fs.writeFile("./dist/new-team.html", htmlTemplate, function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("Success!!!  Checkout the Dist folder to see you team's HTML!");
  });
};

module.exports = generateTeam;
