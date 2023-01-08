var mycategory=document.querySelectorAll('.cat button')
// console.log(mycategory);
for(var i=0;i<mycategory.length;i++){
        mycategory[i].addEventListener('click',function(e){
                // categoryName=e.target.getAttribute('category')
                categoryName=e.target.getAttribute('id')
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
        var cartona =``
        for(var i=0 ;i<items.length;i++){
            items[i].description !== null && items[i].title !== null && items[i].urlToImage !== null?
                cartona += `<div class="col-md-4 rounded ">
                <div class='ss border rounded'>
            <img class='w-100' src='${items[i].urlToImage}'/>
            <div class='px-3'>
                <h6>${items[i].title.split(' ').splice(0,3).join(' ')}</h6>
                <p>${items[i].description.split(' ').splice(0,5).join(' ')}</p>
                <a class='btn btn-outline-danger w-100 my-1' href='${items[i].url}'>Show More</a>         
            </div></div></div>
        `:``
            
            
        }
        document.getElementById('showData').innerHTML = cartona
    }