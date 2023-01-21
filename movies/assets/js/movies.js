let myData= JSON.parse(localStorage.getItem('userData'));
// console.log(myData[0].namess);
let myName=myData[0].namess
document.getElementById('logIn').innerHTML=`Hi ${myName}`

let logOut=document.getElementById('logOut')
logOut.addEventListener('click',()=>{
    localStorage.clear('userData')
    window.open('/index.html')
})
$('#icon-up').click(function(){
        window.scrollTo(0,0)
    })
var items;
async function GetApi(){
        var Res=await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=1bf47475bba9e0be71cfa3327952331a`)
        var Finalres=await Res.json();
        console.log(Finalres);
        items=Finalres.results
        console.log(items[0].poster_path);
        // console.log(items[0].popularity);
        console.log(items[0].vote_average);
        display()
}
GetApi()
function display(){
        var cartona =``
        for(var i=0 ;i<items.length;i++){
            items[i].poster_path !== null && items[i].vote_average !== null ?
                cartona += ` <div class="col-md-3 ">
                <div class="position-relative rounded mt-3">
                <img src='https://image.tmdb.org/t/p/w500/${items[i].poster_path}' class='w-100  rounded imgMovie' alt="" id="imgMovie">
                <p class='btn-danger position-absolute top-0 end-0 m-2 p-2' id="rate">${items[i].vote_average}</p>
                </div>
                </div>`:``
            
            
        }
        document.getElementById('movies-data').innerHTML = cartona
    }

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
    $(document).ready(function(){
                $('.navbar').css('width' , '60%')
            $('.navbar').css('top' , '30px')
            $('.navbar').css('position' , 'fixed')
            
            
            })
