// configurando posição do separator
document.getElementById("buttonPosition").addEventListener("click", function(){
    let separator = document.querySelector(".separator")
    separator.style.animation = 'left 1s'
    setTimeout(() => {
        separator.classList.add("left")
    }, 1000);
})

document.getElementById("buttonPositionUp").addEventListener("click", function(){
    let separator = document.querySelector(".separator")
    separator.style.animation = 'right 1s'
    setTimeout(() => {
        separator.classList.remove("left")
    }, 1000);
})
// configurando posição do separator

const emailSignUp = document.querySelector("#emailSignUp")
const passwordSignUp = document.querySelector("#passwordSignUp")
const passwordConfirmSignUp = document.querySelector("#confirmPasswordSignUp")
const buttonSignUp = document.querySelector("#buttonSignUp")



function cadastrar(emailUp, passwordUp, passwordConfirmUp) {
    emailUp = emailSignUp.value
    passwordUp = passwordSignUp.value
    passwordConfirmUp = passwordConfirmSignUp.value

    if (passwordUp !== passwordConfirmUp) {
        alert("As senhas inseridas são diferentes")
        return
    }
    if (!emailUp || !passwordUp) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    var user = {
        "email": emailSignUp.value,
        "password": passwordSignUp.value,
    }
    salvarDb(user)
}

let users = []
function salvarDb(user){

    if(localStorage.getItem("usuarios")){
        users = JSON.parse(localStorage.getItem("usuarios"))  
    } 

    
    // Verifica se o usuário já está cadastrado
    let emailExists = users.some(existingUser => existingUser.email === user.email);
    
    if (emailExists) {
        alert("JA CADASTRADO");
        return; // Não continua com a adição do usuário
    }
    
    users.push(user)
    localStorage.setItem("usuarios", JSON.stringify(users))
}

document.getElementById("signIn").addEventListener("click", function logar() {
    var inputEmail = document.getElementById("email")
    var inputPassword = document.getElementById("password") 
})
 








