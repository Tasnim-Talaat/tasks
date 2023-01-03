var imagesBox =document.getElementById('imagesBox')
var imageList =Array.from(document.querySelectorAll('.item img'))
var imgContainer =document.getElementById('imgContainer')

var prevBtn =document.getElementById('prevBtn')
var closeBtn =document.getElementById('closeBtn')
var nextBtn =document.getElementById('nextBtn')

var currentImgIndex;
for(var i=0;i<imageList.length;i++){
        imageList[i].addEventListener('click',function(e){
                imagesBox.classList.remove('d-none')
                var currentImage=e.target.getAttribute('src')
                currentImgIndex =imageList.indexOf(e.target) 

                imgContainer.style.backgroundImage=`url(${currentImage})`
  
        })
}

closeBtn.addEventListener('click',function(){
        imagesBox.classList.add('d-none')

})
nextBtn.addEventListener('click',function(){
        currentImgIndex++;
        currentImgIndex > imageList.length -1 ? currentImgIndex =0:``
        console.log(imageList[currentImgIndex].getAttribute('src'))
        var newImgSrc =imageList[currentImgIndex].getAttribute('src')
        imgContainer.style.backgroundImage = `url(${newImgSrc})`
}
)
prevBtn.addEventListener('click',function(){
        currentImgIndex--;
        console.log(currentImgIndex);
        currentImgIndex <0   ? currentImgIndex =imageList.length-1:``
        console.log(imageList[currentImgIndex].getAttribute('src'))
        var newImgSrc =imageList[currentImgIndex].getAttribute('src')
        imgContainer.style.backgroundImage = `url(${newImgSrc})`
        
}
)



var itemGame=Array.from(document.querySelectorAll('.item-game img'))
var imagesGame=document.getElementById('imagesGame')
var imgContain =document.getElementById('imgContain')

// console.log(itemGame);
for(var i=0;i<itemGame.length;i++){
        itemGame[i].addEventListener('click',function(e){
                imagesGame.classList.remove('d-none')
                var currentImages=e.target.getAttribute('src')
                imgContain.style.backgroundImage=`url(${currentImages})`
                // imgContain.style.height=`100%`
                // imgContain.style.width=`50%`  
        })
}
var closeBtnn =document.getElementById('closeBtnn')

closeBtnn.addEventListener('click',function(){
        imagesGame.classList.add('d-none')

})
