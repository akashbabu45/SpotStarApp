var gen_otp = Math.floor(Math.random()*999999);
alert(gen_otp);
function otp_verify(){
    var user_otp = document.getElementById("user_otp").value;
    if ( gen_otp == user_otp) {
        window.open("updatePassword.html");
    }
    else{
        document.getElementById("error").innerHTML="Incorrect password";
    }
}
