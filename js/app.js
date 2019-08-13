//variables 
const sendBtn = document.getElementById('sendBtn'),
      email = document.getElementById('email'),
      subject = document.getElementById('subject'),
      message = document.getElementById('message'),
      emailForm = document.getElementById('email-form'),
      resetBtn = document.getElementById('resetBtn');


//eventListeners
eventListeners();

function eventListeners() {
    
    //when the page loads
    document.addEventListener('DOMContentLoaded', beginApp);

    //validating inputs of the form
    //blur event works perfectly for inputs tags of form element
    email.addEventListener('blur', validateForm);
    subject.addEventListener('blur', validateForm);
    message.addEventListener('blur', validateForm);

    //reseting the form
    resetBtn.addEventListener('click', resetForm);
    
    //submitting the form
    emailForm.addEventListener('submit', sendMail)
};


//functions
function beginApp() {

    // this disables the button when the page reloads
    sendBtn.disabled = true;
}

//validating the inputs of the messages to be sent
function validateForm () {
    let errors;

    //checking for length
    validateLength(this);

    //validate email
    if (this.type === 'email') {
        validateEmail(this);
    };

    errors = document.querySelectorAll('.error');

    //disabling the button
    if (email.value !== '' && subject.value !== '' && message.value !== '') {
        if (errors.length === 0) {
            sendBtn.disabled = false;
        }
    }
}

function validateLength(field) {
        
    //checking form 
    if (field.value.length > 0) {
        field.style.borderBottomColor = 'green';
        field.classList.remove('error')
    } else {
        // return console.log('error')
        field.style.borderBottomColor = 'red';
        field.classList.add('error')
    }
};

//validate email
function validateEmail(field) {
   
    let emailContent = field.value;
    
    if (emailContent.indexOf('@') !== -1) {
        // return console.log('seen')
        field.style.borderBottomColor = 'green';
        field.classList.remove('error')
    } else {
        // return console.log('error')
        field.style.borderBottomColor = 'red';
        field.classList.add('error')
    }
   
};

function sendMail(e) {
  e.preventDefault();
  
  const spinner = document.querySelector('#spinner');
  spinner.style.display = 'block';

  //attaching the second gif
  const mail = document.createElement('img');
  mail.src = './img/mail.gif';
  mail.style.display = 'block';

  //set time limit
  setTimeout(function () {
    spinner.style.display = 'none';

    //show mail after the spinner image
    document.querySelector('#loaders').appendChild(mail)

    setTimeout(function () {
        emailForm.reset();
        mail.remove();
    }, 5000)
  }, 4000)
};

function resetForm(e) {
    // e.preventDefault();

    emailForm.reset();

    // sendBtn.disabled = true;
};