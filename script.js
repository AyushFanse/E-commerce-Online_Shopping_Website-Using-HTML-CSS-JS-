// Defining variables
let data = document.querySelector('.displayItoms');
let brandDataPage = document.querySelector('.displayBrands');
let cartContainer = document.querySelector('.cartDetails');
let searchData = document.querySelector("#searchData");
let searchBrand = document.querySelector("#searchBrand");
let supPop = document.querySelector("sup");
let itemQty = document.querySelector(".qty");
let createData="", newCreateData="", garbage=0, errImg=22, x="",popo="", cartDataCollection="";
let cartSuper = localStorage.getItem("cartSuper") ? JSON.parse(localStorage.getItem("cartSuper")) :[];
const nameOfTheProduct = name => cartSuper.indexOf(cartSuper.find(n=>n.name===name));

// Created my own Product Array objects.
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
        image:"img/POCO M3 Pro 5G.png",
        price: `16,499`,
        rom:`128`,
        ram:`6`,
        processor:`MediaTek Dimensity 700`,
        battry: `5000`,
    },
    {
        name:"Motorola G40 Fusion",
        image:"img/Motorola G40 Fusion.png",
        price: `16,599`,
        rom:`128`,
        ram:`6`,
        processor:`Qualcomm Snapdragon 732G`,
        battry: `6000`,
    },
    {
        name:"ROG Phone 5 Ultimate",
        image:"img/Asus ROG Phone 5 Ultimate.png",
        price: `49,999`,
        rom:`128`,
        ram:`8`,
        processor:`Qualcomm Snapdragon 888 (SM8350)`,
        battry: `6000`,
    },
    {
        name:"iPhone 13 Pro Max",
        image:"img/Apple iPhone 13 Pro Max.png",
        price: `1,39,900`,
        rom:`256`,
        ram:`6`,
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
        image:"img/Oppo Reno6 pro 5G.png",
        price: `42,990`,
        rom:`256`,
        ram:`12`,
        processor:`MediaTek MT6893 Dimensity 1200`,
        battry: `4500`,
    },
    {
        name:"ROG Phone 5s Pro",
        image:"img/Asus ROG Phone 5s pro.png",
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
    {
        name:"Vivo V21 5G",
        image:"img/VIVO V21 5G.jpg",
        price: `29,990`,
        rom:`128`,
        ram:`8`,
        processor:`MediaTek Dimensity 800U`,
        battry: `4000`,
    },
    {
        name:"Vivo V21 Pro",
        image:"img/Vivo V21 Pro 5G.jpg",
        price: `32,990`,
        rom:`128`,
        ram:`8`,
        processor:`MediaTek Dimensity 800U`,
        battry: `4300`,
    },
    {
        name:"Samsung Galaxy A72",
        image:"img/Samsung galaxy A72.jpg",
        price: `34,999`,
        rom:`128`,
        ram:`8`,
        processor:`Qualcomm Snapdragon 720G`,
        battry: `5000`,
    },
    {
        name:"Realme GT Neo 2",
        image:"img/Realme GT Neo 2 5G.jpg",
        price: `31,999`,
        rom:`128`,
        ram:`8`,
        processor:`Qualcomm Snapdragon 870`,
        battry: `5000`,
    },
];

// Created my own Brand Array object.
let brands = [
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
        brandName:"Asus ROG",
        icon:"icons/ROG.png",
    },
    {
        brandName:"Poco",
        icon:"icons/poco.jpg",
    },
    {
        brandName:"Apple iPhone",
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
        brandName:"MEIZU",
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
        brandName:"Honor",
        icon:"icons/honor.jpg",
    },
    {
        brandName:"IQOO",
        icon:"icons/iqoo.jpg",
    },
    {
        brandName:"Vivo",
        icon:"icons/vivo.png",
    },
    {
        brandName:"Asus",
        icon:"icons/ASUS.png",
    },
];


//Overlayer functions.
function Open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}

function Close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}


//Templates for the screen displays.

//Home Page Display Template.
const getImgTemp=(()=>{
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
                                <button class="btn btn-warning btn-outline-dark m-2" type="button" onclick="addToCart(x)">Add to Cart</button>
                                <button class="btn btn-dark btn-outline-warning m-2" type="button">Buy Now</button>
                            </div>
                        </div>`;
    newCreateData=document.createElement('div');
    newCreateData.setAttribute("class","row");
    newCreateData.setAttribute("id","product");
    newCreateData.innerHTML=createData;
    return newCreateData;
});

//View Details template for the Home Page.
const tempDisplay=(()=>{
    const createData = `<div class="d-flex justify-content-center fontSize p-4">${product[x].name}</div> 
                        <div class="p-3 d-flex justify-content-center dispImg bg-image hover-zoom"> 
                            <a class="d-flex justify-content-center beforeDisplay" href="https://fanse-online-shop.netlify.app/${product[x].image}">
                                <img class="display" src="${product[x].image}" alt="img"/>
                            </a> 
                        </div> 
                        <div class="p-4 d-flex justify-content-center"> 
                            <button class="btn btn-warning viewDetails" onclick="ViewDetails(${x})" type="button">View Details</button> 
                        </div> `;
    newCreateData=document.createElement('div');
    newCreateData.setAttribute("class","col-md-3");
    newCreateData.setAttribute("id","product");
    newCreateData.innerHTML=createData;
    return newCreateData;
});

//Brand Page Display Template.
const brandDataTemp=((x)=>{
    const createBrand =
                    `<div class="p-2 d-flex justify-content-center"> 
                    <button class="btn btn-light icon" onclick="display('${brands[x].brandName}')" id="searchBand" type="button">
                    <img id="icon" src="${brands[x].icon}" alt="icon"> 
                    </button> 
                    </div>`;
    newCreateBrand=document.createElement('div');
    newCreateBrand.setAttribute("class","col-md-2");
    newCreateBrand.setAttribute("id","product");
    newCreateBrand.innerHTML=createBrand;
    brandDataPage.append(newCreateBrand);
});

//Cart Page Display Template.
const tempCart=((item)=>{
    const createdData = `<div class="mainCart d-flex justify-content-center row m-4">
                            <div class="remove d-flex justify-content-end"><span id="remove" onclick="remove(${item.name})"><i class="fas fa-times"></i></span></div>
                            <div class="img  d-flex justify-content-center col-md-2 p-3 bg-image hover-zoom">
                                <img class="cartDisplay" src="${product[item.name].image}" alt="img"/>
                            </div>
                            <div class="col-md-6 p-4" id="detailsCart">
                                <div class="row p-2 DetailsCart">
                                    <form action="">
                                        <div class="col-md">
                                            <div class=" fontSize1Cart">${product[item.name].name}</div>
                                            <p class="row" id="romCart"><span class="col-md-4 d-flex justify-content-start">RAM: ${product[item.name].ram} GB</span> <span class="col-md d-flex justify-content-start">ROM: ${product[item.name].rom} GB</span></p>
                                            <p class="" id="processorCart">Processor: ${product[item.name].processor}</p>
                                            <p class=""><span id="priceCart"><b>Price:</b><span id="priceVal2"> ₹${product[item.name].price}.00</span></span></p>
                                        </div>                                        
                                    </form>
                                </div>
                                <div class="row">
                                    <button class="btn btn-dark btn-outline-warning d-flex justify-content-center col-md-8 buyNow" type="button">Place Order</button>                 
                                </div>
                            </div>
                            <div class="bill  d-flex justify-content-center col-md-3 p-3">
                                <div class="col">
                                    <div class="row p-2">
                                        <table class="table-responsive">
                                            <tbody class="col-md-12">
                                                <tr>
                                                    <td class="col-md-6 border-bottom">Price</td>
                                                    <td class="col-md-6 border-bottom">₹${product[item.name].price}/-</td>
                                                </tr>
                                                <tr>
                                                    <td class="col-md-6 border-bottom">Tax</td>
                                                    <td class="col-md-6 border-bottom">₹18/-</td>
                                                </tr>
                                                <tr>
                                                    <td class="col-md-6 border-bottom">Delivery Charge</td>
                                                    <td class="col-md-6 border-bottom">Free</td>
                                                </tr>
                                                <tr>
                                                    <td class="col-md-6 border-bottom">Qty</td>
                                                    <td class="col-md-6 border-bottom">
                                                        <div class="qtyCount d-flex justify-content-center">
                                                        <div class="minus" onclick="minus(${item.name})"><i class="fas fa-minus-circle m-1"></i></div>
                                                        <div><input class="qty" type="text" value="${item.qty}" disabled></div>
                                                        <div class="plus"  onclick="plus(${item.name})"><i class="fas fa-plus-circle m-1"></i></div></div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th class="col-md-6">Total</th>
                                                    <th class="col-md-6">₹${commaSeparatorTemp(((product[item.name].price).replaceAll(",","")*item.qty+18))}/-</th>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <footer class="row placeOrder">
                                        <button class="btn btn-dark btn-outline-warning d-flex justify-content-center col-md-8 buyNow1" type="button">Place Order</button>                 
                                    </footer>
                                </div>
                            </div>
                        </div>`;
    newCreatedData=document.createElement('div');
    newCreatedData.innerHTML=createdData;
    return newCreatedData;
}); 

const commaSeparatorTemp = ((n)=>{
	n = n + "";    
    let a = n.split("").reverse().join("");
    let b ="";
    for (var i = 0; i <a.length; i++) {
        if(i+1!==a.length && i%2==0 && i!=0){
            b+=a[i]+",";
        }
        else{
            b+=a[i];
    }   }
    return b.split("").reverse().join("");
});

//Invalide Search display Template.
const tempError=(()=>{
    data.innerHTML="";
    const createData =
                    `<h2 class="row d-flex justify-content-center m-3" id="errorImg">It's hard to find...!</h2>
                    <div class="row d-flex justify-content-center">
                    <img class="error mx-auto" src="Error 404/404 (${Math.floor(Math.random()*errImg)+1}).png" alt="">
                    </div>`;
    newCreateData=document.createElement('div');
    newCreateData.setAttribute("class","row");
    newCreateData.innerHTML=createData;
    return newCreateData;
});

//Default called Functions.

// Function to print brands.
const brand=(()=>{
    brandDataPage.innerHTML="";
    for (let i = 0; i <brands.length; i++) {
        brandDataTemp(i);
    };
});

//Function to append data to the home page.
const getData=(()=>{
    data.append(tempDisplay());
});

//Function to print the product datails.
const home=(()=>{
    // Defaule displays all Products.
    for (let i = 0; i < product.length; i++) {
            x=i;
            getData();
        }
});

//Function to Display Items by default.
const ditect=(()=>{
    if(data) home();
    // else if(cartContainer) popCount();
    else if (brandDataPage) brand();
});

ditect();

//Default Function for the Cart.
const popCount=(()=>{
    if(cartContainer){
        for(let u=0;u<cartSuper.length;u++){
            cartContainer.append(tempCart(cartSuper[u]));
    }
    }
    else{
    supPop.innerHTML ="";
    cartSuper.reduce((accu,itemNum)=>accu+=itemNum.qty,0)>0 ? supPop.append(cartSuper.reduce((accu,itemNum)=>accu+=itemNum.qty,0)) : supPop.append(0);
    }
});

popCount();

// All Home Page functions.

//Function to Display Item's On the Home Page.
const getImgForDisplay=(()=>{
    data.append(getImgTemp());
});

// search function.
const search=(()=>{
    garbage=0;
    data.innerHTML="";
    cap = searchData.value.toUpperCase();
    for (let i=0; i<product.length; i++){
        text=product[i].image;
        strorage=product[i].processor;
        if(text.toUpperCase().indexOf(cap)>-1){
            x=i;
            getData();
        }
        else if(strorage.toUpperCase().indexOf(cap)>-1){
            x=i;
            getData();
        }
        else{
            garbage +=parseInt(text.toUpperCase().indexOf(cap));
            // console.log(product.length);
            // console.log(garbage);
            if(garbage>-product.length){
                createData ="";
            }
            else{
                error();
    }   }   }
});

//Function for error Messages.
const error=(()=>{
    data.append(tempError());
 });

// All Brand Page functions..

//Function to Display Brands's On the Home Page.
const getBrand=(()=>{
    brandDataPage.append(tempDisplay());
});

const getImgForBrand=(()=>{
    brandDataPage.append(getImgTemp());
});

// Display function to search mobiles with their brand name.
const display=((n)=>{
    brandDataPage.innerHTML="";
    cap = n.toUpperCase();
    for (let i=0; i<product.length; i++){
        text=product[i].image;
        if(text.toUpperCase().indexOf(cap)>-1){
            x=i;
            getBrand();
        }
        else{
            createData="none";
    }   }
});

//Function to search brands.
const searchBrands=(()=>{
    garbage=0;
    brandDataPage.innerHTML="";
    cap = searchBrand.value.toUpperCase();
    for (let i=0; i<brands.length; i++){
        text=brands[i].brandName;
        if(text.toUpperCase().indexOf(cap)>-1){
            x=i
            brandDataTemp(x);
        }
        else{
            garbage +=parseInt(text.toUpperCase().indexOf(cap));
            if(garbage>-brands.length){
                createData ="";
            }
            else{
                brandError();
}   }   }
});

//Function For Error Messages.
const brandError=(()=>{
    brandDataPage.append(tempError());
});

// All Cart Page functions.
const addToCart= name =>{
    if(cartSuper.length > 0){
        nameOfTheProduct(name)>-1?cartSuper[nameOfTheProduct(name)].qty+=1 :cartSuper.push({name,qty:1});
    }
    else{
        cartSuper.push({name,qty:1});
    }
    localStorage.setItem('cartSuper',JSON.stringify(cartSuper));
    
    popCount();
};

//Adding Products to the cart.
const ViewDetails=((n)=>{
    if(data){
        data.innerHTML="";
        x=n;
        getImgForDisplay();       
    }
    else if (brandDataPage) {
        brandDataPage.innerHTML="";
        x=n;
        getImgForBrand();
    }
});

// Function to Reduce the quantity.
const subToCart= name =>{
    
    if(cartSuper.length > 0){
        nameOfTheProduct(name)>-1?cartSuper[nameOfTheProduct(name)].qty-=1 :cartSuper.push({name,qty:1});
    }

    else if(qty>0){
        cartSuper.push({name,qty:1});
    }
    localStorage.setItem('cartSuper',JSON.stringify(cartSuper));
    
    popCount();
    
}

// Function to reset the cart page.
const reset = (()=>{
    cartContainer.innerHTML="";
    localStorage.removeItem(`cartSuper`);
})

// Function to remove the Item's from the cart.
const remove = ((x)=>{
    for(let i=0; i<cartSuper.length; i++){
        if(x===cartSuper[i].name){
            cartSuper.splice(i, 1);
        }   }
    
    cartContainer.innerHTML="";
    localStorage.setItem("cartSuper",JSON.stringify(cartSuper));
    popCount();
});

// Function to increasing the number of Quantity of the Item.
const plus=((x)=>{
    cartContainer.innerHTML="";
    addToCart(x);
});

// Function to decreasing the number of Quantity of the Item.
const minus=((x)=>{
    if(cartSuper[nameOfTheProduct(x)].qty>1){
    cartContainer.innerHTML="";
    subToCart(x);
    }
    else{
        console.log(x);
        remove(x);
    }
});
