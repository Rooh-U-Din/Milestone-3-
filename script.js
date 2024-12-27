"use strict";
// Get references to the form
const form = document.getElementById('form');
const profilePictureInput = document.getElementById('profilePicture');
const resumeDisplayElement = document.getElementById('resume-display');
//
form.addEventListener('submit', (event) => {
    event.preventDefault(); //
    //collect value
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('number').value;
    const education = document.getElementById('education').value;
    const experience = document.getElementById('experience').value;
    const skills = document.getElementById('skills').value;
    //
    const profilePictureFile = profilePictureInput.files?.[0];
    const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';
    //
    const resumeHTML = `
    <h2><b>Resume</b></h2>
    <div style="border: 1px solid;"></div>
    ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture" style="width: 150px; height: 150px;">` : ''}
    <h3>Personal Information</h3>
    <p><b>Name:</b>${name}</p>
    <p><b>Email:</b>${email}</p>
    <p><b>Phone:</b>${phone}}</p>

    <h3>Education</h3>
    <p>${education}>
    

    <h3>Experience</h3>
    <p>${experience}>

    <h3>Skills</h3>
    <p>${skills}>
    `;
    //
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
});
//
//
function changeTheme(color) {
    const resumeDisplay = document.getElementById('resume-display');
    if (resumeDisplay) {
        // Change background color
        resumeDisplay.style.backgroundColor = color;
        // Change text color to white
        resumeDisplay.style.color = 'white';
    }
}
const themeOptions = document.querySelectorAll('.theme-option');
themeOptions.forEach((option) => {
    option.addEventListener('click', () => {
        const color = option.style.backgroundColor;
        changeTheme(color);
    });
});
