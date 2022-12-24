var namess=document.getElementById('name')
var price=document.getElementById('price')
var cat=document.getElementById('cat')
var desc=document.getElementById('desc')
var products=[]
function getData(){
data={
        names:namess.value,
        prices:price.value,
        cat:cat.value,
        desc:desc.value,
}
products.push(data);
// console.log(products);
display()
}


function display(){
        var showProducts=``
        for(var i =0;i<products.length;i++){
                showProducts+=`<tr>
                <th scope="row">${products[i].names}</th>
                <td>${products[i].prices}</td>
                <td>${products[i].cat}</td>
                <td>${products[i].desc}</td>
                <td><button class="btn btn-outline-danger">Delete</button></td> 
                <td><button class="btn btn-outline-warning">Update</button></td>
              </tr>`

        }
        document.getElementById('info').innerHTML =showProducts
        

}


