
let errors = [];

function checkAll() {
    validateText();
    validateEmail();
    validatePass();

    document.getElementById('errorsInfo').style.color = 'black';
    document.getElementById('errorsInfo').innerHTML = errors.join('!<br>');
    
    if (errors.length === 0) {
        document.getElementById('errorsInfo').style.color = 'green';
        document.getElementById('errorsInfo').innerHTML = 'Сохранено!';
    }

    errors = [];
}

function checkValidity(input) {
    let validity = input.validity;

    if (validity.valueMissing) {
        errors.push('Поле ' + input.placeholder + ' не заполнено');
    }
}

function validateText() {

    let inputs = document.querySelectorAll('input[type=text]');
    for (let input of inputs) {
        checkValidity(input);
    }
}


function validateEmail() {
    let email = document.getElementById("email").value;
    let mailFormat = /(\<|^)[\w\d._%+-]+@(?:[\w\d-]+\.)+(\w{2,})(\>|$)/i;
    if (email.match(mailFormat)) {
        return (email);
    } else {
        errors.push("Ваш адрес электронной почты введен неверно");
    }
}

function validatePass() {
    let password = document.getElementById("password").value;
    let passwordConf = document.getElementById("passwordConf").value;
    let passLength = document.getElementById("password").value.length;
    let passFormat = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

    if (passLength < 7) {
        errors.push('Пароль должен содержать больше 6 символов')
    } else if (passwordConf !== password) {
        errors.push('Введенные пароли не совпадают');
    } else if (password.match(passFormat)) {
        return (password);
    } else {
        errors.push("Слишком лёгкий пароль");
    }
}

function showPass() {
    let pass = document.getElementById("password");
    let passConf = document.getElementById("passwordConf");


    if (pass.type === "password") {
        pass.type = "text";
        passConf.type = "text";
    } else {
        pass.type = "password";
        passConf.type = "password";
    }
}