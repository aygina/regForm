postButton.onclick = function (event) {
    event.preventDefault();

    let user = {
        name: document.getElementById("userName").value,
        surname: document.getElementById("surname").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    }

    fetch("https://httpbin.org/post",
    {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
    })
    .then(res => res.json())
    .then(user => {
        console.log(user);
    })
    .catch(error => console.log(error));
    console.log(user.name, user.surname, user.email, user.password);
}