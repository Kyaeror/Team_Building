const fs = require(`fs`)
const inquirer = require(`inquirer`)
const addIntern = `
<div class="col-3" style = "margin: 20px 10px 0; height: 300px;box-shadow: 1px 5px 5px black" >
            <div class="bg-info">
                <div class="name h3">Alec</div>
                <div class="occupation h3">Engineer</div>
            </div>
            <div class = "inner-card" style = "margin-left: 20px; box-shadow: 1px 5px 5px black">  
                <div class="employee-id h6">ID: 2</div>
                <div class="email h6">Email: <a href= mailto:john@gmail.com target="_blank">john@gmail.com</a></div>
                <div class="school h6">School: UGA</div> 
            </div>      
        </div>
`
var HTML = ``

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
    HTML += `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
        <title>Team Building Example</title>
    </head>
    <body>
        <div class="text-center text-white bg-danger h1" style="padding-top: 50px; padding-bottom: 50px;">My Team</div>
        <div class="row d-flex justify-content-around" style="padding-top: 50px; position: relative; margin-left: 100px; margin-right: 100px;">
            <!-- manager -->
            <div class="col-3" style = "margin: 20px 10px 0; height: 300px;box-shadow: 1px 5px 5px black" >
                <div class="bg-info">
                    <div class="name h3">${data.name}</div>
                    <div class="occupation h3">Team Manager</div>
                </div>
                <div class = "inner-card" style = "margin-left: 20px; box-shadow: 1px 5px 5px black">  
                    <div class="employee-id h6">ID: ${data.id}</div>
                    <div class="email h6">Email: <a href= mailto:${data.email} target="_blank">${data.email}</a></div>
                    <div class="office-number h6">Office number: ${data.office_number}</div> 
                </div>      
            </div>
    `
    continuePrompt()
})

//HTML creation
function writeToFile(fileName, data) {
    fs.writeFile(fileName, HTML, function (err) {
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
            ]).then((data)=>{
                HTML += `
                <div class="col-3" style = "margin: 20px 10px 0; height: 300px;box-shadow: 1px 5px 5px black" >
                <div class="bg-info">
                    <div class="name h3">${data.name}</div>
                    <div class="occupation h3">Engineer</div>
                </div>
                <div class = "inner-card" style = "margin-left: 20px; box-shadow: 1px 5px 5px black">  
                    <div class="employee-id h6">ID: ${data.id}</div>
                    <div class="email h6">Email: <a href= mailto:${data.email} target="_blank">${data.email}</a></div>
                    <div class="github-link h6">Github: <a href="https://github.com/${data.github}" target="_blank">${data.github}</a></div> 
                </div>      
                </div>
                `
                continuePrompt()
            })
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
                    message: `What school does the intern attend?`
                },
            //loop
            ]).then((data)=>{
                HTML += `
                <div class="col-3" style = "margin: 20px 10px 0; height: 300px;box-shadow: 1px 5px 5px black" >
                            <div class="bg-info">
                                <div class="name h3">${data.name}</div>
                                <div class="occupation h3">Intern</div>
                            </div>
                            <div class = "inner-card" style = "margin-left: 20px; box-shadow: 1px 5px 5px black">  
                                <div class="employee-id h6">ID: ${data.id}</div>
                                <div class="email h6">Email: <a href= ${data.email} target="_blank">${data.email}</a></div>
                                <div class="school h6">School: ${data.school}</div> 
                            </div>      
                        </div>
                `
                continuePrompt()
            })
        }
        //exit
        if(data.occupation === `No`){
            HTML += `
            </div>
            </body>
            </html>
            `
            writeToFile(`./html_test/team.html`, data)
            console.log(`Your HTML has been created!`)
        }
    })
    }
    }

start()