let data = document.querySelector('.displyItoms');
let createData="";

let product = [
    {
        name:"Realme x50 pro 5g",
        image:"Realme X50 Pro 5g.png",
    },
    {
        name:"Xiaomi Redmi Note10 Pro Max",
        image:"Redmi Note 10 Pro Max.png",
    },
    {
        name:"OnePlus 9 Pro 5G",
        image:"OnePlus 9 Pro 5G.png",
    }
];

for (let i = 0; i < product.length; i++) {
createData = 
`<h3 class="d-flex justify-content-center">${product[i].name}</h3> 
<div class="p-3 d-flex justify-content-center bg-image hover-zoom"> 
<a href="https://fanse-online-shop.netlify.app/${product[i].image}"> <img src="${product[i].image}" alt="img"/></a> 
</div> 
<div class="p-3 d-flex justify-content-center"> 
<button class="btn btn-warning" type="button" >Add to Cart</button> 
</div> `;
let newCreateData=document.createElement('div');
newCreateData.setAttribute("class","col-md-4")
newCreateData.innerHTML=createData;
console.log(createData);
data.append(newCreateData);
}