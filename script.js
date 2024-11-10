//Get refrance to the form and display area
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
//  Handle form Sumission 
form.addEventListener('submit', function (event) {
    event.preventDefault(); //prevent page reload
    //collect input values
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skills').value;
    var experience = document.getElementById('experience').value;
    //Generate resume content dramaticallyy
    var resumeHTML = "\n<h2><b> Resume</b></h2>\n<h3>Personal Information</h3>\n<p><b>Name:".concat(name, "</b></p>\n<p><b>Phone:").concat(phone, "</b></p>\n<p><b>Email:").concat(email, "\n\n<h3>Education</h3>\n<p>").concat(education, "</p>\n\n<h3>Skills</h3>\n<p>").concat(skills, "</p>\n\n<h3>Experience</h3>\n<p>").concat(experience, "</p>\n\n");
    //Display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element is missing');
    }
});
