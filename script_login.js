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
var mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;



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

  /*  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
            //var address = document.getElementById[email].value;
            if (reg.test(email) == false) 
            {
                alert('Invalid Email Address');
                return (false);
            }*/

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


        let user=document.getElementById("user")
        let pass=document.getElementById("pass");

        function validatorForm2() {
            if(user.value === "") {
                document.getElementById("error2").innerHTML="*Email Require";
                user.style.border= "red solid";
                return false;
            }

          /*  if(!user.match(mailformat))
            {
                 alert("You have entered a valid email address!");    //The pop up alert for a valid email address
                 return false;
            }*/

            if(pass.value === "") {
                document.getElementById("error2").innerHTML="*Password Require";
                user.style.border= "silver solid";
                pass.style.border= "red solid";
                return false;
            }

            else{
                alert("Successfully login");
                alert("Hello user")
                return true;
            }
        }