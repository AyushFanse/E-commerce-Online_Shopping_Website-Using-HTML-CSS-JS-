// Defining variables
let data = document.querySelector('.displyItoms');
let remData = document.querySelector('.head');
let searchData = document.querySelector("#searchData");
let searchBrand = document.querySelector("#searchBrand");
let createData="";
let newCreateData="";
let garbage=0;
let x="";

// Created my own Product object.
let product = [
    {
        name:"Realme x50 pro",
        image:"img/Realme X50 Pro 5g.png",
        price: `41,999`,
        rom:`128`,
        ram:`8`,
        processor:`Qualcomm Snapdragon 865`,
        battry: `5000`,
    },
    {
        name:"Redmi Note10 Pro Max",
        image:"img/Redmi Note 10 Pro Max.png",
        price: `21,990`,
        rom:`128`,
        ram:`6`,
        processor:`Qualcomm Snapdragon 732G`,
        battry: `5000`,
    },
    {
        name:"OnePlus 9 Pro",
        image:"img/OnePlus 9 Pro 5G.png",
        price: `60,999`,
        rom:`128`,
        ram:`8`,
        processor:`Qualcomm Snapdragon 888`,
        battry: `4500`,
    },
    {
        name:"Realme 8i",
        image:"img/Realme 8i 5G.png",
        price: `14,999`,
        rom:`128`,
        ram:`6`,
        processor:`MediaTek Helio G96`,
        battry: `5000`,
    },
    {
        name:"POCO M3 Pro",
        image:"img/POCO M3 Pro all.png",
        price: `16,499`,
        rom:`128`,
        ram:`6`,
        processor:`MediaTek Dimensity 700`,
        battry: `5000`,
    },
    {
        name:"Motorola G40 Fusion",
        image:"img/Motorola G40 Fusion.png",
        price: `14,999`,
        rom:`128`,
        ram:`6`,
        processor:`Qualcomm Snapdragon 732G`,
        battry: `6000`,
    },
    {
        name:"ROG Phone 5",
        image:"img/Asus ROG Phone 5 Ultimate.png",
        price: `49,999`,
        rom:`128`,
        ram:`8`,
        processor:`Qualcomm Snapdragon 888 (SM8350)`,
        battry: `6000`,
    },
    {
        name:"iPhone 13 Pro Max",
        image:"img/iPhone 13 Pro Max.png",
        price: `1,39,900`,
        rom:`6`,
        ram:`256`,
        processor:`A15 Bionic Chip`,
        battry: `5000`,
    },
    {
        name:"ROG Phone 3",
        image:"img/Asus ROG Phone 3.png",
        price: `34,999`,
        rom:`128`,
        ram:`8`,
        processor:`Qualcomm Snapdragon 865+ (SM8250)`,
        battry: `6000`,
    },
    {
        name:"Realme GT",
        image:"img/realme GT Master Edition.png",
        price: `22,999`,
        rom:`128`,
        ram:`8`,
        processor:`Qualcomm Snapdragon 778G`,
        battry: `4300`,
    },
    {
        name:"Nokia 9",
        image:"img/Nokia 9.png",
        price: `58,999`,
        rom:`128`,
        ram:`6`,
        processor:`Qualcomm SDM845 Snapdragon 845`,
        battry: `3320 `,
    },
    {
        name:"Google Pixel 5",
        image:"img/Google Pixel 5 5G.png",
        price: `64,298`,
        rom:`128`,
        ram:`8`,
        processor:`Qualcomm Snapdragon 765G`,
        battry: `4080`,
    },
    {
        name:"Meizu 18 Pro",
        image:"img/Meizu 18 pro.png",
        price: `65,999`,
        rom:`256`,
        ram:`8`,
        processor:`Snapdragon 888 5G chipset`,
        battry: `5000`,
    },
    {
        name:"Oppo Reno 6 Pro",
        image:"img/oppo Reno6 pro 5G.png",
        price: `42,990`,
        rom:`256`,
        ram:`12`,
        processor:`MediaTek MT6893 Dimensity 1200`,
        battry: `4500`,
    },
    {
        name:"ROG Phone 5s Pro",
        image:"img/Asus ROG Phone 5s Pro.png",
        price: `41,999`,
        rom:`512`,
        ram:`18`,
        processor:`Qualcomm Snapdragon 888+`,
        battry: `6000`,
    },
    {
        name:"iQOO 7",
        image:"img/iQOO 7 5G.jpg",
        price: `29,990`,
        rom:`128`,
        ram:`8`,
        processor:`Qualcomm Snapdragon 870`,
        battry: `4400`,
    },
    {
        name:"Nokia G10",
        image:"img/Nokia G10.jpg",
        price: `12,149`,
        rom:`64`,
        ram:`4`,
        processor:`Mediatek G25 8x A53 2.0GHz`,
        battry: `5050`,
    },
];

var brands = [
    {
        brandName:"Realme",
        icon:"icons/Realme.png",
    },
    {
        brandName:"Motorola",
        icon:"icons/Motorola.png",
    },
    {
        brandName:"Redmi",
        icon:"icons/Redmi.png",
    },
    {
        brandName:"ROG",
        icon:"icons/ROG.png",
    },
    {
        brandName:"Poco",
        icon:"icons/poco.jpg",
    },
    {
        brandName:"iPhone",
        icon:"icons/iPhone.png",
    },
    {
        brandName:"Samsung",
        icon:"icons/samsung.png",
    },
    {
        brandName:"OnePlus",
        icon:"icons/OnePlus.jpg",
    },
    {
        brandName:"OPPO",
        icon:"icons/OPPO.png",
    },
    {
        brandName:"meizu",
        icon:"icons/meizu.jpg",
    },
    {
        brandName:"Nokia",
        icon:"icons/Nokia.png",
    },
    {
        brandName:"Google",
        icon:"icons/Google.png",
    },
    {
        brandName:"honor",
        icon:"icons/honor.jpg",
    },
    {
        brandName:"iqoo",
        icon:"icons/iqoo.jpg",
    },
    {
        brandName:"vivo",
        icon:"icons/vivo.png",
    },
    {
        brandName:"Asus",
        icon:"icons/ASUS.png",
    },
];

const getImg=(()=>{
    remData.innerHTML=""
    data.innerHTML="";
    const createData = `<div class="col-md-6 d-flex justify-content-center"> 
                            <a class="imgBack d-flex justify-content-center" href="https://fanse-online-shop.netlify.app/${product[x].image}">
                                <img class="p-3" id="img" src="${product[x].image}" alt="img"/>
                            </a> 
                        </div>
                        <div class="col-md-5" id="Details">
                            <div class="p-1 fontSize1">${product[x].name}</div>
                            <p class="p-1"><span id="price"><b>Price:</b><span id="priceVal"> ₹${product[x].price}.00</span></span></p>
                            <p class="row p-1" id="rom"><span class="col-md-4 d-flex justify-content-start">RAM: ${product[x].ram} GB</span> <span class="col-md-8 d-flex justify-content-start">ROM: ${product[x].rom} GB</span></p>
                            <p class="p-1" id="processor">Processor: ${product[x].processor}</p>
                            <p class="p-1" id="battry">Battry: ${product[x].battry} mAh</p>
                            <div class="d-grid gap-2 d-md-block">
                                <button class="btn btn-warning btn-outline-dark m-2" type="button">Add to Cart</button>
                                <button class="btn btn-dark btn-outline-warning m-2" type="button">Buy Now</button>
                            </div>
                        </div>`;

    newCreateData=document.createElement('div');
    newCreateData.setAttribute("class","row");
    newCreateData.setAttribute("id","product");
    newCreateData.innerHTML=createData;
    data.append(newCreateData);
});

// func to pront thhe product datails
const getData=(()=>{
    const createData = `<div class="d-flex justify-content-center fontSize">${product[x].name}</div> 
                        <div class="p-3 d-flex justify-content-center bg-image hover-zoom"> 
                            <a class="d-flex justify-content-center" href="https://fanse-online-shop.netlify.app/${product[x].image}">
                                <img class="display" src="${product[x].image}" alt="img"/>
                            </a> 
                        </div> 
                        <div class="p-3 d-flex justify-content-center"> 
                            <button class="btn btn-warning" onclick="ViewDetails(${x})" type="button">View Details</button> 
                        </div> `;

    newCreateData=document.createElement('div');
    newCreateData.setAttribute("class","col-md-3");
    newCreateData.setAttribute("id","product");
    newCreateData.innerHTML=createData;
    data.append(newCreateData);
});


const home=(()=>{
    data.innerHTML="";
    // Defaule displays all Products.
    for (let i = 0; i < product.length; i++) {
            x=i;
            getData();
    };
});

home();

const brandData=((x)=>{
    const createData =
                    `<div class="p-2 d-flex justify-content-center"> 
                        <button class="btn btn-light icon" onclick="disply('${brands[x].brandName}')" id="searchBand" type="button">
                            <img id="icon" src="${brands[x].icon}" alt="icon"> 
                        </button> 
                    </div>`;
    newCreateData=document.createElement('div');
    newCreateData.setAttribute("class","col-md-2");
    newCreateData.setAttribute("id","product");
    newCreateData.innerHTML=createData;
    data.append(newCreateData);
});

const brand=(()=>{
    remData.innerHTML=""
    data.innerHTML="";
    for (let i = 0; i < brands.length; i++) {
        brandData(i);
    };
});

// Disply function to search mobiles with their brand name
const disply=((n)=>{
    console.log(n);
    data.innerHTML="";
    cap = n.toUpperCase();
    console.log(cap);
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
});

// search function.
const search=(()=>{
    garbage=0;
    data.innerHTML="";
    cap = searchData.value.toUpperCase();
    for (let i=0; i<product.length; i++){
        text=product[i].image;
        if(text.toUpperCase().indexOf(cap)>-1){
            x=i;
            getData();
        }
        else{
            garbage +=parseInt(text.toUpperCase().indexOf(cap));
            if(garbage>-product.length){
                createData ="";
            }
            else{
                error();
                console.log(garbage);
            }
        }
    }
});

//Adding Products to the cart
const ViewDetails=((n)=>{
    data.innerHTML="";
    x=n;
    getImg();
});


const error=(()=>{
    remData.innerHTML=""
    data.innerHTML="";
    const createData =
                    `<div class="row d-flex justify-content-center">
                        <img class="error mx-auto" src="Error 404/404 (${Math.floor(Math.random()*18)+1}).png" alt="">
                    </div>
                        <h3 class="row d-flex justify-content-center m-3">What is this..?</h3>`;
    newCreateData=document.createElement('div');
    newCreateData.setAttribute("class","row");
    newCreateData.innerHTML=createData;
    data.append(newCreateData);
    
});

function Open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
  }
  
  function Close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
  }
