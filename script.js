// Defining variables
let data = document.querySelector('.displyItoms');
let remData = document.querySelector('.head');
let searchData = document.querySelector("#searchData");
let searchBrand = document.querySelector("#searchBrand");
let createData="";
let newCreateData="";
let x="";

// Created my own Product object.
let product = [
    {
        name:"Realme x50 pro 5G",
        image:"img/Realme X50 Pro 5g.png",
        price: `₹41,999`,
        rom:`128 GB`,
        ram:`8 GB`,
        processor:`Qualcomm Snapdragon 865`,
        battry: `5000 mAh`,
    },
    {
        name:"Redmi Note10 Pro Max",
        image:"img/Redmi Note 10 Pro Max.png",
        price: `₹21,990`,
        rom:`128 GB`,
        ram:`6 GB`,
        Processor:`Qualcomm Snapdragon 732G`,
        battry: `5000 mAh`,
    },
    {
        name:"OnePlus 9 Pro 5G",
        image:"img/OnePlus 9 Pro 5G.png",
        price: `₹60,999`,
        rom:`128 GB`,
        ram:`8 GB`,
        processor:`Qualcomm Snapdragon 888 with Adreno 660 GPU`,
        battry: `4500 mAh`,
    },
    {
        name:"Realme 8i 5G",
        image:"img/Realme 8i 5G.png",
        price: `₹14,999`,
        rom:`128 GB`,
        ram:`6 GB`,
        processor:`MediaTek Helio G96`,
        battry: `5000 mAh`,
    },
    {
        name:"POCO M3 Pro",
        image:"img/POCO M3 Pro all.png",
        price: `₹16,499`,
        rom:`128 GB`,
        ram:`6 GB`,
        processor:`MediaTek Dimensity 700`,
        battry: `5000 mAh`,
    },
    {
        name:"Motorola G40 Fusion",
        image:"img/Motorola G40 Fusion.png",
        price: `₹14,999`,
        rom:`128 GB`,
        ram:`6 GB`,
        Processor:`Qualcomm Snapdragon 732G`,
        battry: `6000 mAh`,
    },
    {
        name:"Asus ROG Phone 5 Ultimate",
        image:"img/ROG Phone 5 Ultimate.png",
        price: `₹49,999`,
        rom:`128 GB`,
        ram:`8 GB`,
        Processor:`Qualcomm Snapdragon 888 (SM8350)`,
        battry: `6000 mAh`,
    },
    {
        name:"iPhone 13 Pro Max",
        image:"img/iPhone 13 Pro Max.png",
        price: `₹1,39,900`,
        rom:`256 GB`,
        ram:`256 GB`,
        Processor:`A15 Bionic Chip`,
        battry: `5000 mAh`,
    },
    {
        name:"Asus ROG Phone 3",
        image:"img/ROG Phone 3.png",
        price: `₹34,999`,
        rom:`128 GB`,
        ram:`8 GB`,
        Processor:`Qualcomm Snapdragon 865+ (SM8250)`,
        battry: `6000 mAh`,
    },
    {
        name:"Asus ROG Phone 5s Pro",
        image:"img/ROG Phone 5s Pro.png",
        price: `₹41,999`,
        rom:`512 GB`,
        ram:`18 GB`,
        processor:`Qualcomm Snapdragon 888+`,
        battry: `6000 mAh`,
    },
];

var brands = [
    {
        brandName:"Realme",
        icon:"icons/Realme.jpg",
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
        brandName:"Asus",
        icon:"icons/asus.jpg",
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
        icon:"icons/OPPO.jpg",
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
        icon:"icons/vivo.jpg",
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
                        <div class="col-md-6">
                            <h1 class="p-2">${product[x].name}.</h2>
                            <p class="p-2"><span id="price"><b>Price:</b><span id="priceVal"> ${product[x].price}/-</span></span></p>
                            <p class="p-2" id="rom"><span>RAM:${product[x].ram}.</span> <span>ROM: ${product[x].rom}.</span></p>
                            <p class="p-2" id="processor">Processor :${product[x].processor}</p>
                            <p class="p-2" id="battry">Battry : ${product[x].battry}.</p>
                        </div>`;

    newCreateData=document.createElement('div');
    newCreateData.setAttribute("class","row");
    newCreateData.setAttribute("id","product");
    newCreateData.innerHTML=createData;
    data.append(newCreateData);
});

// func to pront thhe product datails
const getData=(()=>{
    const createData = `<h4 class="d-flex justify-content-center">${product[x].name}</h4> 
                        <div class="p-3 d-flex justify-content-center bg-image hover-zoom"> 
                            <a href="https://fanse-online-shop.netlify.app/${product[x].image}">
                                <img id="display" src="${product[x].image}" alt="img"/>
                            </a> 
                        </div> 
                        <div class="p-3 d-flex justify-content-center"> 
                            <button class="btn btn-warning" onclick="ViewDetails(${x})" type="button">View Details</button> 
                        </div> `;

    newCreateData=document.createElement('div');
    newCreateData.setAttribute("class","col-md-4");
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
    console.log(searchData.value);
    data.innerHTML="";
    cap = searchData.value.toUpperCase();
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

//Adding Products to the cart
const ViewDetails=((n)=>{
    data.innerHTML="";
    x=n;
    getImg();
});
