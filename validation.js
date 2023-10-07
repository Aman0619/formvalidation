function validation() {
    let name = document.getElementById('name').value;
    let uname = document.getElementById('username').value;
    let mob = document.getElementById('mob').value;
    // let mob = parseInt(document.getElementById('mob').value); ==> it convert variable string into number
    let maxmob = document.getElementById('mob').value;
    let pass = document.getElementById('pass').value;
    let cpass = document.getElementById('cpass').value;
    console.log(name, uname, mob, pass, cpass);

    if (name === '') {
        alert("please enter name");
        document.getElementById('name').focus()
        return false;
    }

    else if (uname === '') {
        alert("please enter username");
        document.getElementById('uname').focus()
        return false;
    }

    else if (!uname.includes('@gmail.com')) {
        alert("@gmail.com must be included").focus();
        return false;
    }

    else if (isNaN(mob)) {
        alert("please enter valid mobile number").focus();
        return false;
    }

    else if (maxmob !== 10) {
        alert("mobile number should be 10 digit").focus();
        return false;
    }

    else if(pass === ""){
        alert("please enter correct password").focus();
        return false;
    }

    else if(!pass.includes('@')){
        alert("include upper cace").focus();
        return false;
    }

    else if(cpass === ""){
        alert("please enter conferm password").focus();
        return false;
    }

    else if(pass !== cpass){
        alert("password not match").focus();
        return false;
    }
}