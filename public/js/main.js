// set current year
let year = 0;
const yearContainer = document.querySelector('footer .footer-copyright-container p span.year');

function setYear() {
    yearContainer.innerHTML = `${new Date().getFullYear().toString()}`
}

setYear();