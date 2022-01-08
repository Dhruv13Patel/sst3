function Validation(inputText, password) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!inputText.value.match(mailformat)) {
        alert("Invalid email address!");
        document.loginForm.email.focus();
        return false;
    }

    var passformat = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[@])/;
    if (password.value.match(passformat)) {
        window.location.href = 'dashboard.html';
            return false;
    } 
    else {
        alert("Password Pattern dosen't match! only @ is allowed and One Upper case one lowercase and numarical values");
        document.loginForm.password.focus();
        return false;
    }

}

// function ValidateEmail(inputText) {
//     var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     if (inputText.value.match(mailformat)) {
//         alert("Valid email address!");
//         document.form1.text1.focus();
//         return true;
//     }
//     else {
//         alert("You have entered an invalid email address!");
//         document.form1.text1.focus();
//         return false;
//     }
// }




// function CheckPassword()
// {
//     inputtxt = document.getElementById('password').value;
//     console.log(inputtxt,"Your pass");
//     // var decimal = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[@]).{8,}$/gm;
//     // if (inputtxt.value.match(decimal))
//     // {
//     //     window.open('dashboard.html');
//     //     return true;
//     // }
//     // else
//     // {
//     //     document.getElementById(id).innerHTML = "Write Correct password"
//     //     return false;
//     // }
// const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[@]).{8,}$/gm;
// const str = '';
// var re = new RegExp(regex);
// if(re.test(inputtxt))
// {
//     console.log("Valid");
//     alert("Valid email address!");
//         document.form1.text1.focus();
//         return true;
// }
// else{
//     console.log("invalid");
//     alert("Valid email address!");
//         document.form1.text1.focus();
//         return true;
// }
// }

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
