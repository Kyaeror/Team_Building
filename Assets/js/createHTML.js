function createHTML(data) {
    return `
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
        </div>
    </div>
</body>
</html>
    `
}

module.exports = createHTML