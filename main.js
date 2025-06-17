var code=document.getElementById('productName')
var price=document.getElementById('productPrice')
var category=document.getElementById('productCategory')
var desc=document.getElementById('productDescreption')
var image=document.getElementById('productImage')
var rowData=document.getElementById('rowData')
var searchInput=document.getElementById('searchInput')


var productContainer=[]

if(localStorage.getItem("product")!== null){
    productContainer=JSON.parse(localStorage.getItem('product'))
}
else{
    productContainer=[]
}

function addProduct(){
    products={
        code:code.value,
        price:price.value,
        category:category.value,
        desc:desc.value,
        image:image.value
    }
    productContainer.push(products)
   localStorage.setItem('product',JSON.stringify(productContainer))
   displayProduct(productContainer.length-1)
   clearInput()
}

var cartona=``
function displayProduct(i){
        cartona+=`<div class="col-md-4 col-lg-2">
                <div class="productCard bg-secondary rounded-4 p-2">
                    <img src="./IMAGES/samsung.jpg" class="w-100" alt="">
                    <h4>Name: ${productContainer[i].code}</h4>
                    <p>Category:${productContainer[i].category}</p>
                    <p>Price:${productContainer[i].price}</p>
                    <p> Descreption:${productContainer[i].desc}</p>
                    <button class="btn btn-primary">update</button>
                    <button class="btn btn-danger">delete</button>
                </div>
            </div>`

    
    rowData.innerHTML=cartona
}

function clearInput(){
    code.value=null
    price.value=null
    category.value=null
    desc.value=null
    image.value=null
}


function searchProduct(){
var term=searchInput.value
var cartona=``
    for(var i=0;i< productContainer.length;i++){
        if(productContainer[i].code.toLowerCase().includes(term.toLowerCase()==true)){
            cartona+=`<div class="col-md-4 col-lg-2">
            <div class="productCard bg-secondary rounded-4 p-2">
                <img src="./IMAGES/samsung.jpg" class="w-100" alt="">
                <h4>Name: ${productContainer[i].code}</h4>
                <p>Category:${productContainer[i].category}</p>
                <p>Price:${productContainer[i].price}</p>
                <p> Descreption:${productContainer[i].desc}</p>
                <button class="btn btn-primary">update</button>
                <button class="btn btn-danger">delete</button>
            </div>
        </div>`
        }
    }
    rowData.innerHTML=cartona
}