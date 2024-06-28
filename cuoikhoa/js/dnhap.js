let users = [];
let signInStatus = false;

function register() {
    let fname_input = document.getElementById("fname-input").value;
    let lname_input = document.getElementById("lname-input").value;
    let email_input = document.getElementById("email-input").value;
    let password_input = document.getElementById("password-input").value;

    let user = {
        fname: fname_input,
        lname: lname_input,
        email: email_input,
        password: password_input,
    };

    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
}

// let registerBtn = document.getElementById('register')
// registerBtn.addEventListener('click', (event) => {
//     event.stopPropagation()
//     register()
// })

function checkEmailLogin(mail1, mail2) {
    if (mail1 != mail2) {
        return false;
    }
    return true;
}

function checkPasswordLogin(pw1, pw2) {
    if (pw1 != pw2) {
        return false;
    }
    return true;
}

function checkUser(mail, pw) {
    for (i = 0; i < users.length; i++) {
        if (mail == JSON.parse(localStorage.getItem("users"))[i].email) {
            let user = JSON.parse(localStorage.getItem("users"))[i];
            if (checkPasswordLogin(pw, user.password) == true) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
}

function login() {
    let email_input = document.getElementById("email-login-input").value;
    let password_input = document.getElementById("password-login-input").value;
    let usersStorage = JSON.parse(localStorage.getItem("users"));
    for (let i = 0; i < usersStorage.length; i++) {
        if (
            checkEmailLogin(email_input, usersStorage[i].email) == true &&
            checkPasswordLogin(password_input, usersStorage[i].password) == true
        ) {
            alert("Login Successful!");
        } else {
            alert("Wrong Email or Password!");
        }
    }
}
