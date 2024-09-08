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
