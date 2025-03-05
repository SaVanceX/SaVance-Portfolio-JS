// Initializing the EmailJs libary
(function() {
  emailjs.init("Z62uCpJieU87vIBMd");
})();

const form = document.getElementById('contact-form')
const userName = document.getElementById('username')
const userEmail = document.getElementById('user_email')
const userMessage = document.getElementById('user_message')
const messageContainer = document.querySelector('.message-container');
const message = document.querySelector('.message-container');


isValid = form.checkVisibility();

const templateParams = {
  name: userName.value,
  email: userEmail.value,
  message: userMessage.value,
}


function processFormData(e) {
  e.preventDefault()

  const templateParams = {
    "to_name": "SaVance",
    "from_name": userName.value,
    "from_email": userEmail.value,
    message: userMessage.value,
  }


  if(isValid === true) {
  emailjs.send('service_ba3rdvd', 'template_xhzsd92', templateParams)
  .then(function(response){
      message.innerText ="Thank you very much I will reply to you as soon as possible!";
      message.style.color = 'green';
      messageContainer.style.borderColor = 'white';
      console.log('SUCCESS', response.status, response.text);
  }, function(error){
      console.log("FAILED", error);
  })
  }
}


 //  Add eventlisteners
 form.addEventListener('submit', processFormData);


/* --------------- NAV JS ------------- */

const nav = document.querySelector('nav')


 window.addEventListener('scroll', function() {

  if(this.window.scrollY > 24) {
    nav.classList.add('fixed-nav')
  } else {
    nav.classList.remove('fixed-nav')
  }

 })


/* ---- HEADER JS ----- */

const quotes = [
  '"Remember to give yourself some grace"',
  '"Mistakes are proof that you are trying"',
  '"Today is another chance to get better"',
  '"Opportunities don\'t happen, you create them"'
]

// Generate a random index between 0 and the length of the array
const randomIndex = Math.floor(Math.random() * quotes.length);

const h1 = document.querySelector('.hero-title')

h1.innerText = quotes[randomIndex]