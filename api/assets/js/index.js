var mycategory=document.querySelectorAll('.nav-item a')
// console.log(mycategory);
for(var i=0;i<mycategory.length;i++){
        mycategory[i].addEventListener('click',function(e){
                categoryName=e.target.getAttribute('category')
                console.log(categoryName);
                GetApi(categoryName)
        })
}
var items;
async function GetApi(categoryName){
        var Res=await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${categoryName}&apiKey=4533b57921c3449fa65829b267c4e5d0`)
        var Finalres=await Res.json();
        items=Finalres.articles
        display()
}
GetApi('technology')
function display(){
        var cartoona =``
        for(var i=0 ;i<items.length;i++){
            items[i].description !== null && items[i].title !== null && items[i].urlToImage !== null?
                cartoona += `<div class="col-md-4 rounded ">
                <div class='border rounded'>
            <img class='w-100' src='${items[i].urlToImage}'/>
            <div class='px-3'>
                <h5>${items[i].title.split(' ').splice(0,3).join(' ')}</h5>
                <p>${items[i].description.split(' ').splice(0,5).join(' ')}</p>
                <a class='btn btn-outline-danger w-100 my-1' href='${items[i].url}'>Show More</a>         
            </div></div></div>
        `:``
            
            
        }
        document.getElementById('showData').innerHTML = cartoona
    }
    
// var cartona;
// function display(){
//         cartona=``
//         for(var i=0 ; i<items.length;i++){
//                 items[i].description !== null && items[i].title !== null && items[i].urlToImage !== null?
//                 cartona+=`<div class="col-md-4 rounded ">
//                 <img src="${items[i].urlToImage}" class="w-100 rounded  " alt="">
//                 <div class='para border'>
//                 <h6 class="p-1">${items[i].title.split(' ').splice(0,3).join(' ')}</h6>
//                <p class='p-2'>${items[i].description.split(' ').splice(0,12).join(' ')}
//                </p>
//                 </div>
//               </div>`:``
               
//         }
//         document.getElementById('showData').innerHTML = cartona

// }