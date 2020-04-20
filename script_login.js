const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});



/*


function validate_login() {
      
        
         if( document.loginForm.EMail.value == "" ) {
            alert( "Please provide your Email!" );
            document.myForm.EMail.focus() ;
            return false;
         }
        
         if( document.loginForm.Password.value == "" ) {
            alert( "Please provide your Password!" );
            return false;
         }
         return( true );
      }



function matchpass(){  
var firstpassword=document.myForm.password.value;  
var secondpassword=document.myForm.password2.value;  
  
if(firstpassword==secondpassword){  
return true;  
}  
else{  
alert("password must be same!");  
return false;  
}  
}  



 function validateemail()  
{  
var x=document.myForm.email.value;  
var atposition=x.indexOf("@");  
var dotposition=x.lastIndexOf(".");  
if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
  alert("Please enter a valid e-mail address");  
  return false;  
  }  
}  






*/





let name=document.getElementById("name");
let email=document.getElementById("email")
let password=document.getElementById("password");
let confirmpassword=document.getElementById("password2");
let user=document.getElementById("user");
let pass=document.getElementById("pass");


function validatorForm() {
    if(name.value === "") {
        document.getElementById("error").innerHTML="*Username Require";
        name.style.border= "red solid";
        return false;
    }
    else if(email.value === "") {
        document.getElementById("error").innerHTML="*Email Require";
        name.style.border= "silver solid";
        email.style.border= "red solid";
        return false;
    }
    else if(password.value === "") {
        document.getElementById("error").innerHTML="*Password Require";
        name.style.border= "silver solid";
        email.style.border= "silver solid";
        password.style.border= "red solid";
        return false;
    }

    else if(password.value.length<8){
        document.getElementById("error").innerHTML="";
        alert("password must be 8 character long");
        return false ;
    }

    else if(confirmpassword.value === "") {
        document.getElementById("error").innerHTML="*Please Confirm your Password";
        name.style.border= "silver solid";
        email.style.border= "silver solid";
        password.style.border= "silver solid";
        confirmpassword.style.border= "red solid";
        return false;
    }
    else {
        name.style.border= "silver solid";
        email.style.border= "silver solid";
        password.style.border= "silver solid";
        confirmpassword.style.border= "silver solid";
        
        if(password.value.length<8){
        document.getElementById("error").innerHTML="";
        alert("password must be 8 character long");
        return false ;
    }
    else if(password.value!=confirmpassword.value){
        alert("password didn't matched!!!  \nPlease try again");
        return false ;
    }

    else{
    	alert("Successfully registered");
        return true;
    }

   
}
}