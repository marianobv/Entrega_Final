//const PRODUCT_INFO_URL = "https://japceibal.github.io/emercado-api/products/"
//const PRODUCT_INFO_COMMENTS_URL = "https://japceibal.github.io/emercado-api/products_comments/";

const lsgetitem = localStorage.getItem("ProductsID")
const PRODUCT_INFO_URL_2 = "https://japceibal.github.io/emercado-api/products/"+ lsgetitem + ".json";
console.log(PRODUCT_INFO_URL_2)

//Ejemplo URL OBJETIVO
//https://japceibal.github.io/emercado-api/products/50921.json

//Ejemplo URL OBJETIVO
//https://japceibal.github.io/emercado-api/products_comments/50921.json

const PRODUCT_INFO_COMMENTS_URL_2 = "https://japceibal.github.io/emercado-api/products_comments/" + localStorage.getItem("ProductsID") + ".json";


function setProdID(id) {
  localStorage.setItem("ProductsID", id);
  window.location = "product-info.html"
}

// INICIO CLICK "COMPRAR"
function storage(){
let ls1 = currentProducts_Info.images[0]
let ls2 = currentProducts_Info.name
let ls3 = currentProducts_Info.cost
let arreglo = [ls1,ls2,ls3]
localStorage.setItem("array",JSON.stringify(arreglo))
}





document.getElementById("buy").addEventListener("click", function(e){
  console.log(currentProducts_Info)
  window.location = "cart.html"
  storage()
  
  
})

// FIN CLICK "COMPRAR"

function showProducts_info(){


let htmlContentToAppend1 = "";

htmlContentToAppend1 +=
`
<br>
<br>
<div>
<h2>${currentProducts_Info.name}<h2>
</div>
<br>
<br>
<h5><strong><label>Precio</label></strong></h5>
<h7>${currentProducts_Info.cost}<h7>
<br>
<br>
<h5><strong><label>Descripción</label></strong></h5>
<h7>${currentProducts_Info.description}<h7>
<br>
<br>
<h5><strong><label>Categoría</label></strong></h5>
<h7>${currentProducts_Info.category}<h7>
<br>
<br>
<h5><strong><label>Cantidad de vendidos</label></strong></h5>
<h7>${currentProducts_Info.soldCount}<h7>
<br>
<br>
<h5><strong><label>Imagenes ilustrativas</label></strong></h5>
<br>
`
//Armo arrray Imagenes reducido

let images_array = currentProducts_Info.images

htmlContentToAppend2 = "";

htmlContentToAppend2 += `

<div class="card" id="card1">
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="${images_array[0]}" class="d-block w-100" alt="imagen1">
    </div>
    <div class="carousel-item">
      <img src="${images_array[1]}" class="d-block w-100" alt="imagen2">
    </div>
    <div class="carousel-item">
      <img src="${images_array[2]}" class="d-block w-100" alt="imagen3">
    </div>
    <div class="carousel-item">
      <img src="${images_array[3]}" class="d-block w-100" alt="imagen4">
    </div>
  </div>

  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev" class="controles">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span style="color:black;"><<<</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next" style="color:black;" class="controles">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span style="color:black;">>>></span>
  </button>
</div>
</div>
`


document.getElementById("products-list-container").innerHTML = htmlContentToAppend1 + htmlContentToAppend2

}



function showProducts_comments(){

let htmlContentToAppend3 = "";

htmlContentToAppend3 +=
`
<br>
<br>
<br>
<h5><label>Comentarios</label></h5>
`
let add_subtotal2 = ""
let htmlContentToAppend5 = ""
let htmlstar = ""

for(i=0; i < currentProductsComments_Info.length; i++){
    let comment_info = currentProductsComments_Info[i]

if(comment_info.score===1){
        
    htmlstar = ""
        htmlstar +=
        `
        
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
        
        `
       

        }else if(comment_info.score===2){
           
        htmlstar = ""
            htmlstar +=
            `
            
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            
            `
        
        }else if(comment_info.score===3){
            
            htmlstar = ""
            htmlstar +=
            `
            
            <span class="fa fa-star checked" ></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            
            `
            
        }else if(comment_info.score===4){
        htmlstar = ""
        htmlstar +=
            `
            
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            
            `
        }else{
        htmlstar = ""
        htmlstar +=
            `
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            ` 
        }

        console.log(htmlstar)

    add_subtotal2 += 
    `
    <table>

    <tr>
    <th></th>
    </tr>

    <tr>
    <td><div>${comment_info.user}${'   '}${comment_info.dateTime}${'   '}${htmlstar}</div></td>
    </tr>

    <tr>
    <td><div>${comment_info.description}</div></td>
    </tr>

    </table>
    `
    
        }


    document.getElementById("products-list-container_2").innerHTML = htmlContentToAppend3+add_subtotal2

}

function showRelated_products(){
    let related_products_array = currentProducts_Info.relatedProducts
    console.log(related_products_array)
    let title_prod_rel = ""
    title_prod_rel += `
    <hr>
    <br>
    <h5><label>Productos relacionados</label></h5>
    `

    htmlContentToAppend6=""
    

    for(let i = 0; i < related_products_array.length; i++){
        let relatedProduct = related_products_array[i]
        

    htmlContentToAppend6 +=
    `
    <div class="card" id="card1">
            <div onclick="setProdID(${relatedProduct.id})"><img src="${relatedProduct.image}" class="image_rel" id="${relatedProduct.id}"></div>
            <div>${relatedProduct.name}</div>        
    </div>
    </div>

    `

    htmlContentToAppend7=""
    htmlContentToAppend7 +=`
  <div class="card" id="card2">
    <div id="carouselExampleControls2" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="1000">
      <img src="${related_products_array[0].image}" class="d-block w-100" alt="img1">
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="${related_products_array[1].image}" class="d-block w-100" alt="img2">
    </div>
  </div>s

  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="prev" class="controles">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span style="color:black;"><<<</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="next" style="color:black;" class="controles">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span style="color:black;">>>></span>
  </button>
</div>
</div>
`

    }

document.getElementById("related_products_title").innerHTML = title_prod_rel
    document.getElementById("products-list-container_4").innerHTML = htmlContentToAppend6
    document.getElementById("products-list-container_5").innerHTML = htmlContentToAppend7
    
}


//Enviar comentarios a la página



let option_=document.getElementById("option")
console.log(option)
let option2= option.value
console.log(option2)

function htmlstar_function(){

                      if(option2 === 1){
                       return
                   
                        `
                        
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        
                        `
                      
                
                        }else if(option2 === 2){
                        return
                       
                            `
                            
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                            
                            `
                        
                        }else if(option2 === 3){
                          return
                           
                            `
                            
                            <span class="fa fa-star checked" ></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                            
                            `
                            
                        }else if(option2 === 4){
                          return
                            `
                            
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                            
                            `
                        }else{
                          return
                            `
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            ` 
                        }
}




//FUNCION AÑADIR COMENTARIO
function addComment() {

                
                let textarea_value =document.getElementById("textarea").value
                console.log(textarea_value)
                
                let glstorage = localStorage.getItem("text")
                console.log(glstorage)
                

                        today = new Date()
                        console.log(today)
                        today_date= today.toISOString().replace(/T/,' ').replace(/\..+/,'')
                        console.log(today_date)

                        starsadd = htmlstar_function()

                        let send_comment = ""
                        send_comment +=
                        `
                        <table>
                    
                        <tr>
                        <th></th>
                        </tr>
                    
                        <tr>
                        <td><div>${glstorage}${'   '}${today_date}${'   '}${starsadd}</div></td>
                        </tr>
                    
                        <tr>
                        <td><div>${textarea_value}</div></td>
                        </tr>
                    
                        </table>
                        `

                        document.getElementById("products-list-container_2b").innerHTML = send_comment

                      }
                        
                
                    


document.addEventListener("DOMContentLoaded", function(e){

    getJSONData(PRODUCT_INFO_URL_2).then(function(resultObj){
        if (resultObj.status === "ok"){
            currentProducts_Info = resultObj.data
            console.log(currentProducts_Info)
            showProducts_info()   
        
    }})


    
        getJSONData(PRODUCT_INFO_COMMENTS_URL_2).then(function(resultObj){
            if (resultObj.status === "ok"){
                currentProductsComments_Info = resultObj.data
                console.log(currentProductsComments_Info)
                showProducts_comments()
            
        }})

    
            getJSONData(PRODUCT_INFO_URL_2).then(function(resultObj){
                if (resultObj.status === "ok"){
                    currentProducts_Info = resultObj.data
                    console.log(currentProducts_Info)
                    showRelated_products() 

                
            }})

    
      document.getElementById("enviar_form").addEventListener("click",function(){
              addComment()
            });
            
          });


          
   



let var_user_menu = document.getElementById("menu_user_2")
let get_ls = localStorage.getItem("text");
console.log(get_ls)
var_user_menu.innerHTML += get_ls
                

