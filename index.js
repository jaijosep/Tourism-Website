let email = document.getElementById("exampleInputEmail1");
let error = document.getElementById("error");
let pswd = document.getElementById("exampleInputPassword1");
let pswd1= document.getElementById("exampleInputPassword2");
let pswdstr = document.getElementById("password-strength")
let pswdstr1 = document.getElementById("pswdstr1");
let errorp = document.getElementById("errorp");
let phn = document.getElementById("PhNum");
let errorph = document.getElementById("errorph");
let pswdmtc = document.getElementById("pswdmtc");

function validateph(){
    let phnexp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if(phnexp.test(phn.value)){
        errorph.innerText = "Valid Phonenumber";
        errorph.style.color = "green";
        return true;
    }
    else{
        errorph.innerHTML = "Invalid Phone number";
        errorph.style.color = "Red"
        return false;
    }
}
function validate(){
    let regexp = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/
    if(regexp.test(email.value)){
        error.innerText = "Valid email id";
        error.style.color = "Green"
        return true;
    }
    else{
        error.innerText = "Invalid email id";
        error.style.color = "Red";
        return false;
    }
}

pswd.addEventListener("input", function () {
    let pswdexp1 = /^(?=.*[a-z])/;
    let pswdexp2 = /^(?=.*[a-z])(?=.*[A-Z])/;
    let pswdexp3 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
    if(pswdexp3.test(pswd.value)){
        pswdstr.style.backgroundColor = "Green";
        pswdstr1.innerText = "Strong Password";
        pswdstr1.style.color = "Green";
    }
    else if(pswdexp2.test(pswd.value)){
        pswdstr.style.backgroundColor = "Orange";
        pswdstr1.innerText = "Medium Password";
        pswdstr1.style.color = "Orange";
    }
    else if(pswdexp1.test(pswd.value)){
        pswdstr.style.backgroundColor = "Red";
        pswdstr1.innerText = "Weak Password";
        pswdstr1.style.color = "Red";
        return true;
    }
  });

function validatep(){
    let pswdexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
    if(pswdexp.test(pswd.value)){
        errorp.innerText = "Valid Password";
        errorp.style.color = "green";
        return true;
    }
    else{
        errorp.innerText = "Invalid Password";
        errorp.style.color = "Red";
        return false;
    }
}
function matchPassword() {  
    if(pswd.value != pswd1.value) { 
        pswdmtc.innerText = "Passwords Did Not Match";
        pswdmtc.style.color = "Red";
        return false;   
      }
    else { 
    pswdmtc.innerText = "Passwords Matched";
    pswdmtc.style.color = "Green";
    return true;
    }
  }  
