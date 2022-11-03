function check() {
    let userName = document.getElementById("userName").value;
    let surname = document.getElementById("surname").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let passLength = document.getElementById("password").value.length;
    let passwordConf = document.getElementById("passwordConf").value;

    if (userName == '') {
        alert('Поле "Имя" не заполнено')
    } else if (surname == '') {
        alert('Поле "Фамилия" не заполнено')
    } else if (email == '') {
        alert('Поле "Email" не заполнено')
    } else if (passLength < 7) {
        alert('Пароль должен содержать больше 6 символов')
    } else if (passwordConf != password) {
        alert('Введенные пароли не совпадают')
    } else
        alert("Добро пожаловать!");
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