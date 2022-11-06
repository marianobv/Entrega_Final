
const CART_INFO_URL_2 = "https://japceibal.github.io/emercado-api/user_cart/25801.json";


let add_second_table = ""

let ls_name = localStorage.getItem(localStorage.getItem("ProductsID") + "name")
let ls_image = localStorage.getItem(localStorage.getItem("ProductsID") + "img")
let ls_cost = localStorage.getItem(localStorage.getItem("ProductsID") + "cost")

////TABLA CON EL ELEMENTO CAR PEUGEOT///////
function show_cart(){
    let htmlContenttoAppend2 = ""
    for(let i = 0; i < currentCart_2.length; i++){
    let cart=currentCart_2[i];
    htmlContenttoAppend2 +=`
    <td id="img_second_table"><img src="${cart.image}" alt="Peugeot 208" id="img_element"></td>
    <td  class="td1">${cart.name}</td>
    <td class="td1">${cart.currency}${" "}${cart.unitCost}</td>

    <td class="td1">
    <input id="first_element_quantity" maxlength="15" oninput="calculate_Subtotal()"> 
    <div id="invalidCheckFeedback" class="invalid-feedback">Debe seleccionar una cantidad!</div>
    <div id="validCheckFeedback" class="valid-feedback">Cantidad seleccionada correctamente ✓</div>
     </td>

    <td class="td1"><div id="subtotal1"></div></td>
    <td><button class="btn btn-danger btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete"><i class="fa fa-trash"></i></button></td>
    `
}
document.getElementById("insert_tr").innerHTML=htmlContenttoAppend2
}

//////TABLA CON NUEVOS ELEMENTOS///////
function new_Card(){

let array_ls = JSON.parse(localStorage.getItem("array"))
console.log(array_ls)

    add_second_table +=
     
    `
    <tr>
    <td id="img_second_table" class="th1"><img src="${array_ls[0]}" alt="Peugeot 208" id="img_element"></td>
    <td class="td1">${array_ls[1]}</td>
    <td  class="td1">USD <span id="newproduct_unit_cost">${array_ls[2]}</span></td>

    <td class="td1 width">
    <input id="new_element_quantity" maxlength="2" class="length_count" oninput="calculate_Subtotal()">
    <div id="invalidCheckFeedback" class="invalid-feedback">Debe seleccionar una cantidad!</div>
    <div id="validCheckFeedback" class="valid-feedback">Cantidad seleccionada correctamente ✓</div>
    </td>

    </td>

    <td class="td1"><div id="newproduct_subtotal" class="length"></div></td>
    <td><button class="btn btn-danger btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete"><i class="fa fa-trash"></i></button></td>
    </tr>
    `
    document.getElementById("second_table").innerHTML=add_second_table

    document.getElementById("new_element_quantity").addEventListener("input",function(){              
        let add_subtotal2=""
        let unit_cost = parseInt(array_ls[2])
        let new_element_cost_value = document.getElementById("new_element_quantity").value
        let subtotal2 = Math.round(parseInt(new_element_cost_value)*unit_cost)
        add_subtotal2+=
        `<strong>${"USD"}${" "}${subtotal2}</strong>`
        document.getElementById("newproduct_subtotal").innerHTML=add_subtotal2
    })
}
    

/////CÁLCULO SUBTOTAL//////////
function calculate_Subtotal(){

   if(localStorage.getItem('array') !== null)
   {
   let array_ls = JSON.parse(localStorage.getItem("array"))
   let cost2 = parseInt(array_ls[2])
   let new_element_quantity = document.getElementById("new_element_quantity").value

    append_subtotal=""
    for(let i = 0; i < currentCart_2.length; i++){
    let cart2=currentCart_2[i];
    let subtotal = Math.round(first_element_quantity.value*cart2.unitCost)
    append_subtotal+=
    Math.round(subtotal+new_element_quantity*cost2)
    }
    document.getElementById("row1").innerHTML= append_subtotal
    deliverCost()
    
    }else{

    append_subtotal=""  
    for(let i = 0; i < currentCart_2.length; i++)
    {
    let cart2=currentCart_2[i];
    let subtotal = Math.round(first_element_quantity.value*cart2.unitCost)
    append_subtotal+=
    Math.round(subtotal)
    }
    document.getElementById("row1").innerHTML= append_subtotal
    deliverCost()
    
    }

}

/////CÁLCULO COSTO DE ENVÍO////////
function deliverCost(){

    let envio1 = document.getElementById("deliver1")
    let envio2= document.getElementById("deliver2")
    let envio3 = document.getElementById("deliver3")
    let cost_deliver = document.getElementById("row2")
    let parse_appendsubtotal = parseInt(append_subtotal)
   

        if(envio1.checked){
            cost_deliver.innerHTML= Math.round(parse_appendsubtotal*(envio1.value))
        }else if(envio2.checked){
            cost_deliver.innerHTML= Math.round(parse_appendsubtotal*(envio2.value))
        }else if (envio3.checked){
            cost_deliver.innerHTML= Math.round(parse_appendsubtotal*(envio3.value))
        }else{
            cost_deliver.innerHTML= 0
        }
    
    total_Purchase()
}

//////COSTO TOTAL DE COMPRA/////////////
function total_Purchase(){
  
    let envio1 = document.getElementById("deliver1")
    let envio2= document.getElementById("deliver2")
    let envio3 = document.getElementById("deliver3")
    let parse_appendsubtotal = parseInt(append_subtotal)
    
    if(envio1.checked){
        document.getElementById("row3").innerHTML = Math.round(parse_appendsubtotal*(envio1.value)+parse_appendsubtotal)
    }else if(envio2.checked){
        document.getElementById("row3").innerHTML = Math.round(parse_appendsubtotal*(envio2.value)+parse_appendsubtotal)
    }else if (envio3.checked){
        document.getElementById("row3").innerHTML = Math.round(parse_appendsubtotal*(envio3.value)+parse_appendsubtotal)
    }else{
        0
    }
    
}

//////////VALIDACIONES DEL FORM///////////

///Dirección de envío//////
let street=document.getElementById("street")
let number=document.getElementById("number")
let corner =document.getElementById("corner")

/////////Finalizar Compra/////////
let end_buying=document.getElementById("end_buying")

let tarjeta_radio = document.getElementById("tarjeta_radio")
let transf_radio = document.getElementById("transf_radio")
let numero_tarjeta =document.getElementById("tarjeta")
let codseg =document.getElementById("codseg")
let vencimiento =document.getElementById("vencimiento")
let nrocuenta = document.getElementById("nrocuenta")
let cerrar =document.getElementById("Cerrar")

//validación campos -calle, número, esquina-///

function validData(dato) {
    if (dato.value.length == 0) {
        dato.classList.add("is-invalid")
    }
    else { 
        dato.classList.add("is-valid")
    }
}

function validaDataInput(input) {
    validData(input);
    input.addEventListener("input", () => {
        input.classList.remove("is-valid")
        input.classList.remove("is-invalid")
        validData(input);
    });
}

//////Validación campos modal//////////////////

function validData_Modal() {
    if (tarjeta_radio.checked == true && tarjeta.value.length == 0) {
        nrocuenta.value = "";
        tarjeta.classList.add("is-invalid")
        
    }
    else if (tarjeta_radio.checked == true && codseg.value.length == 0) {
        nrocuenta.value = "";
        codseg.classList.add("is-invalid")

    }
    else if (tarjeta_radio.checked == true && vencimiento.value.length == 0) {
        nrocuenta.value = "";
        vencimiento.classList.add("is-invalid")
        
    }
    else if (transf_radio.checked == true && nrocuenta.value.length == 0) {
        tarjeta.value = "";
        codseg.value = "";
        vencimiento.value = "";
        nrocuenta.classList.add("is-invalid")
    }
    else if (tarjeta_radio.checked == false && transf_radio.checked == false) {
        tarjeta.classList.add("is-invalid")
        codseg.classList.add("is-invalid")
        vencimiento.classList.add("is-invalid")
        nrocuenta.classList.add("is-invalid")
    }
    else if (tarjeta_radio.checked == true && transf_radio.checked == false) {
        nrocuenta.value = "";
        nrocuenta.classList.remove("is-invalid")
        nrocuenta.classList.remove("is-valid")
        tarjeta.classList.add("is-valid")
        codseg.classList.add("is-valid")
        vencimiento.classList.add("is-valid")
       
       
    }
    else if (transf_radio.checked == true && tarjeta_radio.checked == false) {
        tarjeta.classList.remove("is-invalid")
        tarjeta.classList.remove("is-valid")
        codseg.classList.remove("is-invalid")
        codseg.classList.remove("is-valid")
        vencimiento.classList.remove("is-invalid")
        vencimiento.classList.remove("is-valid")
        nrocuenta.classList.add("is-valid")
    }
    else
    { 
        tarjeta.classList.add("is-valid")
        codseg.classList.add("is-valid")
        vencimiento.classList.add("is-valid")
        nrocuenta.classList.add("is-valid")
    }
}

function validDataInput_Modal(input) {

    validData_Modal();

    input.addEventListener("input", () => {
            tarjeta.classList.remove("is-invalid")
            codseg.classList.remove("is-invalid")
            vencimiento.classList.remove("is-invalid")
            nrocuenta.classList.remove("is-invalid")
                tarjeta.classList.remove("is-valid")
                codseg.classList.remove("is-valid")
                vencimiento.classList.remove("is-valid")
                nrocuenta.classList.remove("is-valid")
        
                validData_Modal();
    });
}

////////////Validación botón select///////////////////////

function validBtnSelect() {
    if (transf_radio.checked == false && tarjeta_radio.checked == false ) {
        select.classList.add("is-invalid")
        select.style.color = "red"
 
    }
    else{
        select.classList.add("is-valid")
        select.style.color = "blue"
       
    }
}

function validBtnSelect_Change() {
    validBtnSelect()
    tarjeta_radio.addEventListener("change", () => {  
        select.classList.remove("is-invalid")
        select.classList.remove("is-valid")
       
        validBtnSelect()
    });
    transf_radio.addEventListener("change", () => {  
        select.classList.remove("is-invalid")
        select.classList.remove("is-valid")
        
        validBtnSelect()
    });
}

///////VALIDACIÓN ALERTAS CAMPOS DEL FORMULARIO DE PAGO/////////////
function pay_showAlerts() {
    if (tarjeta_radio.checked == true &&(codseg.value.length ==0 || vencimiento.value.length ==0 || tarjeta.value.length == 0)) {
        let confirm_pay = ""

        confirm_pay +=
        `  
        <div class="alert alert-danger" role="alert">
        <strong>Atento!</strong> Debe llenar los campos del formulario de pago obligatorios para la forma de pago seleccionada
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        `
        document.getElementById("confirm_pay").innerHTML = confirm_pay
    }
    else if (transf_radio.checked == true &&(nrocuenta.value.length ==0)){

        let confirm_pay = ""

        confirm_pay +=
        `  
        <div class="alert alert-danger" role="alert">
        <strong>Atento!</strong> Debe llenar los campos del formulario de pago obligatorios para la forma de pago seleccionada
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        `
        document.getElementById("confirm_pay").innerHTML = confirm_pay
    }
    else if (transf_radio.checked == false && tarjeta_radio.checked == false ){

        let confirm_pay = ""

        confirm_pay +=
        `  
        <div class="alert alert-danger" role="alert">
        <strong>Atento!</strong> Debe llenar los campos del formulario de pago obligatorios para la forma de pago seleccionada
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        `
        document.getElementById("confirm_pay").innerHTML = confirm_pay
    }

    else {
        
        let confirm_pay = ""

        confirm_pay +=
        `  
        <div class="alert alert-success" role="alert">
        <strong>Atento!</strong> Campos de formulario de pago completados con éxito
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        `
        document.getElementById("confirm_pay").innerHTML = confirm_pay
        
    }
}


/////VALIDACIÓN SELECCIÓN DEL TIPO DE ENVÍO//////////////

let deliver_exito = document.getElementById("deliver_exito")


function validadeliver(input1,input2,input3) {

    if(input1.checked == false && input2.checked == false && input3.checked == false){
    
    document.getElementById("deliver_type").classList.add("is-invalid")
    document.getElementById("e1").style.color ="red"
    document.getElementById("e2").style.color ="red"
    document.getElementById("e3").style.color ="red"
  
    }else{
        document.getElementById("deliver_type").classList.remove("is-invalid")
        document.getElementById("e1").style.color ="green"
        document.getElementById("e2").style.color ="green"
        document.getElementById("e3").style.color ="green"
    }
    
}

function validadeliver_Input(input1,input2,input3){
    validadeliver(input1,input2,input3)
    ///evento input de tipo de envío
    input1.addEventListener("input", function(e){
        input1.classList.remove("is-invalid")
        input1.classList.remove("is-valid")
        validadeliver(input1,input2,input3)
    })
    input2.addEventListener("input", function(e){
        input2.classList.remove("is-invalid")
        input2.classList.remove("is-valid")
        validadeliver(input1,input2,input3)
    })
    input3.addEventListener("input", function(e){
        input3.classList.remove("is-invalid")
        input3.classList.remove("is-valid")
        validadeliver(input1,input2,input3)
    })
   
    
}

////Chequear cantidades/////////

function check_Quantities(input){

if(input.value.length == 0){
input.classList.add("is-invalid")
}else{
input.classList.add("is-valid")
}

}

function check_Quantities_Input(input){
    check_Quantities(input)
    ///evento input de quantities
    input.addEventListener("input", function(e){
        input.classList.remove("is-invalid")
        input.classList.remove("is-valid")
        check_Quantities(input)
    })
     
}



function show_formSucess(){
let envio1 = document.getElementById("deliver1")
let envio2= document.getElementById("deliver2")
let envio3 = document.getElementById("deliver3")

if(
street.classList.contains("is-valid") && number.classList.contains("is-valid") && corner.classList.contains("is-valid")
&&
(nrocuenta.classList.contains("is-valid")|| (tarjeta.classList.contains("is-valid") && codseg.classList.contains("is-valid") && tarjeta.classList.contains("is-valid"))
)
&&
($("#newproduct_subtotal").html()!=="" && $("#subtotal1").html()!=="")
&&
(envio1.checked == true || envio2.checked == true || envio3.checked == true)
)

{
    let alert_success = ""

    alert_success +=
    `
    <div class="alert alert-success" role="alert" id="alert-success">
    <p>¡Has completado con éxito!</p>
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
  `
  document.getElementById("exito").innerHTML=alert_success
  console.log("registro exitoso")
   } 

}



////////DOM CONTENT LOADED////////////////////


document.addEventListener("DOMContentLoaded", function(){
             getJSONData(CART_INFO_URL_2).then(function(resultObj){
                if (resultObj.status === "ok"){
                currentCart = resultObj.data
                console.log(currentCart)
                currentCart_2=currentCart.articles
                console.log(currentCart_2)
                show_cart()
               
                
                
                if(localStorage.getItem('array') !== null){
                    new_Card()
                  }

            ////////INPUT DEL PRIMER ELEMENTO -PEUGEOT 208- CANTIDAD//////////////////////////
            document.getElementById("first_element_quantity").addEventListener("input",function(){
                htmlContenttoAppend3=""
                for(let i = 0; i < currentCart_2.length; i++){
                let cart2=currentCart_2[i];
                let subtotal = Math.round(first_element_quantity.value*cart2.unitCost)
                console.log(subtotal)
                htmlContenttoAppend3+=
                `<strong>${cart2.currency}${" "}${subtotal}</strong>`
                }
                document.getElementById("subtotal1").innerHTML=htmlContenttoAppend3
                })
                
            //////DESHABILITACIÓN DE ALGUNOS CAMPOS DEL FORMULARIO DE PAGO EN FUNCIÓN DE MODALIDAD DE PAGO////////
                let nrocuenta_input = document.getElementById("nrocuenta")
                let tarjeta = document.getElementById("tarjeta");
                let codseg = document.getElementById("codseg");
                let vencimiento = document.getElementById("vencimiento");

            ////Si elijo pago con tarjeta/////

            //parto de situación disabled y luego voy modificando//
            nrocuenta_input.setAttribute("disabled", "");
            tarjeta.setAttribute("disabled", "");
            codseg.setAttribute("disabled", "");
            vencimiento.setAttribute("disabled", "");

                
                tarjeta_radio.addEventListener("input",function(){
                if(tarjeta_radio.checked == true){
                nrocuenta_input.setAttribute("disabled", "");
                tarjeta.removeAttribute("disabled");
                codseg.removeAttribute("disabled");
                vencimiento.removeAttribute("disabled");
                document.getElementById("no_selection").innerHTML= "Tarjeta de Crédito"
                }
                })

             
                 

            ////Si elijo pago con transferencia bancaria/////
               transf_radio.addEventListener("input",function(){
                if(transf_radio.checked == true){
                nrocuenta_input.removeAttribute("disabled");
                tarjeta.setAttribute("disabled", "");
                codseg.setAttribute("disabled", "");
                vencimiento.setAttribute("disabled", "");
                document.getElementById("no_selection").innerHTML= "Transferencia Bancaria"
                }
                })


            

                
                   
                   

            /////EVENTO CLICK ASOCIADO A FINALIZAR COMPRA////
                end_buying.addEventListener("click", () => {
                    validaDataInput(street)
                    validaDataInput(number)
                    validaDataInput(corner)
                    validDataInput_Modal(tarjeta)
                    validDataInput_Modal(codseg)
                    validDataInput_Modal(vencimiento)
                    validDataInput_Modal(nrocuenta)
                    validDataInput_Modal(tarjeta_radio)
                    validDataInput_Modal(transf_radio)
                    validBtnSelect_Change();
                    
                    let envio1 = document.getElementById("deliver1")
                    let envio2= document.getElementById("deliver2")
                    let envio3 = document.getElementById("deliver3")
                    validadeliver_Input(envio1,envio2,envio3)

                    let first_element_quantity = document.getElementById("first_element_quantity")
                    let new_element_quantity = document.getElementById("new_element_quantity") 
                    check_Quantities_Input(first_element_quantity)
                    check_Quantities_Input(new_element_quantity)

                    pay_showAlerts()
                    show_formSucess()
                });

        }
    })});

    



let var_user_menu = document.getElementById("menu_user_2")
let get_ls = localStorage.getItem("text");
console.log(get_ls)
var_user_menu.innerHTML += get_ls
                


