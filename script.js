// Initializing the EmailJs libary
(function() {
  emailjs.init("Z62uCpJieU87vIBMd");
})();

const form = document.getElementById('contact-form')
const userName = document.getElementById('name')
const userEmail = document.getElementById('email')
const userMessage = document.getElementById('message')
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');


let isValid = false;

function validateForm() {
  // Using constraint api
  isValid = form.checkVisibility();

  // Style main message for an error
  if(isValid === false) {
    message.textContent = 'Please fill out all the fields'
    message.style.color = 'red'
    messageContainer.style.borderColor = 'red';
  }else if(isValid === true) {
    message.innerText ="Your message is being sent";
    message.style.color = 'Orange';
    messageContainer.style.borderColor = 'Orange';
  }
}

const templateParams = {
  name: userName,
  email: userEmail,
  message: userMessage,
}

function processFormData(e) {
  console.log('in process form function')
  e.preventDefault()
  
  // Validating form 
  validateForm();

  // Sending the formdata
  if(isValid === true) {
    console.log('line 46')
  // emailjs.send('service_ba3rdvd', 'template_xhzsd92', templateParams)
  // .then(function(response){
  //     message.innerText ="Thank you very much I will reply to you as soon as possible!";
  //     message.style.color = 'green';
  //     messageContainer.style.borderColor = 'green';
  //     console.log('SUCCESS', response.status, response.text);
  // }, function(error){
  //     console.log("FAILED", error);
  // })
  }
}


 //  Add eventlisteners
 form.addEventListener('submit', processFormData);