// function myfunction() {
//     var email = document.getElementById("email").value;
//     var atpos = email.indexOf("@");
//     var dotpos = email.lastIndexOf(".");



//     if (email == "" || atpos < 1 || (dotpos - atpos < 2)) {
//         alert("Provide Valid Email Address");
//         return false;
//     }

//     var pass = document.getElementById("pass").value;
//     if (pass != "") {
//         if (pass.search(/[A-Z]/ < 0))
//         {
//             alert("Your password needs an uppser case letter");
//             return false;
//         }
//         else if (pass.search(/[0-9]/) < 0) 
//         {
//             alert("Your password needs a number");
//             return false;
//         }
//         else if (pass.search([!#$%^&*])) 
//         {
//             alert("Only @ is allowed");
//             return false;
//         }
//     }
// }
function ValidateEmail(inputText) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.value.match(mailformat)) {
        alert("Valid email address!");
        document.form1.text1.focus();
        return true;
    }
    else {
        alert("You have entered an invalid email address!");
        document.form1.text1.focus();
        return false;
    }
}

function CheckPassword(inputtxt) 
{
    var decimal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/;
    if (inputtxt.value.match(decimal)) 
    {
        window.open('dashboard.html');
        //location.href = "dashboard.html";
        return true;
    }
    else 
    {
        alert('Wrong...!')
        return false;
    }
} 

// function validate()
// {
//     var username = document.getElementById("username").value;
//     var password = document.getElementById("password").value;

//     if (username == "admin" && password == "SmartServTest@123")
//     {
//         window.open('dashboard.html');
//     }
//     else
//     {
//         alert("invalid");
//     }
// }
