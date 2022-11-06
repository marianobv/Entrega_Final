//SE LOGGEA Y EMPIEZA A MOSTRAR EL RESTO DE LAS PANTALLAS (CATEGORIES, PRODUCTS, ETC)
function setLoginID() {
  let emailText = document.getElementById("ee");
  let emailText_value = emailText.value 
  localStorage.setItem("LoginID", emailText_value);
  localStorage.setItem("text", emailText_value);
  window.location = "index_2.html"
}

//VERIFICA QUE EL MAIL NO ESTÉ VACÍO
function empty_email() {
let emailText = document.getElementById("ee");
let emailText_value = emailText.value 

 if(emailText_value.length > 0){
  return "ok"
 }else{
  return "error"
 }
  
}

//VERIFICA QUE LA CONTRASEÑA NO ESTÉ VACÍA
function empty_password(){
  let password_valid= document.getElementById("pw")
  if(password_valid.value.length >0){
  return "ok"
  }else
  {
  return "error"
  }
}

//VALIDA LA ESTRUCTURA DEL MAIL
function valid_email(valor) {
  if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(valor)){
   return "ok"
  } else {
   return "error"
  }

}

//MUESTRA LAS ALERTAS

function showAlertError1() {
document.getElementById("alert-danger1").classList.add("show");
//mail vacío
}

function showAlertError2() {
document.getElementById("alert-danger2").classList.add("show");
//contraseña vacía
}

function showAlertError3() {
document.getElementById("alert-danger3").classList.add("show");
//email y contraseña vacía
}


//VALIDACIÓN GENERAL DE EMAIL, CONTRASEÑA Y ESTRUCTURA DE MAIL

function general_valid() {

      let emailText = document.getElementById("ee");
      let emailText_value = emailText.value 
      
     if(empty_email() === "error" && empty_password() === "ok" && valid_email(emailText_value) === "error"){
        showAlertError1()
        //mail vacío
        console.log("mail vacío")
      }
      else if(empty_password() === "error" && empty_email() === "ok" && valid_email(emailText_value) === "ok"){
        showAlertError2()
        //contraseña vacía
        console.log("contraseña vacía")
      }
      else if(empty_password() === "error" && empty_email() === "error" && valid_email(emailText_value) === "error")
      {
        showAlertError3()
        //ambos mal
        console.log("ambos mal")
      }else if
      (empty_email() === "ok" && empty_password() === "error" && valid_email(emailText_value) === "error"){
        showAlertError2()
        //contraseña vacía
        console.log("contraseña vacía")
      }
      else if
      (empty_email() === "ok" && empty_password() === "ok" && valid_email(emailText_value) === "error"){
        showAlertError1()
        //mail vacío
        console.log("mail vacío")
      }
      else{
          setLoginID()
      }
        
      }



//DOM CONTENT LOADEAD
document.addEventListener("DOMContentLoaded", function(e){

//REMUEVE EL HISTORIAL VIEJO CUANDO SE INGRESA POR 1A VEZ Y TAMBIÉN CUANDO EL USUARIO SE VA DEL E-COMMERCE SE BORRA TODA SU INFORMACIÓN DEL LOCAL STORAGE
  localStorage.removeItem("text");
  localStorage.removeItem("LoginID");

//FUNCIONES ASOCIADAS AL BOTÓN DE INGRESAR -LOGIN-

  let enter = document.getElementById("enter");

  enter.addEventListener("click", () => {
    empty_email()
    empty_password()
    valid_email()
    general_valid ()
    }
    )

});







        