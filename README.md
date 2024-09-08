Dynamic Resume Builder
This project is a Dynamic Resume Builder built using HTML, CSS, and TypeScript. It allows users to fill out a form with their personal information, education, work experience, and skills. Upon form submission, the resume is dynamically generated and displayed on the same page.

Features
Dynamic Resume Generation:
Users can input personal information, education, work experience, and skills via a form.
The resume is dynamically generated based on the user's input.
Interactive Form:
Form validation for required fields (Name, Email, Education, Work Experience, Skills).
TypeScript Functionality:
TypeScript is used to capture the form data, process it, and generate the resume in the browser dynamically.
Technologies Used
HTML: To structure the form and resume layout.
CSS: For basic styling and layout management.
TypeScript: To handle form submission and dynamically generate the resume.
Setup Instructions
Clone the Repository
Clone this repository to your local machine:

git clone <repository-url>
Navigate to the Project Folder
Go to the project directory:

cd dynamic-resume-builder
Compile TypeScript to JavaScript
Use the TypeScript compiler to compile the script.ts into JavaScript:

tsc script.ts
Open index.html in a Browser
Once compiled, open the index.html file in your browser to see the form and dynamically generated resume.

Project Structure
.
├── index.html        # The main HTML file containing the form and resume layout
├── styles.css        # CSS file for styling the form and resume
├── script.ts         # TypeScript file for generating dynamic resume
├── script.js         # Compiled JavaScript file generated from TypeScript
└── README.md         # Project documentation
Usage
Form Input: Fill in the form fields for:

Personal Information (Name, Email, Profile Picture URL)
Education
Work Experience
Skills (Comma-separated)
Generate Resume: Once the form is filled, click the "Generate Resume" button. The resume will be generated dynamically below the form.

Example:

Name: Muhammad Shayan Ahmed
Email: example@example.com
Profile Picture: (URL of the profile picture)
Education: Bachelors in Computer Science
Work Experience: Frontend Developer at ABC Corp
Skills: HTML, CSS, TypeScript, React
How It Works
When the user submits the form, the generateResume function is triggered via a submit event listener on the form.
The function captures the form data, processes it, and then dynamically updates the HTML within the #resume-output section using the captured values.

TypeScript Functionality (script.ts):

// Get references to the form and output section
const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeOutput = document.getElementById('resume-output') as HTMLElement;

// Function to generate resume dynamically
function generateResume(event: Event): void {
    event.preventDefault();  // Prevent form submission from reloading the page

    // Capture form data
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const profilePic = (document.getElementById('profile-pic') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLInputElement).value;
    const workExperience = (document.getElementById('work-experience') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',');

    // Clear the previous resume if it exists
    resumeOutput.innerHTML = '';

    // Create dynamic resume HTML
    const resumeHTML = `
        <h2>${name}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <img src="${profilePic}" alt="Profile Picture" width="100" height="100" />
        <h3>Education</h3>
        <p>${education}</p>

       
        <h3>Work Experience</h3>
        <p>${workExperience}</p>
        <h3>Skills</h3>
        <ul>
            ${skills.map(skill => `<li>${skill.trim()}</li>`).join('')}
        </ul>
    `;

    // Append the generated resume HTML to the output section
    resumeOutput.innerHTML = resumeHTML;
}

// Attach the event listener to the form
form.addEventListener('submit', generateResume);
Explanation:
The generateResume function captures the form input values for name, email, profile picture, education, work experience, and skills.
It then dynamically generates an HTML structure using template literals to display this data.
The generated HTML is injected into the #resume-output section of the page.
Customization
You can easily modify the form and resume template to add or remove sections:

Add more fields: To capture additional user details, simply add new form inputs and modify the generateResume function to handle the new fields.
Update styling: Modify the styles.css file to customize the appearance of the form and the generated resume.
Contributing
Feel free to fork this repository and submit pull requests with improvements or additional features.

License
This project is open-source and available under the MIT License.

Contact
For any questions or feedback, feel free to contact Muhammad Shayan Ahmed.

This README.md provides detailed instructions for setting up, using, and customizing the Dynamic Resume Builder project.
