const form = document.getElementById("formvalidate");
let email = document.getElementById("inputEmail4");
let password = document.getElementById("inputPassword4");
let mobile = document.getElementById("mobilenumber");
let address = document.getElementById("inputAddress");
let zip = document.getElementById("inputZip");
form.addEventListener('input',function(event){
    if(!validate()){
        event.preventDefault();
    }
})
form.addEventListener('submit',function(event){
    if(!validate()){
        event.preventDefault();
    }
})
function validate(){
    const regeml = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
    const regpsw = /^([a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]){8,}$/g;
    const regmbl = /^([0-9]{3})([\.-\s]{1})?([0-9]{3})([\.-\s]{1})?([0-9]{4})$/;
    let errored = document.getElementById("ed");
    let errorpd = document.getElementById("pd");
    let errormd = document.getElementById("md");
    let errorad = document.getElementById("ad");
    let errorzd = document.getElementById("zd");
    let n = 1;
    let pwd = 1;
    let mbn = 1;
    let ad = 1;
    let z = 1;
    // email verification starts
    if(regeml.test(email.value)){
        errored.innerHTML = "Valid Email Id";
        errored.style.color = "green";
        email.style.borderColor = "green";
        n=1;
    }
    else{
        errored.innerHTML = "Invalid Email Id";
        email.style.borderColor = "red";
        errored.style.color = "red";
        n=0;
    }
    // email verification ends
    // password strenght chekking.
    let check = 0;
    if(/[A-Z]/.test(password.value)){
        check+=1;
    }
    if(/[a-z]/.test(password.value)){
        check+=1;
    }
    if(/[0-9]/.test(password.value)){
        check+=1;
    }
    if(/[!@#\$%\^\&*\)\(+=\._-]/.test(password.value)){
        check+=1;
    } 
    if(check == 4 && regpsw.test(password.value)){
        errorpd.innerHTML = "Password strength is strong";
        errorpd.style.color = "green";
        password.style.borderColor = "green";
        pwd = 1;
    } 
    else if(check == 4 && password.value.length<8){
        errorpd.innerHTML = "Password strength is strength, minimum 8 characters";
        errorpd.style.color = "green";
        password.style.borderColor = "green";
        pwd = 0;
    } 
    else if(check == 3 && password.value.length>=8){
        errorpd.innerHTML = "Password strength is medium";
        errorpd.style.color = "orange";
        password.style.borderColor = "orange";
        pwd = 1;
    }
    else if(check == 3 && password.value.length<8){
        errorpd.innerHTML = "Password strength is medium, minimum 8 characters";
        errorpd.style.color = "orange";
        password.style.borderColor = "orange";
        pwd = 0;
    }
    else if(password.value.length>=8){
        errorpd.innerHTML = "Password is weak";
        errorpd.style.color = "red";
        password.style.borderColor = "red";
        pwd = 1;
    }  
    else {
        errorpd.innerHTML = "Password is weak, minimum 8 characters";
        errorpd.style.color = "red";
        password.style.borderColor = "red";
        pwd = 0;
    }  
    // password strength ending 
    // mobile number verification starts
    if(regmbl.test(mobile.value)){
        errormd.innerHTML = "Valid mobile number" ;
        errormd.style.color = "green";
        mobile.style.borderColor = "green";
        mbn = 1;
    }
    else{
        errormd.innerHTML = "Invalid mobile number" ;
        errormd.style.color = "red";
        mobile.style.borderColor = "red";
        mbn = 0;
    }
    // mobile verification ends  
    // adress checking
    if(address.value==""){
        errorad.innerHTML = "Can't be empty";
        errorad.style.color = "red"
        address.style.borderColor = "red";
        ad=0;
    }
    else{
        errorad.innerHTML = "";
        address.style.borderColor = "green";
        ad=1;
    }
    // zip checking
    if(zip.value==""){
        errorzd.innerHTML = "Can't be empty";
        errorzd.style.color = "red"
        zip.style.borderColor = "red";
        z=0
    }
    else{
        errorzd.innerHTML = "";
        zip.style.borderColor = "green";
        z=1;
    }
    // submit checking
    if(n==1 && pwd==1 && mbn==1){
        return true;
    }
    else{
        return false;
    }
    // submit checking ending
}