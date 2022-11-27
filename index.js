// Доработать форму регистрации из прошлых заданий, сделав для нее валидацию через JS.

let errors = [];


// function check() {
//     let userName = document.getElementById("userName").value;
//     let surname = document.getElementById("surname").value;
//     let email = document.getElementById("email").value;
//     let password = document.getElementById("password").value;
//     let passLength = document.getElementById("password").value.length;
//     let passwordConf = document.getElementById("passwordConf").value;

//     if (userName == '') {
//         alert('Поле "Имя" не заполнено')
//     } else if (surname == '') {
//         alert('Поле "Фамилия" не заполнено')
//     } else if (email == '') {
//         alert('Поле "Email" не заполнено')
//     } else if (passLength < 7) {
//         alert('Пароль должен содержать больше 6 символов')
//     } else if (passwordConf != password) {
//         alert('Введенные пароли не совпадают')
//     } else
//         alert("Добро пожаловать!");
// }


function checkValidity(input) {
    let validity = input.validity;
    if (validity.valueMissing) {
        error.push('Поле ' + input.placeholder + ' не заполнено');
    }
    if (validity.patternMismatch) {
        error.push('Неверный формат заполнения');
    }
    if (validity.rangeOverflow) {
        let max = getAttribute(input, 'max');
        error.push('Максимальное значение не может быть больше' + max);
    }
}

function checkAll() {
    errors = [];
    let inputs = document.querySelectorAll('input');

    for (let input of inputs) {
        checkValidity(input);
    }
    document.getElementById('errorsInfo').innerHTML = errors.join('.<br>');
}

function validateEmail() {
    let email = document.getElementById("email").value;
    let mailFormat = /(\<|^)[\w\d._%+-]+@(?:[\w\d-]+\.)+(\w{2,})(\>|$)/i;
    if (email.match(mailFormat)) {
        console.log(email);
    } else {
        console.log("Ваш адрес электронной почты введен неверно!");
    }
}

function validatePass() {
    let password = document.getElementById("password").value;
    let passFormat = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    if (password.match(passFormat)) {
        console.log(password);
    } else {
        console.log("Слишком лёгкий пароль!");
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