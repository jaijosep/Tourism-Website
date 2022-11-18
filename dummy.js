function validateph(){
    let phnexp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if(phnexp.test(phn.value)){
        errorph.innerText = "Valid Phonenumber";
        errorph.style.color = "green";
    }
    else{
        errorph.innerHTML = "Invalid Phone number";
        errorph.style.color = "Red"
    }
}
function validate(){
    let regexp = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/
    if(regexp.test(email.value)){
        error.innerText = "Valid email id";
        error.style.color = "Green"
    }
    else{
        error.innerText = "Invalid email id";
        error.style.color = "Red";
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
    }
  });

function validatep(){
    let pswdexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
    if(pswdexp.test(pswd.value)){
        errorp.innerText = "Valid Password";
        errorp.style.color = "green";
    }
    else{
        errorp.innerText = "Invalid Password";
        errorp.style.color = "Red";
    }
}
function matchPassword() {  
    if(pswd.value != pswd1.value) { 
        pswdmtc.innerText = "Passwords Did Not Match";
        pswdmtc.style.color = "Red";   
      }
    else { 
    pswdmtc.innerText = "Passwords Matched";
    pswdmtc.style.color = "Green";
    }
  }  
