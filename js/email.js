// get DOM elements
const emailElement = document.getElementById('user-email');
const emailButton = document.getElementById('btn-email');
const emailError = document.getElementById('email-error-message');
const emailInvalid = document.getElementById('email-invalid-alert');
const emailAlertButton = document.getElementById('alert-button');

// create allowed emails array
const allowedEmails = ['carloeusebi@boolean.it',
    'mariusminia@boolean.it',
    'marcobaroncini@boolean.it',
    'marcolancellotti@boolean.it'
];

emailButton.addEventListener('click', function () {

    // clean old errors
    emailElement.classList.remove('is-invalid');
    emailError.style.display = 'none';

    const userEmail = emailElement.value.trim();

    // validation
    if (!userEmail) {
        emailElement.classList.add('is-invalid');
        emailError.style.display = 'block';
        return;
    }
})
