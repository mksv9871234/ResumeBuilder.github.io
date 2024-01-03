
let toolsCounter = 0; // Counter for generating unique IDs

function addTools() {
    toolsCounter++;

    let newNode = document.createElement("input");
    newNode.id = 'ReciveToos_' + toolsCounter; // Unique ID for each input
    newNode.classList.add("mt-2");
    newNode.setAttribute('placeholder', 'Enter here');

    let form = document.getElementById("form");
    form.insertBefore(newNode, document.getElementById("toolsAddBtn"));
}
function addlanguage() {
    toolsCounter++;
    let newNode = document.createElement("input");
    newNode.id = 'input_lan_' + toolsCounter; // Unique ID for each input
    let ExaLanguage = document.getElementById("Exa_Language");
    newNode.classList.add("mt-2");
    newNode.setAttribute('placeholder', 'Enter here');
    let form = document.getElementById("form");
    form.insertBefore(newNode, ExaLanguage)
}
function addhobbie() {
    toolsCounter++;
    let newNode = document.createElement("input");
    newNode.id = 'input_hobbie_' + toolsCounter; // Unique ID for each input
    let ExaHobbies = document.getElementById("Exa_Hobbies");
    newNode.classList.add("mt-2");
    newNode.setAttribute('placeholder', 'Enter here');
    let form = document.getElementById("form");
    form.insertBefore(newNode, ExaHobbies)
}
function addExperience() {
    toolsCounter++;
    let newNode = document.createElement("textarea");
    newNode.id = 'Experience_' + toolsCounter; // Unique ID for each input
    let ExaExperience = document.getElementById("Exa_Experience");
    newNode.classList.add("mt-2");
    newNode.setAttribute('placeholder', 'Enter here');
    newNode.style.height = '100px'
    let form = document.getElementById("ProForm");
    form.insertBefore(newNode, ExaExperience)
}
function addDegree() {
    toolsCounter++;
    let newNode = document.createElement("input");
    newNode.id = 'Education_' + toolsCounter; // Unique ID for each input
    let Exadigree = document.getElementById("Exa_digree");
    newNode.classList.add("mt-2");
    newNode.setAttribute('placeholder', 'Enter here');
    let form = document.getElementById("ProForm");
    form.insertBefore(newNode, Exadigree)
}
function addCertificates() {
    toolsCounter++;
    let newNode = document.createElement("input");
    newNode.id = 'Certificates_' + toolsCounter; // Unique ID for each input
    let Exacertificates = document.getElementById("Exa_certificates");
    newNode.classList.add("mt-2");
    newNode.setAttribute('placeholder', 'Enter here');
    let form = document.getElementById("ProForm");
    form.insertBefore(newNode, Exacertificates)
}
function addProudOf() {
    toolsCounter++;
    let newNode = document.createElement("input");
    newNode.id = 'Proud_of_' + toolsCounter; // Unique ID for each input
    let Exa_Proud_of = document.getElementById("Exa_Proud_of");
    newNode.classList.add("mt-2");
    newNode.setAttribute('placeholder', 'Enter here');
    let form = document.getElementById("ProForm");
    form.insertBefore(newNode, Exa_Proud_of)
}



function ResumeCreater() {


  
     

    let nameFiend = document.getElementById("NameField");
    let professionFiend = document.getElementById("ProfessionFiend");
    let ImageField = document.getElementById("ImageField");
    let AddressField = document.getElementById("AddressField");
    let numberField = document.getElementById("numberField");
    let EmailField = document.getElementById("EmailField");
    let WebsiteField = document.getElementById("WebsiteField");
    let facebookField = document.getElementById("facebookField")
    let instagramField = document.getElementById("instagramField")
    let twitterFIeld = document.getElementById("twitterFIeld")
    let linkedinField = document.getElementById("linkedinField")
    let ToolsField = document.getElementById("ToolsField");
    let language = document.getElementById("language");
    let HobbiesField = document.getElementById("HobbiesField");
    let profileField = document.getElementById("profileField");
    let Experience_titleField = document.getElementById("Experience_titleField");
    let ExperienceField = document.getElementById("ExperienceField");
    let EducationField = document.getElementById("EducationField");
    let CertificatesField = document.getElementById("CertificatesField");
    let ProudMostField = document.getElementById("ProudMostField");

    let RecieveName = document.getElementById("ReciveName").value;
    let profession = document.getElementById("profession").value;
    let ReciveToos = document.getElementById("ReciveToos").value;
    let address = document.getElementById("address").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let webiste = document.getElementById("website").value;
    let facebook = document.getElementById("facebook").value;
    let instagram = document.getElementById("instagram").value;
    let twitter = document.getElementById("twitter").value;
    let linkedin = document.getElementById("linkedin").value;
    let input_lan = document.getElementById("input_lan").value;
    let input_hobbie = document.getElementById("input_hobbie").value;
    let profile = document.getElementById("profile").value;
    let Experience_title = document.getElementById("Experience_title").value;
    let Experience = document.getElementById("Experience").value;
    let Education = document.getElementById("Education").value;
    let Certificates = document.getElementById("Certificates").value;
    let Proud_of = document.getElementById("Proud_of").value;

    // Clear previous content
    nameFiend.innerHTML = '';
    professionFiend.innerHTML = '';
    AddressField.innerHTML = '';
    numberField.innerHTML = '';
    EmailField.innerHTML = '';
    WebsiteField.innerHTML = '';
    facebookField.innerHTML = '';
    instagramField.innerHTML = '';
    twitterFIeld.innerHTML = '';
    linkedinField.innerHTML = '';
    profileField.innerHTML = '';
    ToolsField.innerHTML = '';
    language.innerHTML = '';
    HobbiesField.innerHTML = '';
    ExperienceField.innerHTML = '';
    EducationField.innerHTML = '';
    CertificatesField.innerHTML = '';
    ProudMostField.innerHTML = '';

    nameFiend.innerHTML = RecieveName;
    professionFiend.innerHTML = profession;
    AddressField.innerHTML = address;
    numberField.innerHTML = phone;
    EmailField.innerHTML = email;
    WebsiteField.innerHTML = webiste;
    facebookField.innerHTML = facebook;
    instagramField.innerHTML = instagram;
    twitterFIeld.innerHTML = twitter;
    linkedinField.innerHTML = linkedin;
    profileField.innerHTML = profile;
    Experience_titleField.innerHTML = Experience_title;
    ToolsField.innerHTML += ReciveToos;
    language.innerHTML += input_lan;
    HobbiesField.innerHTML += input_hobbie;
    ExperienceField.innerHTML += Experience;
    EducationField.innerHTML += Education;
    CertificatesField.innerHTML += Certificates;
    ProudMostField.innerHTML += Proud_of;

    for (let i = 1; i <= toolsCounter; i++) {
        let toolInput = document.getElementById('ReciveToos_' + i);

        if (toolInput) {
            let toolValue = toolInput.value.trim();
            if (toolValue !== '') {
                ToolsField.innerHTML += '<br>' + toolValue;
            }
        }
    }

    for (let i = 1; i <= toolsCounter; i++) {
        let toolInput = document.getElementById('input_lan_' + i);

        if (toolInput) {
            let toolValue = toolInput.value.trim();
            if (toolValue !== '') {
                language.innerHTML += '<br>' + toolValue;
            }
        }
    }

    for (let i = 1; i <= toolsCounter; i++) {
        let toolInput = document.getElementById('input_hobbie_' + i);

        if (toolInput) {
            let toolValue = toolInput.value.trim();
            if (toolValue !== '') {
                HobbiesField.innerHTML += '<br>' + toolValue;
            }
        }
    }

    for (let i = 1; i <= toolsCounter; i++) {
        let toolInput = document.getElementById('Experience_' + i);

        if (toolInput) {
            let toolValue = toolInput.value.trim();
            if (toolValue !== '') {
                ExperienceField.innerHTML += '<br>' + toolValue;
            }
        }
    }

    for (let i = 1; i <= toolsCounter; i++) {
        let toolInput = document.getElementById('Education_' + i);

        if (toolInput) {
            let toolValue = toolInput.value.trim();
            if (toolValue !== '') {
                EducationField.innerHTML += '<br>' + toolValue;
            }
        }
    }

    for (let i = 1; i <= toolsCounter; i++) {
        let toolInput = document.getElementById('Certificates_' + i);

        if (toolInput) {
            let toolValue = toolInput.value.trim();
            if (toolValue !== '') {
                CertificatesField.innerHTML += '<br>' + toolValue;
            }
        }
    }

    for (let i = 1; i <= toolsCounter; i++) {
        let toolInput = document.getElementById('Proud_of_' + i);

        if (toolInput) {
            let toolValue = toolInput.value.trim();
            if (toolValue !== '') {
                ProudMostField.innerHTML += '<br>' + toolValue;
            }
        }
    }

  // Hide the resume builder section (optional)
  document.getElementById("Resume-builder").style.display = 'none';

  // Show the resume section
  document.getElementById("resume").style.display = 'block';
}


function printResume() {
    // Trigger the print dialog
    window.print();

    // Reset the visibility after printing
    document.getElementById("Resume-builder").style.display = 'block';
    document.getElementById("resume").style.display = 'none';
}


// function previewImage(input) {
  
// }


function checkImageSize(input) {
    var imagePreview = document.getElementById("imagePreview");
    var input = document.getElementById("ReciveImage");
    var errorMessage = document.getElementById("textImg");
    while (imagePreview.firstChild) {
    imagePreview.removeChild(imagePreview.firstChild);
    }
    // Check if a file is selected
    if (input.files && input.files[0]) {
        var img = new Image();

        img.onload = function () {
            // Check if width and height are the same
            if (img.width !== img.height) {
                // Display an error message
                errorMessage.innerHTML = "Error: Image width and height should be the same.";
                errorMessage.style.color = 'red';
                input.value = ""; // Clear the selected file
            } else {
                if (input.files && input.files[0]) {
                    var reader = new FileReader();
            
                    reader.onload = function (e) {
                        // Create an img element and set its source to the preview URL
                        var img = document.createElement("img");
                        img.src = e.target.result;
                        img.style.width = "200px"; // Set a width for the preview image
                        img.style.height = "200px"; // Set a height for the preview image
                        imagePreview.appendChild(img);
            
                        // Set the image source for the resume section
                        var resumeImage = document.getElementById("imagePreview");
                        resumeImage.src = e.target.result;
                        resumeImage.style.width = "200px"; // Set a width for the resume image
                        resumeImage.style.height = "200px"; // Set a height for the resume image
                    };
            
                    // Read the selected file as a data URL
                    reader.readAsDataURL(input.files[0]);
                }
                errorMessage.innerHTML = "Image Uploded Successfully !"
                errorMessage.style.color = 'green';
            }
               
        };
        // Read the selected file as a data URL
        var reader = new FileReader();
        reader.onload = function (e) {
            img.src = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
    }

}






