// algumas variaveis para pegar valores dos inputs
const emailSignUp = document.querySelector("#emailSignUp")
const passwordSignUp = document.querySelector("#passwordSignUp")
const passwordConfirmSignUp = document.querySelector("#confirmPasswordSignUp")
const buttonSignUp = document.querySelector("#buttonSignUp")
const nameSignUp = document.querySelector("#name")


let labelName = document.querySelector("#labelName")
// let labelEmail = document.querySelector("#labelEmail")
let labelPassword = document.querySelector("#labelPassword")
let labelConfirmPassword = document.querySelector("#labelConfirmPassword")

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


// se a senha tiver menos de 8 caracteres
nameSignUp.addEventListener("keyup", () =>{
    if (nameSignUp.value.length < 4) {
        labelName.innerHTML = '*Insira seu nome completo ou um nome maior'
        labelName.style.color = 'red'
        return;
    } else {
        labelName.innerHTML = 'Nome Completo:'
        labelName.style.color = 'green'
    }
})

// se a senha tiver menos de 8 caracteres
passwordSignUp.addEventListener("keyup", () =>{
    if (passwordSignUp.value.length < 8) {
        labelPassword.innerHTML = '*Sua senha precisa ter 8 ou mais caracteres'
        labelPassword.style.color = 'red'
        return;
    } else {
        labelPassword.innerHTML = 'Senha:'
        labelPassword.style.color = 'green'
    }
})

// se as senhas não forem iguais
passwordConfirmSignUp.addEventListener("keyup", () =>{
    if (passwordConfirmSignUp.value != passwordSignUp.value) {
        labelConfirmPassword.innerHTML = '*As senha inseridas se diferem'
        labelConfirmPassword.style.color = 'red'
        return;
    } else {
        labelConfirmPassword.innerHTML = 'Confirme sua senha:'
        labelConfirmPassword.style.color = 'green'
    }
})


//função de cadastro
function cadastrar(emailUp, passwordUp, passwordConfirmUp) {
    emailUp = emailSignUp.value
    passwordUp = passwordSignUp.value
    passwordConfirmUp = passwordConfirmSignUp.value

    if (!emailUp || !passwordUp || !nameSignUp.value || !passwordConfirmUp) {
        let msg = document.querySelector("#msgCadastro")
        msg.innerHTML = "Por favor, preencha todos os campos corretamente"
        msg.style.color = "red"
        msg.style.fontWeight = '600'
        return;
    }

    var user = {
        "name": nameSignUp.value,
        "email": emailSignUp.value,
        "password": passwordSignUp.value,
    }
    salvarDb(user)
}

function getDb() {
    if(localStorage.getItem("usuarios")){
        const users = JSON.parse(localStorage.getItem("usuarios"))
        return users
    } else{
        return []
    }
}

function salvarDb(user){
    let users = getDb();

    // Verifica se o usuário já está cadastrado
    let emailExists = users.some(existingUser => existingUser.email === user.email);
    
    // se o email já existir no banco de dados
    if (emailExists) { 
        var msg = document.querySelector("#msgCadastro")
        msg.innerHTML = "Usuário já cadastrado!"
        msg.style.color = "red"
        msg.style.fontWeight = '600'
        return; // Não continua com a adição do usuário
    } else {
        var msg = document.querySelector("#msgCadastro")
        msg.innerHTML = "Cadastrando usuário, aguarde..."
        msg.style.color = "green"
        msg.style.fontWeight = '600'

        setTimeout(() => { // mensagem de sucesso no cadastro
            msg.innerHTML = "Usuário cadastro com SUCESSO!"
            msg.style.color = "green"
            msg.style.fontWeight = '600'

            setTimeout(() => { //executa animação após a confirmação do cadastro
                let separator = document.querySelector(".separator")
                separator.style.animation = 'right 1s'
                setTimeout(() => { // adicionar a classe de acordo com o tempo que a animção acontece
                separator.classList.remove("left")
                }, 1000);
            }, 1000); //executa animação após a confirmação do cadastro
        }, 1500); // mensagem de sucesso no cadastro

        setTimeout(() => { // retorna a frase a seu estilo padrão
            msg.innerHTML = "e aproveite nossos serviços gratuitamente"
            msg.style.color = "black"
            msg.style.fontWeight = '600'
        }, 4500);

        emailSignUp.value = ''
        passwordSignUp.value = ''
        passwordConfirmSignUp.value = ''
        nameSignUp.value = ''
    }
    
    users.push(user)
    localStorage.setItem("usuarios", JSON.stringify(users))
}

document.getElementById("signIn").addEventListener("click", function logar() {
    let emailInput = document.getElementById("email").value;
    let passwordInput = document.getElementById("password").value;
    
    //Função para validação de login
    let userValid = {
        name: "",
        email: '',
        password: '',
     }

    let usuarios = getDb() ;

    // variavel para guardar o login fornecido caso ele exista no db

    usuarios.forEach((user) => { 
        // se o login for sucesso
        if (emailInput == user.email && passwordInput == user.password) {
            userValid = {
                name: user.name,
                email: user.email,
                password: user.password,
            }
        }
    });
    var valid = true
    if (passwordInput == '' || emailInput == ''){
        valid = false
        alert("Preencha todos os campos!")
    }
    
    // se o email e senha fornecidas forem compativeis
    if(emailInput == userValid.email && passwordInput == userValid.password && valid == true) {
        let msgLogin = document.querySelector("#msgLogin")
        document.getElementById("loading").style.display = 'block'
        msgLogin.innerHTML = `Seja bem vindo ${userValid.name.toUpperCase()}! Por favor, aguarde...`
        msgLogin.style.color = "green"
        msgLogin.style.fontWeight = '600'
        setTimeout(() => {
            window.location.href = "../Home/index.html" // transportar usuario para a home do site
        }, 4000);
    } else if (valid == true){ // se não forem compativeis
        let msgLogin = document.querySelector("#msgLogin")
        msgLogin.innerHTML = "Email e Senha incorretos ou inexistentes!"
        msgLogin.style.color = "red"
        msgLogin.style.fontWeight = '600'
    }
});











