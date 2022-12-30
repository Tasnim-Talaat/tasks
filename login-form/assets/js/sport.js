var myHttp =new XMLHttpRequest;
myHttp.open('get',' https://newsapi.org/v2/top-headlines?country=de&category=sports&apiKey=e9f6abf35e454af4aa9ef7ef62160669')
myHttp.send();

myHttp.addEventListener('readystatechange',function(){
        if(myHttp.readyState == 4){
                var result =JSON.parse(myHttp.response).articles
                // console.log(result);
                display(result)
            }
})
var cartona;
function display(res){
        cartona=``
        for(var i=0 ; i<res.length;i++){
                res[i].description !== null ?
                cartona+=`<div class="col-md-4 rounded">
                <img src="${res[i].urlToImage}" class="w-100 rounded " alt="">
                <div class='para'>
                <h6 class="p-1">${res[i].title.split(' ').splice(0,3).join(' ')}</h6>
               <p class='p-2'>${res[i].description.split(' ').splice(0,12).join(' ')}
               </p>
                </div>
              </div>`:``
               
        }
        document.getElementById('showData').innerHTML = cartona

}