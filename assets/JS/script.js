var form = document.getElementById('form')
var username = document.getElementById('username')
var cpf = document.getElementById('cpf')
var password = document.getElementById('password')
var email = document.getElementById('email')
var phone = document.getElementById('phone')


form.addEventListener('submit', (a) => {
    a.preventDefault()

    Inputs()
})

function Inputs() {

    let usernameValue = username.value.trim()
    let emailValue = email.value.trim()
    let phoneValue = phone.value.trim()
    let cpfValue = cpf.value.trim()
    let passwordValue = password.value.trim()



    if (usernameValue === '') {

        trataError(username, 'Preencha este campo')
    } else {

        trataOK(username, 'Ok!')
    }

    if (emailValue === '') {

        trataError(email, 'Preencha este campo')
    } else if (!IsEmail(emailValue)) {
        trataError(email, 'Email inválido')
    } else {

        trataOK(email, 'Ok!')
    }

    if (phoneValue === '') {

        trataError(phone, 'Preencha este campo')
    } else {

        trataOK(phone, 'Ok!')
    }

    if (cpfValue === '') {

        trataError(cpf, 'Preencha este campo')
    } else {

        trataOK(cpf, 'Ok!')
    }

    if (passwordValue === '') {

        trataError(password, 'Preencha este campo')

    } else if (passwordValue.length < 8) {
        trataError(password, 'A senha deve conter mais que 8 caracteres')
    } else if (passwordValue.lenght > 7) {
        trataError(password)
    } else {

        trataOK(password, 'ok')
        botaook()

    }

}

function trataError(info, messagem) {
    let formulario = info.parentElement;
    let small = formulario.querySelector('small')

    small.innerText = messagem

    formulario.className = 'formulario recusado'
}

function trataOK(info, messagem) {
    let formulario = info.parentElement;
    let smallSuccess = formulario.querySelector('small')

    smallSuccess.innerText = messagem

    formulario.className = 'formulario ok'
}

function IsEmail(email) {
    let emailRegex = /^([a-zA-Z][^<>\"!@[\]#$%¨&*()~^:;ç,\-´`=+{}º\|/\\?]{1,})@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return emailRegex.test(String(email).toLowerCase())
}

function botaook(){

}