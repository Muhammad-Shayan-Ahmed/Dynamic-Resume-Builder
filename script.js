// Get references to the form and output section
var form = document.getElementById('resume-form');
var resumeOutput = document.getElementById('resume-output');
// Function to generate resume dynamically
function generateResume(event) {
    event.preventDefault(); // Prevent form submission from reloading the page
    // Capture form data
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var profilePic = document.getElementById('profile-pic').value;
    var education = document.getElementById('education').value;
    var workExperience = document.getElementById('work-experience').value;
    var skills = document.getElementById('skills').value.split(',');
    // Clear the previous resume if it exists
    resumeOutput.innerHTML = '';
    // Create dynamic resume HTML
    var resumeHTML = "\n        <h2>".concat(name, "</h2>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <img src=\"").concat(profilePic, "\" alt=\"Profile Picture\" width=\"100\" height=\"100\" />\n        <h3>Education</h3>\n        <p>").concat(education, "</p>\n        <h3>Work Experience</h3>\n        <p>").concat(workExperience, "</p>\n        <h3>Skills</h3>\n        <ul>\n            ").concat(skills.map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); }).join(''), "\n        </ul>\n    ");
    // Append the generated resume HTML to the output section
    resumeOutput.innerHTML = resumeHTML;
}
// Attach the event listener to the form
form.addEventListener('submit', generateResume);
