let password = document.querySelector('#password')
let image = document.querySelector('.btn')

function alfa() {
    if(password.type === 'password'){
        password.type = 'text'
    }else{
        password.type = 'password'
}
}
image.addEventListener('click', alfa)