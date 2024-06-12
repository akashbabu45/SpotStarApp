function login()
{
    var name = document.getElementById("name").value;
    var password = document.getElementById("password").value;
    
     if(name==null || name=='')
        {
           alert( "Name is Required")
        }
    else if(password.length < 8)
        {
            alert("Password must be 8 character")
        }
    else{
        window.open("./MainPage/welcome.html");
    }
}
