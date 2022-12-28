var namess=document.getElementById('name')
var price=document.getElementById('price')
var cat=document.getElementById('cat')
var desc=document.getElementById('desc')
var products=[]


var addBtn=document.getElementById('addBtn')
var updateBtn=document.getElementById('updateBtn')

if(localStorage.getItem('products') != null ){
       products=JSON.parse(localStorage.getItem('products'))
display()
}

function getData(){
        if(validtionNameProduct() ==true && validtionPriceProduct() == true && validtionCatProduct() == true && validtionDescProduct() ==true  ){
data={
        names:namess.value,
        prices:price.value,
        cat:cat.value,
        desc:desc.value
}
products.push(data);
localStorage.setItem('products',JSON.stringify(products))
// console.log(products);
display()
clearProduct()
        }
}


function display(){
        var showProducts=``
        for(var i =0;i<products.length;i++){
                showProducts+=`<tr>
                <th scope="row"> <p id='nameProduct'> ${products[i].names} </p><input type="text" class="form-control d-none " id="nameUpdate"></th>
                <td> <p id='priceProduct'>${products[i].prices}</p><input type="text" class="form-control d-none " id="priceUpdate"></td>
                <td> <p id='catProduct'>${products[i].cat}</p><input type="text" class="form-control d-none " id="catUpdate"></td>
                <td> <p id='descProduct'>${products[i].desc}</p><input type="text" class="form-control d-none " id="descUpdate"></td>
                <td><button class="btn btn-outline-danger" onclick='delProduct(${i})'>Delete</button></td> 
                <td><button class="btn btn-outline-warning" id='updatebttn' onclick='setProduct(${i})'>Update</button>
                <button class="btn btn-outline-success px-3 d-none" id='savebtn' onclick='updateProduct()'>Save</button></td>
              </tr>`

        }
        document.getElementById('info').innerHTML =showProducts
        

}

function delProduct(id){
        // console.log(id);
        products.splice(id,1)
        localStorage.setItem('products',JSON.stringify(products))
// console.log(products);
display()
}
function clearProduct(){
        namess.value=``
        price.value=``
        cat.value=``
        desc.value=``
}




var productIndex=0;
// function setProduct(id){
//         productIndex=id;
//        document.getElementById('name').value=products[id].names
//         document.getElementById('price').value=products[id].prices
//        document.getElementById('cat').value=products[id].cat
//         document.getElementById('desc').value=products[id].desc
//         addBtn.classList.add('d-none')
//         updateBtn.classList.remove('d-none')
// }


// function updateProduct(){
//         if(validtionNameProduct() ==true && validtionPriceProduct() == true && validtionCatProduct() == true && validtionDescProduct() ==true  ){

//         products[productIndex].names=document.getElementById('name').value
//         products[productIndex].prices=document.getElementById('price').value
//         products[productIndex].cat=document.getElementById('cat').value
//         products[productIndex].desc=document.getElementById('desc').value
//         localStorage.setItem('products',JSON.stringify(products))
//         display();
//         clearProduct();
//     addBtn.classList.remove('d-none')
//     updateBtn.classList.add('d-none')
//         }
// }
    var nameUpdate;
    var priceUpdate;
    var catUpdate
    var descUpdate
    var btnupdate
    var btnsav
function setProduct(id){
        productIndex=id;
         nameUpdate= document.getElementById("info").rows[id].children[0]
         priceUpdate= document.getElementById("info").rows[id].children[1]
         catUpdate= document.getElementById("info").rows[id].children[2]
         descUpdate= document.getElementById("info").rows[id].children[3]
         btnupdate= document.getElementById("info").rows[id].children[5].children[0]
         btnsave= document.getElementById("info").rows[id].children[5].children[1]
        console.log(document.getElementById("info").rows[id].children[5]
        );
        nameUpdate.children[1].classList.remove('d-none')
        priceUpdate.children[1].classList.remove('d-none')
        catUpdate.children[1].classList.remove('d-none')
        descUpdate.children[1].classList.remove('d-none')

        nameUpdate.children[0].classList.add('d-none')
        priceUpdate.children[0].classList.add('d-none')
        catUpdate.children[0].classList.add('d-none')
        descUpdate.children[0].classList.add('d-none')


        nameUpdate.children[1].value=products[id].names
        priceUpdate.children[1].value=products[id].prices
        catUpdate.children[1].value=products[id].cat
        descUpdate.children[1].value=products[id].desc
        btnupdate.classList.add('d-none')
        btnsave.classList.remove('d-none')

        // document.getElementById('nameUpdate').classList.remove('d-none')
        // document.getElementById('priceUpdate').classList.remove('d-none')
        // document.getElementById('catUpdate').classList.remove('d-none')
        // document.getElementById('descUpdate').classList.remove('d-none')
        // document.getElementById('nameProduct').classList.add('d-none')
        // document.getElementById('priceProduct').classList.add('d-none')
        // document.getElementById('catProduct').classList.add('d-none')
        // document.getElementById('descProduct').classList.add('d-none')

    //            document.getElementById('nameUpdate').value=products[id].names
    //     document.getElementById('priceUpdate').value=products[id].prices
    //    document.getElementById('catUpdate').value=products[id].cat
    //     document.getElementById('descUpdate').value=products[id].desc
        
        // document.getElementById('updatebttn').classList.add('d-none')
        // document.getElementById('savebtn').classList.remove('d-none')
}

function updateProduct(){
        if(validtionNameProductUpdate() ==true && validtionPriceProductUpdate() == true && validtionCatProductUpdate() == true && validtionDescProductUpdate() ==true  ){

        products[productIndex].names=nameUpdate.children[1].value
        products[productIndex].prices=priceUpdate.children[1].value
        products[productIndex].cat=catUpdate.children[1].value
        products[productIndex].desc=descUpdate.children[1].value
        localStorage.setItem('products',JSON.stringify(products))
        display();
        clearProduct();
        btnupdate.classList.remove('d-none')
        btnsave.classList.add('d-none')
        }
}

function searchProduct(term){
        var showProducts=``
        for(var i =0;i<products.length;i++){
                if(products[i].names.toLowerCase().includes(term.toLowerCase())==true){
                    document.getElementById('emp').innerHTML=``
                showProducts+=`<tr>
                <th scope="row"> <p id='nameProduct'> ${products[i].names} </p><input type="text" class="form-control d-none " id="nameUpdate"></th>
                <td> <p id='priceProduct'>${products[i].prices}</p><input type="text" class="form-control d-none " id="priceUpdate"></td>
                <td> <p id='catProduct'>${products[i].cat}</p><input type="text" class="form-control d-none " id="catUpdate"></td>
                <td> <p id='descProduct'>${products[i].desc}</p><input type="text" class="form-control d-none " id="descUpdate"></td>
                <td><button class="btn btn-outline-danger" onclick='delProduct(${i})'>Delete</button></td> 
                <td><button class="btn btn-outline-warning" id='updatebttn' onclick='setProduct(${i})'>Update</button>
                <button class="btn btn-outline-success px-3 d-none" id='savebtn' onclick='updateProduct()'>Save</button></td>
              </tr>`
              
        }
        else{
                // showProducts=`<tr> <td colspan='6'><p class="text-danger text-center fw-bold" id="emp">Empty....!</p></td></tr>`
                //         document.getElementById('emp').classList.remove('d-none')
                        document.getElementById('emp').innerHTML=`
                        <span>Empty....!</span>
                    `
                }

        document.getElementById('info').innerHTML =showProducts
}     
}


// validtion
function validtionNameProduct(){
        var regx = /\S$/
        if(regx.test(namess.value)==true){
                document.getElementById('errorform').innerHTML =``
            return true
        }
        else{
            document.getElementById('errorform').innerHTML =`<div class="alert alert-danger">Name Invalid...!</div>`
        }
    }

function validtionPriceProduct(){
        var regx = /\S$/
        if(regx.test(price.value)==true){
                document.getElementById('errorform').innerHTML =``
            return true
        }
        else{
            document.getElementById('errorform').innerHTML =`<div class="alert alert-danger">Price Invalid...!</div>`
        }
    }
function validtionCatProduct(){
        var regx = /\S$/
        if(regx.test(cat.value)==true){
                document.getElementById('errorform').innerHTML =``
            return true
        }
        else{
            document.getElementById('errorform').innerHTML =`<div class="alert alert-danger">Category Invalid...!</div>`
        }
    }
function validtionDescProduct(){
        var regx = /\S$/
        if(regx.test(desc.value)==true){
            document.getElementById('errorform').innerHTML =``
            return true
        }
        else{
            document.getElementById('errorform').innerHTML =`<div class="alert alert-danger">Description Invalid...!</div>`
        }
    }


// validtion Update
    function validtionNameProductUpdate(){
        var regx = /\S$/
        if(regx.test( nameUpdate.children[1].value)==true){
                document.getElementById('error').innerHTML =``
            return true
        }
        else{
            document.getElementById('error').innerHTML =`<div class="alert alert-danger">Name Invalid...!</div>`
        }
    }
    
function validtionPriceProductUpdate(){
        var regx = /\S$/
        if(regx.test(priceUpdate.children[1].value)==true){
                document.getElementById('error').innerHTML =``
            return true
        }
        else{
            document.getElementById('error').innerHTML =`<div class="alert alert-danger">Price Invalid...!</div>`
        }
    }
function validtionCatProductUpdate(){
        var regx = /\S$/
        if(regx.test(catUpdate.children[1].value)==true){
                document.getElementById('error').innerHTML =``
            return true
        }
        else{
            document.getElementById('error').innerHTML =`<div class="alert alert-danger">Category Invalid...!</div>`
        }
    }
function validtionDescProductUpdate(){
        var regx = /\S$/
        if(regx.test(descUpdate.children[1].value)==true){
            document.getElementById('error').innerHTML =``
            return true
        }
        else{
            document.getElementById('error').innerHTML =`<div class="alert alert-danger">Description Invalid...!</div>`
        }
    }