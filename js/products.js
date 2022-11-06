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

const PRODUCTS_URL_2 = "https://japceibal.github.io/emercado-api/cats_products/" + localStorage.getItem("catID") + ".json";

console.log(PRODUCTS_URL_2)

const CAR_PRODUCTS_URL = "https://japceibal.github.io/emercado-api/cats_products/101.json"

 //INICIO ENTREGA 3

 function setProdID(id) {
    localStorage.setItem("ProductsID", id);
    window.location = "product-info.html"
}

//FIN ENTREGA 3


const ORDER_ASC_BY_COST = "12";
const ORDER_DESC_BY_COST = "21";
const ORDER_DESC_BY_SOLDCOUNT = "Precio";
let currentProductsArray = [];
let currentProducts2Array = [];
let currentSortCriteria = undefined;
let minCount = undefined;
let maxCount = undefined;

function sortProducts(criteria, array){
    let result = [];
    if (criteria === ORDER_DESC_BY_COST)
    {
        result = array.sort(function(a, b) {
            if ( a.cost < b.cost){ return -1; }
            if ( a.cost > b.cost ){ return 1; }
            return 0;
        });
    }else if (criteria === ORDER_ASC_BY_COST){
        result = array.sort(function(a, b) {
            if ( a.cost > b.cost ){ return -1; }
            if ( a.cost < b.cost ){ return 1; }
            return 0;
        });
    }else if (criteria === ORDER_DESC_BY_SOLDCOUNT){
        result = array.sort(function(a, b) {
            let aCount = parseInt(a.soldCount);
            let bCount = parseInt(b.soldCount);

            if ( aCount > bCount ){ return -1; }
            if ( aCount < bCount ){ return 1; }
            return 0;
        });
    }

    return result;
}




function showProducts(){

    let htmlContentToAppend = "";
    for(let i = 0; i < currentProducts2Array.length; i++){
        let product = currentProducts2Array[i];
        if (((minCount == undefined) || (minCount != undefined && parseInt(product.cost) >= minCount)) &&
            ((maxCount == undefined) || (maxCount != undefined && parseInt(product.cost) <= maxCount))){

        console.log(product)
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
        document.getElementById("products-list-container").innerHTML=htmlContentToAppend
        document.getElementById("products-list-container_2").innerHTML=product_name_html
    }}



    function sortAndShowProducts(sortCriteria, Products2Array){
        //currentSortCriteria empieza undefined
        currentSortCriteria = sortCriteria;
    
        if(Products2Array != undefined){
            currentProducts2Array = Products2Array;
        }
    
        currentProducts2Array = sortProducts(currentSortCriteria, currentProducts2Array);
        console.log(currentProducts2Array)
        //Muestro los productos ordenados
        showProducts();
    }
    


document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCTS_URL_2).then(function(resultObj){
        if (resultObj.status === "ok"){
            currentProductsArray = resultObj.data
            //console.log(currentProductsArray)
            //localStorage.getItem("catID");
            currentProducts2Array = currentProductsArray.products
            console.log(currentProducts2Array)
            showProducts();
        }
    });

    document.getElementById("sortAsc").addEventListener("click", function(){
        sortAndShowProducts(ORDER_ASC_BY_COST);
    });

    document.getElementById("sortDesc").addEventListener("click", function(){
        sortAndShowProducts(ORDER_DESC_BY_COST);
    });

    document.getElementById("sortByCount").addEventListener("click", function(){
        sortAndShowProducts(ORDER_DESC_BY_SOLDCOUNT);
    });

    document.getElementById("clearRangeFilter").addEventListener("click", function(){
        document.getElementById("rangeFilterCountMin").value = "";
        document.getElementById("rangeFilterCountMax").value = "";

        minCount = undefined;
        maxCount = undefined;

        showProducts();

    document.getElementById("rangeFilterCount").addEventListener("click", function(){
            //Obtengo el mínimo y máximo de los intervalos para filtrar por precio
            //por producto.
            minCount = document.getElementById("rangeFilterCountMin").value;
            console.log(minCount)
            maxCount = document.getElementById("rangeFilterCountMax").value;
            console.log(maxCount)
    
            if ((minCount != undefined) && (minCount != "") && (parseInt(minCount)) >= 0){
                minCount = parseInt(minCount);
            }
            else{
                minCount = undefined;
            }
    
            if ((maxCount != undefined) && (maxCount != "") && (parseInt(maxCount)) >= 0){
                maxCount = parseInt(maxCount);
            }
            else{
                maxCount = undefined;
            }
    
            showProducts();
        });

})});

//BUSCADOR DESAFIATE ENTREGA 2 SIN TERMINAR

//let search_1 = document.getElementById("search_value");
//let search_2 = search_1.value


/*console.log(currentProducts2Array)
    
document.getElementById("search_value").addEventListener("input",(evt) => {
    searchProduct ()
    }
    )


let result_search=document.getElementById("result-search")
let currentProducts3Array = []
let currentProducts4Array = []


function searchProduct() {

        getJSONData(PRODUCTS_URL_2).then(function(resultObj){
                currentProductsArray = resultObj.data
                currentProducts2Array = currentProductsArray.products
                console.log(currentProducts2Array) 
                let search_value_var = document.getElementById("search_value").value
                console.log(search_value_var)
    })

    if (currentProducts2Array.indexOf(document.getElementById("search_value").value) !== -1){
        currentProducts2Array.filter((value) => value === search_value_var)
    }else{
        result_search.innerHTML += "No se encontraron resultados"
    }

    }*/
    
   
    let var_user_menu = document.getElementById("menu_user_2")
    let get_ls = localStorage.getItem("text");
    console.log(get_ls)
    var_user_menu.innerHTML += get_ls

    
    



