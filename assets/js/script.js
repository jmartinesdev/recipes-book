const form = document.querySelector('form')
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    if(emailInput.value === '') {
        alert('Please, e-mail field is empty.')
        return;
    }

    if(passwordInput.value === '') {
        alert('Please, password field is empty.')
        return;
    }

    if(!validatePassword(passwordInput.value, 8)) {
        alert('The password must be at least 8 characters.')
        return;
    }

    form.submit();
});

function validatePassword(password, minDig) {
    return password.length >= minDig;
}