function reg(){
    var name = document.getElementById('name').value;
    var user = document.getElementById('username').value;
    var pass = document.getElementById('password').value;
    var comp = document.getElementById('compassword').value;
    var mail = document.getElementById('email').value;
    var num = document.getElementById('number').value;
    var gen = document.getElementById('gend').value;
    var gender = document.getElementById('gender').value;
    var eye = document.getElementById('eye').value;


    var atp = mail.indexOf('@');
    var dot = mail.lastIndexOf('.');


    // function eye(){
    //     if (pass.type == "text")
    //         pass.type = "password";
    //     else
    //         pass.type = "text";
    // }
    // eye.addEventListener('click', togglePass);

    if (name === ""){
        alert('Full Name Required..');
        document.getElementById('name').style.borderColor = "red";
        return false;
    } else if (!isNaN(name)){
        alert('Numbers not Allowed..');
        document.getElementById('name').style.borderColor = "red";
        return false;
    } else if (name.search(/[0-9]/) !== -1){
        alert('Numbers not Allowed..');
        document.getElementById('name').style.borderColor = "red";
        return false;
    } else if (name.length < 7){
        alert('Fullnames Most Not Be Less Than Seven..');
        document.getElementById('name').style.borderColor = "red";
        return false;
    } else if (name.length > 25){
        alert('Fullnames Most Not Be More Than Twenty Five..');
        document.getElementById('name').style.borderColor = "red";
        return false;
    } else {
        document.getElementById('name').style.borderColor = "green";
    }


    if (user === ""){
        alert('Username Is Required..');
        document.getElementById('username').style.borderColor = "red";
        return false;
    } else if (!isNaN(user)){
        alert('Letters Are Required..');
        document.getElementById('username').style.borderColor = "red";
        return false;
    } else if (user.length < 4){
        alert('Username Most Be More Than Four..');
        document.getElementById('username').style.borderColor = "red";
        return false;
    } else {
        document.getElementById('username').style.borderColor = "green";
    }


    if (pass === ""){
        alert('Password Is Required..');
        document.getElementById('password').style.borderColor = "red";
        return false;
    } else if (pass.length <= 5){
        alert('Password Most Be More Than Five..');
        document.getElementById('password').style.borderColor = "red";
        return false;
    } else if (pass.search(/[0-9]/) === -1){
        alert('Password Most Contain A Number..');
        document.getElementById('password').style.borderColor = "red";
        return false;
    } else if (pass.search(/[A-Z]/) === -1){
        alert('Password Most Contain A Capital Letter..');
        document.getElementById('password').style.borderColor = "red";
        return false;
    } else if (pass.search(/[a-z]/) === -1){
        alert('Password Most Contain A Small Letter..');
        document.getElementById('password').style.borderColor = "red";
        return false;
    } else if (pass.search(/[!\@\#\$\%\^\*\)\_\-\=\+\|\}\]\;\:\,\.\>\<\?\\]/) === -1){
        alert('Symbols Are Required. ({[ Not Allowed..');
        document.getElementById('password').style.borderColor = "red";
        return false;
    } else {
        document.getElementById('password').style.borderColor = "green";
    }

    if (comp === ""){
        alert('Comfirmpassword is Required..');
        document.getElementById('compassword').style.borderColor = "red"
        return false;
    } else if (comp !== pass){
        alert('Password Not Match..');
        document.getElementById('compassword').style.borderColor = "red";
        document.getElementById('password').style.borderColor = "red";
        return false;
    } else {
        document.getElementById('compassword').style.borderColor = "green";
        document.getElementById('password').style.borderColor = "green";
    }

    if (mail === ""){
        alert('Email is Required..');
        document.getElementById('email').style.borderColor = "red";
        return false;
    } else if (atp < 1 || dot < atp +2 || dot +2 >= mail.length){
        alert('Please Enter A Valid Mail Address');
        document.getElementById('email').style.borderColor = "red";
        return false;
    } else {
        document.getElementById('email').style.borderColor = "green";
    }

    if (num === ""){
        alert('Phone Number is Required..');
        document.getElementById('number').style.borderColor = "red";
        return false;
    } else if (isNaN(num)){
        alert('Phone Number Invalid..');
        document.getElementById('number').style.borderColor = "red";
        return false;
    } else if (num.length !== 14){
        alert('Phone Number Invalid..');
        document.getElementById('number').style.borderColor = "red";
        return false;
    } else if(num.search(/[+\2\3\4]/) === -1){
        alert('Phone Number Most Begin With +234..');
        document.getElementById('number').style.borderColor = "red";
        return false;
    } else {
        document.getElementById('number').style.borderColor = "green";
    }


    if (gen === gender ){
        alert('Select a Gender..');
        document.getElementById('gender').style.borderColor = "red";
        return false;

    } else {
        document.getElementById('gender').style.borderColor = "green";
        alert('You Have Successfully Registered..');
        return true;
    }
}