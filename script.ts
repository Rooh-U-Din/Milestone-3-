// Get references to the form
const form =document.getElementById('form') as HTMLFormElement;
const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;
const resumeDisplayElement=document.getElementById('resume-display') as HTMLAreaElement;
//

form.addEventListener('submit',(event: Event)=>{
    event.preventDefault();//

    //collect value
    const name =(document.getElementById('name') as HTMLInputElement).value
    const email =(document.getElementById('email') as HTMLInputElement).value
    const phone =(document.getElementById('number') as HTMLInputElement).value
    const education =(document.getElementById('education') as HTMLInputElement).value
    const experience =(document.getElementById('experience') as HTMLInputElement).value
    const skills =(document.getElementById('skills') as HTMLInputElement).value
//
const profilePictureFile = profilePictureInput.files?.[0];
const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';

//
    const resumeHTML=`
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
    `

    //

    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    
})
//

//


function changeTheme(color: string): void {
    const resumeDisplay = document.getElementById('resume-display') as HTMLElement | null;
    if (resumeDisplay) {
        // Change background color
        resumeDisplay.style.backgroundColor = color;

        // Change text color to white
        resumeDisplay.style.color = 'white';
    }
}

const themeOptions = document.querySelectorAll('.theme-option') as NodeListOf<HTMLElement>;

themeOptions.forEach((option: HTMLElement) => {
    option.addEventListener('click', () => {
        const color = option.style.backgroundColor;
        changeTheme(color);
    });
});
