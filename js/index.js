// Достаём Логин пользователя:

const login = document.getElementById('login');

// create logic authorization

document.querySelector('button').addEventListener('click',function (event) {
    event.preventDefault();

    document.body.innerHTML = `<b>Профиль  пользователя - ${login.value}</b>`
})