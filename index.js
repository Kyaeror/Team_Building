const fs = require(`fs`)
const inquirer = require(`inquirer`)
const createHTML = require(`./Assets/js/createHTML`)

function start () {
inquirer.prompt([
    {
        type: `input`,
        name: `name`,
        message: `What is the team manager's name?`
    },
    {
        type: `input`,
        name: `id`,
        message: `What is the team manager's employee ID?`
    },
    {
        type: `input`,
        name: `email`,
        message: `What is the team manager's email?`
    },
    {
        type: `input`,
        name: `office_number`,
        message: `What is the team manager's office number?`
    },
]).then((data)=>{
    // writeToFile(`./html_test/team.html`, data)
    continuePrompt()
})

//HTML creation
function writeToFile(fileName, data) {
    fs.writeFile(fileName, createHTML(data), function (err) {
        if (err) {
            return console.log(err)
        }
    })
}

//prompt to ask for more members
function continuePrompt(data){
    inquirer.prompt([
        {
            type: `list`,
            name: `occupation`,
            message: `Is there anymore team members?`,
            choices:[`Engineer`, `Intern`, `No`]
        },
    ]).then((data) => {
        if(data.occupation === `Engineer`){
            inquirer.prompt([
                {
                    type: `input`,
                    name: `name`,
                    message: `What is the engineer's name?`
                },
                {
                    type: `input`,
                    name: `id`,
                    message: `What is the engineer's employee ID?`
                },
                {
                    type: `input`,
                    name: `email`,
                    message: `What is the engineer's email?`
                },
                {
                    type: `input`,
                    name: `github`,
                    message: `What is the engineer's github?`
                },
            //loop
            ]).then((data)=>continuePrompt())
        }
        if(data.occupation === `Intern`){
            inquirer.prompt([
                {
                    type: `input`,
                    name: `name`,
                    message: `What is the intern's name?`
                },
                {
                    type: `input`,
                    name: `id`,
                    message: `What is the intern's employee ID?`
                },
                {
                    type: `input`,
                    name: `email`,
                    message: `What is the intern's email?`
                },
                {
                    type: `input`,
                    name: `school`,
                    message: `What is the intern's github?`
                },
            //loop
            ]).then((data)=>continuePrompt())
        }
        //exit
        if(data.occupation === `No`){
            console.log(`Your HTML has been created!`)
        }
    })
    }
    }

start()