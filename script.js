document.addEventListener("DOMContentLoaded", function(){
    const loginForm = document.getElementById('loginForm');
    
    loginForm.addEventListener('submit', function (event){
        event.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        console.log('E-mail:' + email);
        console.log('Password:' + password)
    });
});