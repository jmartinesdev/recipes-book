const form = document.querySelector('form')
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    if(emailInput.value === '') {
        alert('Please, e-mail field is empty.')
        return;
    }

    if(validatePassword(passwordInput.value)) {
        alert('The password must be at least 8 characters.')
    }

    if(passwordInput.value === '') {
        alert('Please, password field is empty.')
        return;
    }

function validatePassword(password, minLength) {
    if(password.length >= minLength){
        return True
    }

    else{
        return False
    }
}    

    form.submit();
});