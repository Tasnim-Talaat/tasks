let names =document.getElementById('nameInput')
let email =document.getElementById('emailInput')
let pass =document.getElementById('passInput')
let logBtn=document.getElementById('logBtn')
let users=[]

function validationName(){
        let regx = /[a-z]{3,9}/
        if(regx.test(names.value)==true){
                document.getElementById('error').innerHTML =``
                // console.log('submitem');
                console.log(names.value);
            return true
        }
        else{
            document.getElementById('error').innerHTML =`Name Invalid...!`
        //     console.log('error');

            return false
        }
}
function validationEmail(){
        let regx = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/
        if(regx.test(email.value)==true){
                document.getElementById('error').innerHTML =``
                // console.log('submitem');
                console.log(email.value);
            return true
        }
        else{
            document.getElementById('error').innerHTML =`Email Invalid...!`
        //     console.log('error');

            return false
        }
}
function validationPassword(){
        let regx = /[a-z0-9]{3,9}/
        if(regx.test(pass.value)==true){
                document.getElementById('error').innerHTML =``
                console.log(pass.value);

            return true
        }
        else{
            document.getElementById('error').innerHTML =`Password Invalid...!`
            return false

        }
}
function check(v){
        v.preventDefault();
        if(validationName() == true && validationEmail() == true && validationPassword() == true ){
            let data={
                namess:names.value,
                emails:email.value,
                passs:pass.value
        }
        users.push(data)
        // console.log(users)
        localStorage.setItem('userData',JSON.stringify(users))
               
                // v.submit();
                document.getElementById("form").submit();
                // window.open('../../home.html')
        }

}

let timeAlert
document.getElementById('forget').addEventListener('click',()=>{
    // console.log('eeeee');
    // document.getElementById('msg').classList.remove('d-none')
     timeAlert = setInterval(()=>{
        document.getElementById('msg').classList.remove('d-none')},1000)
        setTimeout(()=>{
            // console.log('rrrr');
            document.getElementById('msg').classList.add('d-none')
            clearInterval(timeAlert)
        }
        ,3000)
})

document.getElementById('cls-msg').addEventListener('click',()=>{
    document.getElementById('msg').classList.add('d-none')
            clearInterval(timeAlert)
})
// --------------------home
let myData= JSON.parse(localStorage.getItem('userData'));
// console.log(myData[0].namess);
let myName=myData[0].namess
document.getElementById('logIn').innerHTML=`Hi ${myName}`

let logOut=document.getElementById('logOut')
logOut.addEventListener('click',()=>{
    localStorage.clear('userData')
    window.open('/movies/index.html')
})


// ----------------review--------------
setInterval(()=>{
    let reviews=Math.round(Math.random()*9000)
    // console.log(reviews);
    let watchs=Math.round(Math.random()*9000)
    let subscribes=Math.round(Math.random()*9000)
    document.getElementById('review').innerHTML=`${reviews}K`
    document.getElementById('watch').innerHTML=`${watchs}K`
    document.getElementById('subscribe').innerHTML=`${subscribes}K`
},2000)




$('#icon-up').click(function(){
    window.scrollTo(0,0)
})
let windowScroll = window.scrollY
// console.log(windowScroll);
window.addEventListener('scroll',function(){
    let windowScroll =window.scrollY
    if(windowScroll < 100){
        document.getElementById('icon-up').classList.add('d-none') 

    }
        else if(windowScroll > 100){
            document.getElementById('icon-up').classList.remove('d-none') 
            $('.navbar').animate({'top':'0','width':'100%'})

        }

        })


// ------jquery-----
$(document).ready(function(){
    $('#isLoding img').fadeOut(1000,function(){
        $('#isLoding').slideUp(1000,function(){
            $('#isLoding').remove()
            $('body').css('overflow' , 'auto')
            $('.navbar').css('width' , '60%')
            $('.navbar').css('top' , '30px')
            $('.navbar').css('position' , 'fixed')
           
    })
})
})





