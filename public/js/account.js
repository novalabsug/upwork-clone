// handle form switch
const signupFormBtn = document.querySelector('.form-btns-container .signup-form-btn');
const signinFormBtn = document.querySelector('.form-btns-container .signin-form-btn');
const signinForm = document.querySelector('form.signin-form');
const signupForm = document.querySelector('form.signup-form');

// listen to form btn click
signinFormBtn.addEventListener('click', () => {
    if (signinForm.className !== "signin-form show") {
        signinForm.classList.add('show');
        signupForm.classList.remove('show');
        signinFormBtn.classList.add('active');
        signupFormBtn.classList.remove('active');
    }
});

signupFormBtn.addEventListener('click', () => {
    if (signupForm.className !== "signup-form show") {
        signupForm.classList.add('show');
        signinForm.classList.remove('show');
        signupFormBtn.classList.add('active');
        signinFormBtn.classList.remove('active');
    }
});

// handle show password
let psdInput = document.querySelectorAll('form .input input#password');
let psdVisibility = false;

psdInput.forEach(input => {
    let psdVisibilityBtn = input.parentElement.querySelector('.lni.lni-eye');

    psdVisibilityBtn.addEventListener('click', () => {
        let psdLock = psdVisibilityBtn.parentElement.querySelector('#lock-icon');
        if (psdVisibility === false) {
            psdLock.className = "lni lni-unlock";
            input.setAttribute('type', 'text');
            psdVisibility = true;
        } else {
            psdLock.className = "lni lni-lock";
            input.setAttribute('type', 'password');
            psdVisibility = false;
        }
    });
});