// get DOM elements
const emailElement = document.getElementById('user-email');
const emailButton = document.getElementById('btn-email');
const emailError = document.getElementById('email-error-message');
const emailInvalid = document.getElementById('email-invalid-alert');

const playButton = document.getElementById('play-button');

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
    emailInvalid.classList.add('d-none');

    // read user input
    const userEmail = emailElement.value.trim();

    // validation
    if (!userEmail) {
        emailElement.classList.add('is-invalid');
        emailError.style.display = 'block';
        playButton.classList.add('d-none');
        return;
    }

    let isAllowed;
    let numberOfIteration = 0;

    /* 
    FOR cicle exit conditions:
        - if a match is found we exit immediatly
        - if a match was not found and we iterated throu all the array length
     */
    for (let i = 0; !isAllowed && i < allowedEmails.length; i++) {

        numberOfIteration++;

        if (userEmail === allowedEmails[i]) isAllowed = true;

    }

    // console log the number of iterations for debug purposes
    console.log('Number of iterations: ' + numberOfIteration);

    // if email address is allowed show the play button;
    // otherwise show the 'not authorized' alert and hide the button if it was on display
    if (isAllowed) {

        playButton.classList.remove('d-none');

    } else {

        playButton.classList.add('d-none');
        emailInvalid.classList.remove('d-none');

    }

})
