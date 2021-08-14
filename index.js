const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee.js"); //Do I need this?
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const generateTeam = require("./src/generateHTML");
const path = require("path");
// establishing an empty team array that will hold the objects.
//should this be let?
const teamArray = [];

// manager questions function that get prompted as soon as the file is initiated via node.
const managerQuestions = () => {
  return (
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "What is the Team Manager's name?",
        },
        {
          type: "input",
          name: "id",
          message: "What is the Team Manager's Id?",
        },
        {
          type: "input",
          name: "email",
          message: "What is the Team Manager's Email Address?",
        },
        {
          type: "input",
          name: "officeNumber",
          message: "What is the Team Manager's office phone number?",
        },
      ])
      //Taking the answers and sotring them as a newManager object
      .then((answers) => {
        const newManager = new Manager(
          //answers.keyname
          answers.name,
          answers.id,
          answers.email,
          answers.officeNumber
        );
        console.log(newManager);
        //pushing the newManager Object into the teamArray.
        //I NEED TO TEST THIS TO SEE IF IT'S ACTUALLY WORKING.
        teamArray.push(newManager);
        console.log("Team Manager Added!");
      })
      //After these questions are done prompt for the addAnother function.
      .then(addAnother)
  );
};

// Intern Questions

const internQuestions = () => {
  return (
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "What is the Intern's name?",
        },
        {
          type: "input",
          name: "id",
          message: "What is the Intern's ID?",
        },
        {
          type: "input",
          name: "email",
          message: "What is this Interns's email address?",
        },
        {
          type: "input",
          name: "school",
          message: "At what school is the intern currently enrolled?",
        },
      ])
      //Taking the answers and sotring them as a newIntern object
      .then((intAnswers) => {
        const newIntern = new Intern(
          //answers.keyname
          intAnswers.name,
          intAnswers.id,
          intAnswers.email,
          intAnswers.school
        );
        console.log(newIntern);

        //pushing the newIntern Object into the teamArray.
        //I NEED TO TEST THIS TO SEE IF IT'S ACTUALLY WORKING BUT HOW?!
        teamArray.push(newIntern);
        console.log("Intern Added!");
        // console.log("updated team Array" + teamArray);
      })
      .then(addAnother)
  );
};

// Engineer Questions

const engineerQuestions = () => {
  return (
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "What is the Engineer's name?",
        },
        {
          type: "input",
          name: "id",
          message: "What is the engineer's ID?",
        },
        {
          type: "input",
          name: "email",
          message: "What is this engineer's email address?",
        },
        {
          type: "input",
          name: "gitHub",
          message: "What is this engineer's gitHub Username?",
        },
      ])
      //Taking the answers and sotring them as a newManager object
      .then((engAnswers) => {
        const newEngineer = new Engineer(
          //answers.keyname
          engAnswers.name,
          engAnswers.id,
          engAnswers.email,
          engAnswers.gitHub
        );
        console.log(newEngineer);

        //pushing the newEmployee Object into the teamArray.
        //I NEED TO TEST THIS TO SEE IF IT'S ACTUALLY WORKING.
        teamArray.push(newEngineer);
        console.log("Engineer Added!");
        // console.log("updated team Array" + teamArray);
      })
      .then(addAnother)
    //After these questions are done prompt if the user wants to add another team member.
  );
};
// The addAnother function which prompts the user if they want to add
// additional team members and if so they choose which one they want to add.
const addAnother = () => {
  return inquirer
    .prompt([
      {
        type: "confirm",
        name: "addAnotherPrompt",
        message: "Do You want to add another team member?",
      },
    ])
    .then((answers) => {
      if (answers.addAnotherPrompt === true) {
        console.log("The user wants to add another Team Member");
        return inquirer
          .prompt([
            {
              type: "list",
              name: "addTeamMemRole",
              message: "Is this team member a 'Intern' or 'Engineer'?",
              choices: ["Engineer", "Intern"],
            },
          ])
          .then((answers) => {
            if (answers.addTeamMemRole === "Engineer") {
              engineerQuestions();
            } else if (answers.addTeamMemRole === "Intern") {
              internQuestions();
            }
          });
      } else {
        console.log("The User is done adding team members");
        //What does my team array look like now?
        console.log("updated teamArray" + teamArray);
        generateTeam(teamArray);
        // CALL ON THE GENERATE SITE FUNCTION WHICH HAS NOT BEEN
        //CREATED YET TAKE EVERYTHING THAT IS IN THE TEAMARRAY AND
        //PUSH THAT TO THE CARDS ON THE GENERATED HTML PAGE.
      }
    });
};

managerQuestions();
