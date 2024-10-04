const loginForm = document.getElementById("loginForm")
const registerForm = document.getElementById("registerForm")

const errMessageEl = document.getElementById('errorDisplay')

const email = loginForm.elements['email']
const password = loginForm.elements['password']
const firstName = registerForm.elements['firstName']
const lastName = registerForm.elements['lastName']

loginForm.addEventListener('submit', validateLogin)

function validateLogin(e){
    e.preventDefault();
    const emailVal = validateEmail();
    if(emailVal === false){
        return
    }
    // if(emailVal === true){
    //     alert("You have successfully logged in.")
    //     continue
    // }
    if(emailVal === true){
        alert("You have successfully logged in.")
    
        setTimeout(() => {
            loginForm.submit()
        }, 3000)
    }
}

function validateEmail() {
    let emailVal = email.value.trim();

    if(emailVal === ''){
        return showErrMessage("The email must not be blank")
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailPattern.test(emailVal)){
        return showErrMessage("Please enter a valid email.")
    }

    return true
}



function showErrMessage(msg){
    errMessageEl.textContent = msg;
    errMessageEl.style.display = 'block'
    errMessageEl.style.marginTop = '25px'

    setTimeout(() => {
        errMessageEl.style.display = 'none'
    }, 4000);
}