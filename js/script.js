const urlRegister = 'http://localhost:3000/register';
const urlLogin = 'http://localhost:3000/login';

document.addEventListener('DOMContentLoaded', () => {
    if (window.location.href.includes('register')) {
        register()
    } else if (window.location.href.includes('login')) {
        login()
    }
})

function register() {
    document.querySelector('#register-btn').addEventListener('click', () => {
        fetch(urlRegister, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: document.querySelector('#exampleInputEmail1').value,
                password: document.querySelector('#exampleInputPassword1').value
            })
        }).then(response => response.json())
            .then(json => console.log(json))
            .catch(err => console.log(err))
    })
}

function login() {
    document.querySelector('#login-btn').addEventListener('click', () => {
        fetch(urlLogin, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: document.querySelector('#exampleInputEmail1').value,
                password: document.querySelector('#exampleInputPassword1').value
            })
        }).then(response => response.json())
            .then(json => {console.log(json)
            if (json.accessToken) {
                document.querySelector('h1').innerText = 'Bentornato';
                document.querySelector('.loginNav').innerHTML = `<i class="bi bi-person-check me-2 fs-4"></i>Logout`;
                document.querySelector('.loginNav').classList.remove("btn", "btn-outline-light");
                document.querySelector('.loginNav').classList.add("btn", "btn-outline-success");
                document.querySelector('#exampleInputEmail1').value = '';
                document.querySelector('#exampleInputPassword1').value = '';
                alert('Login effettuato')
            } else {
                alert('Credenziali errate')
            }
            })
            .catch(err => console.log(err))
    })
}

//exemple@ex.com - 12345