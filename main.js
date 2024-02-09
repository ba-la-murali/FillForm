function saveFormData() {
    var username = document.getElementById("username").value;
    // var password = document.getElementById("password").value;
    var year = document.querySelector('input[name="class"]:checked').value;
    var skills = [];
    var skillsCheckboxes = document.getElementsByName("skills");
    for (var i = 0; i < skillsCheckboxes.length; i++) {
        if (skillsCheckboxes[i].checked) {
            skills.push(skillsCheckboxes[i].value);
        }
    }
    var college = document.getElementById("college").value;
    var role = document.querySelector('input[name="role"]:checked').value;

    var textData = "Username: " + username + "\n" +
                //    "Password: " + password + "\n" +
                   "Year: " + year + "\n" +
                   "Skills: " + skills.join(", ") + "\n" +
                   "College: " + college + "\n" + 
                   "Role: " + role + "\n";

   
    var blob = new Blob([textData], { type: 'text/plain' });

    // Create a link element
    var a = document.createElement('a');

    // Set the download attribute with the filename
    a.download = 'formData.txt';

    // Create a URL for the Blob and set it as the href attribute of the link
    a.href = URL.createObjectURL(blob);

    // Append the link to the document
    document.body.appendChild(a);

    // Programmatically trigger a click on the link to initiate the download
    a.click();

    // Remove the link from the document
    document.body.removeChild(a);
    // const fs = require('fs')
    // fs.writeFile('Output.txt', textData, (err) => {
 
    //     // In case of a error throw err.
    //     if (err) throw err;
    // })
}
