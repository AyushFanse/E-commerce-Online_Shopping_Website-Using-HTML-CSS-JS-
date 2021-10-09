let data = document.querySelector('.displyItoms');
let searchData = document.querySelector("#searchData");
let createData="";
let newCreateData="";
let x="";
let product = [
    {
        name:"Realme x50 pro 5G",
        image:"img/Realme X50 Pro 5g.png",
    },
    {
        name:"Redmi Note10 Pro Max",
        image:"img/Redmi Note 10 Pro Max.png",
    },
    {
        name:"OnePlus 9 Pro 5G",
        image:"img/OnePlus 9 Pro 5G.png",
    },
    {
        name:"Realme 8i 5G",
        image:"img/Realme 8i 5G.png",
    },
    {
        name:"POCO M3 Pro",
        image:"img/POCO M3 Pro all.png",
    },
    {
        name:"Motorola G40 Fusion",
        image:"img/Motorola G40 Fusion.png",
    },
    {
        name:"ROG Phone 5 Ultimate",
        image:"img/ROG Phone 5 Ultimate.png",
    },
    {
        name:"iPhone 13 Pro Max",
        image:"img/iPhone 13 Pro Max.png",
    },
    {
        name:"ROG Phone 3",
        image:"img/ROG Phone 3.png",
    },
    {
        name:"ROG Phone 5s Pro",
        image:"img/ROG Phone 5s Pro.png",
    },
];


function getData(){
    const createData = `<h4 class="d-flex justify-content-center">${product[x].name}</h4> 
                        <div class="p-3 d-flex justify-content-center bg-image hover-zoom"> 
                        <a href="https://fanse-online-shop.netlify.app/${product[x].image}"> <img src="${product[x].image}" alt="img"/></a> 
                        </div> 
                        <div class="p-3 d-flex justify-content-center"> 
                        <button class="btn btn-warning" type="button" >Add to Cart</button> 
                        </div> `;
    let newCreateData=document.createElement('div');
    newCreateData.setAttribute("class","col-md-4");
    newCreateData.innerHTML=createData;
    data.append(newCreateData);
}

for (let i = 0; i < product.length; i++) {
    x=i;
    getData();
};

function search(){
    data.innerHTML="";
    cap = searchData.value.toUpperCase();
        for (let i=0; i<product.length; i++){
            text=product[i].name;
            console.log(text.toUpperCase().indexOf(cap));
               if(text.toUpperCase().indexOf(cap)>-1){
                    x=i;
                    getData();
                }
               else{
                    createData="none";
                }
            }
        }
