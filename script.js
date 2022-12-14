const button = document.getElementById("notifyme");

function validate() { 
    const mail = document.getElementById("email").value;
    const validation = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;
    const errorInput = document.getElementById("email");
    const errorMessage = document.getElementById("error-message");

    if(validation.test(mail)) {
        errorInput.style.borderColor = 'hsl(223, 100%, 88%)'
        errorMessage.style.display = 'none';
        button.innerHTML = 'Thank you'
        return true;
    } else {
        errorInput.style.borderColor = 'hsl(354, 100%, 66%)';
        errorMessage.style.display = 'block';
        return false
    }
}

button.addEventListener("click", validate);