/*
const CATEGORIES_URL = "https://japceibal.github.io/emercado-api/cats/cat.json";
const PUBLISH_PRODUCT_URL = "https://japceibal.github.io/emercado-api/sell/publish.json";
const PRODUCTS_URL = "https://japceibal.github.io/emercado-api/cats_products/";
const PRODUCT_INFO_URL = "https://japceibal.github.io/emercado-api/products/";
const PRODUCT_INFO_COMMENTS_URL = "https://japceibal.github.io/emercado-api/products_comments/";
const CART_INFO_URL = "https://japceibal.github.io/emercado-api/user_cart/";
const CART_BUY_URL = "https://japceibal.github.io/emercado-api/cart/buy.json";
const EXT_TYPE = ".json";
*/

const CAR_PRODUCTS_URL = "https://japceibal.github.io/emercado-api/cats_products/101.json"
//const PRODUCTS_URL = "https://japceibal.github.io/emercado-api/cats_products/";

//const alert_heading = document.getElementsByClassName("alert-heading");


function showProducts(){

    let htmlContentToAppend = "";
    for(let i = 0; i < currentAutosArray.length; i++){
        let product = currentAutosArray[i];
        //console.log(product)
            htmlContentToAppend += `
            <div onclick="setProdID(${product.id})" class="list-group-item list-group-item-action cursor-active">
                <div class="row">
                    <div class="col-3">
                        <img src="${product.image}" alt="${product.description}" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">${product.name}${'-  '}${product.currency}${'  '}${product.cost}</h4>
                            <small class="text-muted">${product.soldCount} vendidos</small>
                        </div>
                        <p class="mb-1">${product.description}</p>
                    </div>
                </div>
            </div>
            `
        }
        let product_name=currentProductsArray.catName;
        //console.log(product_name)
        //console.log(product_name);
        //genero variable para introducir título
        //comilla invertida para que dirija al html
        let product_name_html=
        `
        <br>
        <div class="center"><h2>Productos</h2></div>
        <div class="center">Verás aquí todos los productos de la categoría ${product_name}</div>
        <br>
        `;
        document.getElementById("products-list-container").innerHTML=product_name_html+htmlContentToAppend
        
    }


document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(CAR_PRODUCTS_URL).then(function(resultObj){
        if (resultObj.status === "ok"){
            currentProductsArray = resultObj.data
            //console.log(currentProductsArray)
            currentAutosArray = currentProductsArray.products
            //console.log(currentAutosArray)
            showProducts();
        }
    })})


