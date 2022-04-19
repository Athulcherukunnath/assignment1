const form = document.getElementById("formvalidate");
let email = document.getElementById("exampleInputEmail1");
let password = document.getElementById("exampleInputPassword1");
form.addEventListener('submit',function(event){
    if(!validate()){
        event.preventDefault();
    }
})

function validate(){
    const regeml = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
    const regpsw = /^([a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]){8,}$/g;
    let errored = document.getElementById("ed");
    let errorpd = document.getElementById("pd");
    let n = 1;
    if(regeml.test(email.value)){
        errored.innerHTML = "Valid Email Id";
        errored.style.color = "green";
        email.style.borderColor = "green";
       
    }
    else{
        errored.innerHTML = "Invalid Email Id";
        email.style.borderColor = "red";
        errored.style.color = "red";
        n=0;
    }
    if(regpsw.test(password.value)){
        errorpd.innerHTML = "Valid Password";
        errorpd.style.color = "green";
        password.style.borderColor = "green";
        
    }
    else{
        errorpd.innerHTML = "Invalid Password";
        password.style.borderColor = "red";
        errorpd.style.color = "red";
        n=0;
    }
    if(n==0){
        return false;
    }
    else{
        return true;
    }
}