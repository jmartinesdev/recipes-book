function login(){
    var login = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if(login == 'admin' && password == 'admin')
        alert('sucess');
}