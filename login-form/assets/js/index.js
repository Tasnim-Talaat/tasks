var email =document.getElementById('emailInput')
var pass =document.getElementById('passInput')
var logBtn=document.getElementById('passInput')



function validationEmail(){
        var regx = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/
        if(regx.test(email.value)==true){
                document.getElementById('errorEmail').innerHTML =``
                // console.log('submitem');
                console.log(email.value);
            return true
        }
        else{
            document.getElementById('errorEmail').innerHTML =`Email Invalid...!`
        //     console.log('error');

            return false
        }
}
function validationPassword(){
        var regx = /[a-z0-9]{3,9}/
        if(regx.test(pass.value)==true){
                document.getElementById('errorPass').innerHTML =``
                console.log(pass.value);

            return true
        }
        else{
            document.getElementById('errorPass').innerHTML =`Password Invalid...!`
            return false

        }
}
function check(v){
        v.preventDefault();
        if(validationEmail() == true && validationPassword() == true){
                // console.log('submit');
                // v.submit();
                document.getElementById("form").submit();
        }

}

// logBtn.addEventListener('click',function check(v){
//         v.preventDefault();
//         if(validationEmail() == true && validationPassword() == true){
//                 console.log('submit');
//         }

// })