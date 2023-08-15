document.getElementById("btn-submit").addEventListener('click',function(){
    const emailField = document.getElementById("user-email").value
    const passwordField = document.getElementById("user-password").value
    if(emailField === 'mitul@gmail.com' && passwordField === 'secret'){
        window.location.href = 'bank.html'
    }
    else{
        alert("please enter valid input")
    }
})