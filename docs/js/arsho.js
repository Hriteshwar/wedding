function passwordCheck(){
    var password = prompt("Please enter the password.");
    if (password!=="mouli"){
        window.location="coming_soon/index.html";
    }
}

$(document).ready(function(){
    passwordCheck();
})
