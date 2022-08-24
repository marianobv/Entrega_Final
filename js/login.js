
function setLoginID(id) {
  localStorage.setItem("LoginID", id);
  window.location = "index_2.html"
}

//setLoginID()




//1. Declaro campos vacíos

function empty_email(){
let email_valid = document.getElementById("ee")
if(email_valid.value===""){
return false;
}else{
return true;
}
}

function empty_password(){
  let password_valid= document.getElementById("pw")
  if(password_valid.value===""){
  return false;
  }else{
  return true;
  }
  }



//2. Declaro funciones de errores y éxitos
  
              function showAlertError1() {
                   document.getElementById("alert-danger1").classList.add("show");
                   }

                            function showAlertError2() {
                                    document.getElementById("alert-danger2").classList.add("show");
                                    }

                                    function showAlertError3() {
                                      document.getElementById("alert-danger3").classList.add("show");
                                      }

    //3.Muestro alertas
   

    function general_valid () {
      if(empty_email() && empty_password ()){
        setLoginID ()
      }
      else if(!empty_email && empty_password){
        showAlertError1();
      }
      else if(empty_email && !empty_password){
        showAlertError2();
      }
      else{
        showAlertError3()
      }
      }
    


        
    //4.Agrego 1 listener 
          enter.addEventListener("click", () => {
          general_valid ()
          }
          )


//ENTREGA 2
const emailText = document.getElementById("ee");
const enter_var = document.getElementById("enter");
let var_user_menu = document.getElementById("user_menu")

enter_var.addEventListener("click", (evt) => {
  if (emailText.value) localStorage.setItem("text", emailText.value)
  let get_ls = localStorage.getItem("text");
  console.log(get_ls)
  var_user_menu.innerHTML += get_ls
  
});






        