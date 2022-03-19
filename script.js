const loginBtn = document.getElementById('btn')
const userEmail = document.getElementById('user-email');
const userPassword = document.getElementById('user-password');

loginBtn.addEventListener('click', () => {
    if(userEmail.value == "Darkfam@gmail.com" && userPassword.value == "1234"){
       window.location.href = 'main.html'
    }
    else{
        alert("email : Darkfam@gmail.com; Password : 1234 ;")
    }
})